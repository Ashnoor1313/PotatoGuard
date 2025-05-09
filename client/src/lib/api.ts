import axios from "axios";
import { ClassificationResult } from "@/types";

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
