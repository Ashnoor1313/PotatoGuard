import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import fs from "fs";
import { predictPotatoDisease } from "./ml-model";
import { storage as dataStorage } from "./storage";

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Ensure temporary directory exists for processing uploaded files
  const tmpDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  // API endpoint for disease classification
  app.post("/api/predict", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ 
          success: false, 
          message: "No file uploaded" 
        });
      }

      // Save the file temporarily
      const fileBuffer = req.file.buffer;
      const fileName = `${Date.now()}-${req.file.originalname}`;
      const filePath = path.join(tmpDir, fileName);
      
      fs.writeFileSync(filePath, fileBuffer);

      try {
        // Process the image with our model
        const predictions = await predictPotatoDisease(filePath);
        
        // Store prediction in database
        try {
          const primaryPrediction = predictions[0]; // Highest confidence prediction
          await dataStorage.createPrediction({
            imageFilename: fileName,
            primaryClass: primaryPrediction.class,
            primaryConfidence: primaryPrediction.confidence.toString(),
            allPredictions: JSON.stringify(predictions),
            timestamp: new Date().toISOString(),
          });
        } catch (dbError) {
          console.warn("Failed to save prediction to database:", dbError);
          // Continue anyway - we don't want to fail the request if storage fails
        }
        
        // Return predictions
        res.json({
          success: true,
          predictions
        });
      } finally {
        // Clean up - remove the temporary file
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "An error occurred while processing the image" 
      });
    }
  });

  // API endpoint to get prediction history
  app.get("/api/predictions", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const predictions = await dataStorage.getPredictions(limit);
      res.json({
        success: true,
        predictions
      });
    } catch (error) {
      console.error("Error fetching predictions:", error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "An error occurred while fetching predictions"
      });
    }
  });

  // API endpoint to get a single prediction by ID
  app.get("/api/predictions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const prediction = await dataStorage.getPrediction(id);
      
      if (!prediction) {
        return res.status(404).json({
          success: false,
          message: "Prediction not found"
        });
      }
      
      res.json({
        success: true,
        prediction
      });
    } catch (error) {
      console.error("Error fetching prediction:", error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "An error occurred while fetching the prediction"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
