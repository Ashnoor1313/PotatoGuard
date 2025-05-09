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
        <Card className="shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60">
          <CardContent className="p-8 h-64 flex flex-col items-center justify-center text-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-5">
              <FileText className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">No Results Yet</h2>
            <p className="text-gray-600 dark:text-gray-400">Upload and analyze an image to see disease classification results</p>
          </CardContent>
        </Card>
      </section>
    );
  }

  // Loading state
  if (isAnalyzing) {
    return (
      <section className="w-full lg:w-1/2 flex flex-col space-y-6">
        <Card className="shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60">
          <CardContent className="p-8 h-64 flex flex-col items-center justify-center text-center">
            <div className="mb-5 relative">
              <div className="w-16 h-16 border-4 border-green-100 dark:border-green-900/50 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Analyzing Image</h2>
            <p className="text-gray-600 dark:text-gray-400">Our model is processing your potato leaf image...</p>
          </CardContent>
        </Card>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="w-full lg:w-1/2 flex flex-col space-y-6">
        <Card className="shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60">
          <CardContent className="p-8">
            <div className="flex items-start">
              <div className="mr-5">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <AlertCircle className="h-7 w-7 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Error Processing Image</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
                <Button onClick={onTryAgain} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                  Try Again
                </Button>
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
        <Card className="shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <svg className="h-5 w-5 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Analysis <span className="text-green-600 dark:text-green-400">Results</span></h2>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{formattedTimestamp}</span>
            </div>
            
            {/* Primary Result */}
            <div className={`bg-gradient-to-r ${primaryResult.class.toLowerCase().includes('healthy') 
              ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 border-green-500' 
              : 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/30 border-amber-500'} 
              rounded-xl p-6 border-l-4 mb-6 shadow-sm`}>
              <div className="flex items-center">
                <div className="mr-5">
                  <div className={`rounded-full p-3 text-white ${primaryResult.class.toLowerCase().includes('healthy') 
                    ? 'bg-gradient-to-br from-green-500 to-green-600' 
                    : 'bg-gradient-to-br from-amber-500 to-amber-600'}`}>
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{primaryResult.class}</h3>
                  <div className="flex items-center mt-2">
                    <div className="w-full max-w-[200px] bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-3">
                      <div 
                        className={`h-2.5 rounded-full ${primaryResult.class.toLowerCase().includes('healthy') 
                          ? 'bg-green-500' 
                          : 'bg-amber-500'}`} 
                        style={{ width: `${(primaryResult.confidence * 100).toFixed(1)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {(primaryResult.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Confidence Visualization */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-inner">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-4">Confidence Analysis</h3>
              <ConfidenceChart predictions={results.predictions} />
            </div>
          </CardContent>
        </Card>
        
        {/* Disease Information Card */}
        <DiseaseInfo classification={primaryResult.class} />
      </section>
    );
  }

  return null;
}
