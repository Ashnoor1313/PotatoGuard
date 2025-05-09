import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ImageUploader } from "@/components/ImageUploader";
import { ResultsSection } from "@/components/ResultsSection";
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
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Potato Leaf Analyzer</h1>
            <p className="text-lg text-neutral-dark dark:text-gray-300 max-w-3xl mx-auto">
              Upload an image of a potato leaf to identify potential diseases using our advanced CNN model
            </p>
          </header>

          {/* Main Content Section */}
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
        </div>
      </main>
      
      <footer className="bg-neutral-darkest text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} PotatoGuard. All rights reserved.</p>
          <p className="text-sm mt-2 text-white/70">Powered by AI and FastAPI.</p>
        </div>
      </footer>
    </div>
  );
}