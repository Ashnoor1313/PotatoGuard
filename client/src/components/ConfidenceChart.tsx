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
        return "bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-sm";
      case "early blight":
        return "bg-gradient-to-r from-amber-500 to-amber-600 border-0 shadow-sm";
      case "healthy":
        return "bg-gradient-to-r from-green-500 to-green-600 border-0 shadow-sm";
      default:
        return "bg-gradient-to-r from-blue-500 to-blue-600 border-0 shadow-sm";
    }
  };

  const getProgressClass = (className: string) => {
    switch (className.toLowerCase()) {
      case "late blight":
        return "bg-red-100 dark:bg-red-950/30 [&>div]:bg-gradient-to-r [&>div]:from-red-500 [&>div]:to-red-600";
      case "early blight":
        return "bg-amber-100 dark:bg-amber-950/30 [&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-amber-600";
      case "healthy":
        return "bg-green-100 dark:bg-green-950/30 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-green-600";
      default:
        return "bg-blue-100 dark:bg-blue-950/30 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-blue-600";
    }
  };

  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Disease Probability</h3>
      </div>
      
      <div className="space-y-4">
        {sortedPredictions.map((prediction, index) => {
          const confidenceValue = (prediction.confidence * 100).toFixed(1);
          const isHighConfidence = parseFloat(confidenceValue) > 70;
          
          return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <Badge className={cn("px-3 py-1 text-sm font-medium", getBadgeClass(prediction.class))}>
                {prediction.class}
              </Badge>
              <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
                isHighConfidence 
                  ? prediction.class.toLowerCase().includes('healthy')
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              }`}>
                {confidenceValue}%
              </span>
            </div>
            <div className="relative pt-1">
              <Progress 
                value={prediction.confidence * 100} 
                max={100} 
                className={cn("h-2.5 rounded-full", getProgressClass(prediction.class))}
              />
            </div>
          </div>
        )})}
      </div>
      
      <div className="pt-4 mt-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
        Based on analysis of leaf image patterns and machine learning predictions
      </div>
    </div>
  );
}