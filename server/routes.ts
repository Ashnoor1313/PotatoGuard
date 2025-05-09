import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import fs from "fs";
import { predictPotatoDisease } from "./ml-model";

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

  const httpServer = createServer(app);

  return httpServer;
}
