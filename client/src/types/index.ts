export interface PredictionResult {
  class: string;
  confidence: number;
}

export interface ClassificationResult {
  predictions: PredictionResult[];
  success: boolean;
}
