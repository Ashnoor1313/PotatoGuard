import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImageUploader } from "@/components/ImageUploader";
import { ResultsSection } from "@/components/ResultsSection";
import { PredictionGallery } from "@/components/PredictionGallery";
import { SampleImagesSection } from "@/components/SampleImagesSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClassificationResult } from "@/types";

export default function Analyzer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<ClassificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResults(null);
    setError(null);
  };
  
  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
    setResults(null);
    setError(null);
  };
  
  const handleTryAgain = () => {
    setError(null);
    setResults(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-b from-green-50 to-white dark:from-gray-950 dark:to-black py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <header className="mb-10 text-center">
            <div className="inline-block p-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-14 h-14 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">
              Potato Leaf <span className="text-green-600 dark:text-green-400">Analyzer</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Upload an image of a potato leaf to identify potential diseases using our advanced CNN model
            </p>
          </header>

          {/* Main Content Section */}
          <Tabs defaultValue="analyzer" className="w-full space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white/70 dark:bg-gray-800/50 p-1 rounded-xl border border-green-100 dark:border-green-900/40 shadow-md">
              <TabsTrigger value="analyzer" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white rounded-lg py-3">Leaf Analyzer</TabsTrigger>
              <TabsTrigger value="gallery" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white rounded-lg py-3">Prediction History</TabsTrigger>
              <TabsTrigger value="samples" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white rounded-lg py-3">Sample Images</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analyzer" className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Upload Section */}
                <section className="w-full lg:w-1/2 flex flex-col space-y-6">
                  <ImageUploader 
                    selectedFile={selectedFile}
                    previewUrl={previewUrl}
                    onFileSelect={handleFileSelect}
                    onRemoveImage={handleRemoveImage}
                    onAnalyzeImage={() => setIsAnalyzing(true)}
                    isAnalyzing={isAnalyzing}
                    setIsAnalyzing={setIsAnalyzing}
                    setResults={setResults}
                    setError={setError}
                  />
                </section>

                {/* Results Section */}
                <ResultsSection 
                  isAnalyzing={isAnalyzing}
                  results={results}
                  error={error}
                  onTryAgain={handleTryAgain}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-green-100 dark:border-green-900">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Previous <span className="text-green-600 dark:text-green-400">Predictions</span></h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    View your past potato leaf analyses and their results
                  </p>
                </div>
                
                <PredictionGallery limit={9} />
              </div>
            </TabsContent>
            
            <TabsContent value="samples" className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-green-100 dark:border-green-800">
                <SampleImagesSection />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}