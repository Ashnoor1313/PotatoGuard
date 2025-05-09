import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, FileText } from "lucide-react";
import { DiseaseInfo } from "@/components/DiseaseInfo";
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
            <FileText className="h-12 w-12 text-neutral-medium mb-4" />
            <h2 className="text-xl font-semibold text-neutral-darkest mb-2">No Results Yet</h2>
            <p className="text-neutral-dark">Upload and analyze an image to see disease classification results</p>
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
            <h2 className="text-xl font-semibold text-neutral-darkest mb-2">Analyzing Image</h2>
            <p className="text-neutral-dark">Our model is processing your potato leaf image...</p>
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
                <h2 className="text-xl font-semibold text-neutral-darkest mb-2">Error Processing Image</h2>
                <p className="text-neutral-darkest mb-4">{error}</p>
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
              <h2 className="text-xl font-semibold text-neutral-darkest">Classification Result</h2>
              <span className="text-sm text-neutral-dark">{formattedTimestamp}</span>
            </div>
            
            {/* Primary Result */}
            <div className="bg-primary bg-opacity-10 rounded-lg p-4 border-l-4 border-primary mb-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="bg-primary rounded-full p-2 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold">{primaryResult.class}</h3>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">Confidence:</span>
                      <span className="text-sm font-semibold">{(primaryResult.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 mt-1 bg-neutral-medium rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${primaryResult.confidence * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alternative Predictions */}
            {alternatives.length > 0 && (
              <>
                <h3 className="text-md font-medium mb-2">Alternative Predictions</h3>
                
                {alternatives.map((alternative, index) => (
                  <div key={index} className="border border-neutral-medium rounded-lg p-3 mb-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-neutral-darkest">{alternative.class}</span>
                      <span className="text-sm font-semibold">{(alternative.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 mt-1 bg-neutral-medium rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary" 
                        style={{ width: `${alternative.confidence * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </CardContent>
        </Card>
        
        {/* Disease Information Card */}
        <DiseaseInfo classification={primaryResult.class} />
      </section>
    );
  }

  return null;
}
