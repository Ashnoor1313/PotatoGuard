import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, FileText } from "lucide-react";
import { DiseaseInfo } from "@/components/DiseaseInfo";
import { ConfidenceChart } from "@/components/ConfidenceChart";
import { ClassificationResult } from "@/types";

interface ResultsSectionProps {
  isAnalyzing: boolean;
  results: ClassificationResult | null;
  error: string | null;
  onTryAgain: () => void;
}

export function ResultsSection({
  isAnalyzing,
  results,
  error,
  onTryAgain
}: ResultsSectionProps) {
  // Initial state - No results
  if (!isAnalyzing && !results && !error) {
    return (
      <section className="w-full lg:w-1/2 flex flex-col space-y-6">
        <Card className="shadow-md">
          <CardContent className="p-6 h-64 flex flex-col items-center justify-center text-center">
            <FileText className="h-12 w-12 text-neutral-medium dark:text-gray-500 mb-4" />
            <h2 className="text-xl font-semibold text-neutral-darkest dark:text-white mb-2">No Results Yet</h2>
            <p className="text-neutral-dark dark:text-gray-400">Upload and analyze an image to see disease classification results</p>
          </CardContent>
        </Card>
      </section>
    );
  }

  // Loading state
  if (isAnalyzing) {
    return (
      <section className="w-full lg:w-1/2 flex flex-col space-y-6">
        <Card className="shadow-md">
          <CardContent className="p-6 h-64 flex flex-col items-center justify-center text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <h2 className="text-xl font-semibold text-neutral-darkest dark:text-white mb-2">Analyzing Image</h2>
            <p className="text-neutral-dark dark:text-gray-400">Our model is processing your potato leaf image...</p>
          </CardContent>
        </Card>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="w-full lg:w-1/2 flex flex-col space-y-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="bg-destructive rounded-full p-2 text-white">
                  <AlertCircle className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-neutral-darkest dark:text-white mb-2">Error Processing Image</h2>
                <p className="text-neutral-darkest dark:text-gray-300 mb-4">{error}</p>
                <Button onClick={onTryAgain}>Try Again</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  // Results state
  if (results) {
    const formattedTimestamp = new Date().toLocaleString();
    const primaryResult = results.predictions[0];
    const alternatives = results.predictions.slice(1);

    return (
      <section className="w-full lg:w-1/2 flex flex-col space-y-6">
        {/* Classification Result Card */}
        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-neutral-darkest dark:text-white">Classification Result</h2>
              <span className="text-sm text-neutral-dark dark:text-gray-400">{formattedTimestamp}</span>
            </div>
            
            {/* Primary Result */}
            <div className="bg-primary bg-opacity-10 dark:bg-primary/20 rounded-lg p-4 border-l-4 border-primary mb-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="bg-primary rounded-full p-2 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold dark:text-white">{primaryResult.class}</h3>
                  <p className="text-sm text-neutral-dark dark:text-gray-300 mt-1">
                    Confidence: <span className="font-semibold dark:text-white">{(primaryResult.confidence * 100).toFixed(1)}%</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Confidence Visualization */}
            <ConfidenceChart predictions={results.predictions} />
          </CardContent>
        </Card>
        
        {/* Disease Information Card */}
        <DiseaseInfo classification={primaryResult.class} />
      </section>
    );
  }

  return null;
}
