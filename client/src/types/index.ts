export interface PredictionResult {
  class: string;
  confidence: number;
}

export interface ClassificationResult {
  predictions: PredictionResult[];
  success: boolean;
}

// Database prediction model
export interface StoredPrediction {
  id: number;
  imageFilename: string;
  primaryClass: string;
  primaryConfidence: string;
  allPredictions: string; // JSON string
  timestamp: string;
}

// API responses for prediction history
export interface PredictionHistory {
  success: boolean;
  predictions: StoredPrediction[];
  message?: string;
}

export interface PredictionDetail {
  success: boolean;
  prediction: StoredPrediction;
  message?: string;
}
