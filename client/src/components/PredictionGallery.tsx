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
        return "bg-gradient-to-r from-red-500 to-red-700 border-0";
      case "early blight":
        return "bg-gradient-to-r from-amber-500 to-amber-700 border-0";
      case "healthy":
        return "bg-gradient-to-r from-green-500 to-green-700 border-0";
      default:
        return "bg-gradient-to-r from-blue-500 to-blue-700 border-0";
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(limit).fill(0).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-full mt-2" />
            </CardHeader>
            <CardContent className="p-4">
              <Skeleton className="h-28 w-full" />
            </CardContent>
            <CardFooter className="p-4">
              <Skeleton className="h-4 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error || !data || !data.predictions || data.predictions.length === 0) {
    return (
      <Card className="p-4">
        <CardHeader>
          <CardTitle>No Prediction History</CardTitle>
          <CardDescription>
            There are no previous predictions to display. Upload an image to analyze potato disease.
          </CardDescription>
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