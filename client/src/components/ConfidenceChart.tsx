import React from "react";
import { PredictionResult } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ConfidenceChartProps {
  predictions: PredictionResult[];
}

export function ConfidenceChart({ predictions }: ConfidenceChartProps) {
  // Sort predictions by confidence (highest first)
  const sortedPredictions = [...predictions].sort((a, b) => b.confidence - a.confidence);

  // Define color classes for different disease types
  const getClassColor = (className: string) => {
    switch (className.toLowerCase()) {
      case "late blight":
        return "bg-red-500 text-white";
      case "early blight":
        return "bg-amber-500 text-white";
      case "healthy":
        return "bg-green-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  // Get badge and progress bar colors
  const getBadgeClass = (className: string) => {
    switch (className.toLowerCase()) {
      case "late blight":
        return "bg-gradient-to-r from-red-500 to-red-700 border-0";
      case "early blight":
        return "bg-gradient-to-r from-amber-500 to-amber-700 border-0";
      case "healthy":
        return "bg-gradient-to-r from-green-500 to-green-700 border-0";
      default:
        return "bg-gradient-to-r from-blue-500 to-blue-700 border-0";
    }
  };

  const getProgressClass = (className: string) => {
    switch (className.toLowerCase()) {
      case "late blight":
        return "bg-red-200 [&>div]:bg-red-500";
      case "early blight":
        return "bg-amber-200 [&>div]:bg-amber-500";
      case "healthy":
        return "bg-green-200 [&>div]:bg-green-500";
      default:
        return "bg-blue-200 [&>div]:bg-blue-500";
    }
  };

  return (
    <div className="space-y-4 rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Confidence Analysis</h3>
      
      <div className="space-y-3">
        {sortedPredictions.map((prediction, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <Badge className={cn("font-semibold", getBadgeClass(prediction.class))}>
                {prediction.class}
              </Badge>
              <span className="text-sm font-medium">
                {(prediction.confidence * 100).toFixed(1)}%
              </span>
            </div>
            <Progress 
              value={prediction.confidence * 100} 
              max={100} 
              className={cn("h-2", getProgressClass(prediction.class))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}