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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        return (
          <Card key={prediction.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <Badge className={getBadgeClass(prediction.primaryClass)}>
                  {prediction.primaryClass}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {(parseFloat(prediction.primaryConfidence) * 100).toFixed(1)}%
                </div>
              </div>
              <CardTitle className="text-lg mt-2">Prediction #{prediction.id}</CardTitle>
              <CardDescription className="text-xs">
                {formattedDate}
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="p-4">
              <div className="text-sm">
                <div className="font-medium mb-1">All Classifications:</div>
                <div className="space-y-1">
                  {allPredictions.length > 0 ? (
                    allPredictions.map((pred: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{pred.class}</span>
                        <span className="text-muted-foreground">
                          {(pred.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-muted-foreground">No detailed data available</div>
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