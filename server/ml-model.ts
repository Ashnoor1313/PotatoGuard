import axios from "axios";
import FormData from "form-data";
import fs from "fs";

// Interface for model prediction results
interface Prediction {
  class: string;
  confidence: number;
}

/**
 * Sends an image to FastAPI backend for prediction
 * @param imagePath Path to the image file
 * @returns Promise with prediction results
 */
export async function predictPotatoDisease(imagePath: string): Promise<Prediction[]> {
  // Determine FastAPI backend URL from environment with fallback
  const fastApiUrl = process.env.FASTAPI_URL || "http://localhost:8000/predict";
  
  try {
    // Create form data with image file
    const form = new FormData();
    form.append("file", fs.createReadStream(imagePath));
    
    // Make request to FastAPI backend
    const response = await axios.post(fastApiUrl, form, {
      headers: {
        ...form.getHeaders(),
      },
      timeout: 30000, // 30 second timeout for larger images
    });
    
    // Handle the response
    if (response.status === 200) {
      const data = response.data;
      
      // Normalize the response format
      if (data.predictions) {
        return data.predictions;
      } else if (data.class && typeof data.confidence !== "undefined") {
        // Handle case where API returns a single prediction
        return [{ 
          class: data.class, 
          confidence: data.confidence 
        }];
      } else if (Array.isArray(data)) {
        // Handle array of predictions
        return data;
      }
      
      // If response format is unexpected, throw error
      throw new Error("Unexpected response format from model API");
    } else {
      throw new Error(`Model API returned status ${response.status}`);
    }
  } catch (error) {
    console.error("Error calling model API:", error);
    
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || "Failed to communicate with model API";
      throw new Error(errorMessage);
    }
    
    throw error;
  }
}

/**
 * Fallback implementation that returns mock predictions when FastAPI is not available
 * Only used for development/testing when the real model is unavailable
 */
export async function mockPredictPotatoDisease(): Promise<Prediction[]> {
  console.warn("Using mock predictions - FastAPI model not available");
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock predictions
  return [
    { class: "Late Blight", confidence: 0.92 },
    { class: "Early Blight", confidence: 0.07 },
    { class: "Healthy", confidence: 0.01 }
  ];
}
