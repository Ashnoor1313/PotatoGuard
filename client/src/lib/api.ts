import axios from "axios";
import { ClassificationResult, PredictionHistory, PredictionDetail } from "@/types";

const API_BASE_URL = "/api";

// Create form data with the image file
export async function analyzeImage(file: File): Promise<ClassificationResult> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post<ClassificationResult>(
      `${API_BASE_URL}/predict`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || "Failed to analyze image";
      throw new Error(errorMessage);
    }
    throw new Error("An unexpected error occurred");
  }
}

// Get prediction history
export async function getPredictionHistory(limit = 10): Promise<PredictionHistory> {
  try {
    const response = await axios.get<PredictionHistory>(
      `${API_BASE_URL}/predictions?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || "Failed to fetch prediction history";
      throw new Error(errorMessage);
    }
    throw new Error("An unexpected error occurred");
  }
}

// Get a single prediction by ID
export async function getPrediction(id: number): Promise<PredictionDetail> {
  try {
    const response = await axios.get<PredictionDetail>(
      `${API_BASE_URL}/predictions/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || "Failed to fetch prediction";
      throw new Error(errorMessage);
    }
    throw new Error("An unexpected error occurred");
  }
}
