import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPredictionHistory } from "@/lib/api";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

interface PredictionGalleryProps {
  limit?: number;
}

export function PredictionGallery({ limit = 6 }: PredictionGalleryProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["/api/predictions"],
    queryFn: () => getPredictionHistory(limit),
  });

  // Helper to get badge class based on disease class
  const getBadgeClass = (className: string) => {
    switch (className.toLowerCase()) {
      case "late blight":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-sm";
      case "early blight":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 shadow-sm";
      case "healthy":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-sm";
      default:
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-sm";
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(limit).fill(0).map((_, i) => (
          <Card key={i} className="overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60 shadow-md">
            <CardHeader className="p-5">
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-24 rounded-lg" />
                <Skeleton className="h-4 w-16 rounded-full" />
              </div>
              <Skeleton className="h-5 w-full mt-3 rounded-md" />
              <Skeleton className="h-3 w-28 mt-2 rounded-md" />
            </CardHeader>
            <Separator className="bg-green-100 dark:bg-green-900/30" />
            <CardContent className="p-5 pt-4">
              <Skeleton className="h-4 w-36 mb-3 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error || !data || !data.predictions || data.predictions.length === 0) {
    return (
      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60 shadow-md">
        <CardHeader className="p-6">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">No Prediction History</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              There are no previous predictions to display. Upload an image on the Leaf Analyzer tab to diagnose potato diseases.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.predictions.map((prediction) => {
        // Parse the JSON string of all predictions
        let allPredictions;
        try {
          allPredictions = JSON.parse(prediction.allPredictions);
        } catch (e) {
          allPredictions = [];
        }

        // Format the timestamp
        let formattedDate;
        try {
          formattedDate = format(new Date(prediction.timestamp), "MMM d, yyyy h:mm a");
        } catch (e) {
          formattedDate = prediction.timestamp;
        }

        // Determine if this is a healthy prediction
        const isHealthy = prediction.primaryClass.toLowerCase().includes('healthy');

        return (
          <Card 
            key={prediction.id} 
            className="overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex justify-between items-center">
                <Badge className={getBadgeClass(prediction.primaryClass)}>
                  {prediction.primaryClass}
                </Badge>
                <div className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {(parseFloat(prediction.primaryConfidence) * 100).toFixed(1)}%
                </div>
              </div>
              <CardTitle className="text-lg mt-3 text-gray-800 dark:text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ${isHealthy ? 'text-green-500' : 'text-amber-500'}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isHealthy 
                      ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      : "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    } 
                  />
                </svg>
                Analysis #{prediction.id}
              </CardTitle>
              <CardDescription className="text-xs mt-1 text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formattedDate}
              </CardDescription>
            </CardHeader>
            <Separator className="bg-green-100 dark:bg-green-900/30" />
            <CardContent className="p-5 pt-4">
              <div className="text-sm">
                <div className="font-medium mb-2 text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Classification Results:
                </div>
                <div className="space-y-2 mt-3">
                  {allPredictions.length > 0 ? (
                    allPredictions.map((pred: any, index: number) => {
                      const confidence = (pred.confidence * 100).toFixed(1);
                      const isHighConfidence = parseFloat(confidence) > 70;
                      const isMediumConfidence = parseFloat(confidence) > 30 && parseFloat(confidence) <= 70;
                      const barColor = pred.class.toLowerCase().includes('healthy')
                        ? 'bg-green-500' 
                        : pred.class.toLowerCase().includes('late') 
                          ? 'bg-red-500'
                          : 'bg-amber-500';
                      
                      return (
                        <div key={index} className="flex flex-col space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-800 dark:text-white font-medium">{pred.class}</span>
                            <span className={`font-semibold ${
                              isHighConfidence 
                                ? 'text-green-600 dark:text-green-400' 
                                : isMediumConfidence 
                                  ? 'text-amber-600 dark:text-amber-400' 
                                  : 'text-gray-600 dark:text-gray-400'
                            }`}>
                              {confidence}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${barColor}`} 
                              style={{ width: `${confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-gray-500 dark:text-gray-400 italic text-center py-2">
                      No detailed data available
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}