import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ClassificationResult } from "@/types";
import { analyzeImage } from "@/lib/api";

interface ImageUploaderProps {
  selectedFile: File | null;
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
  onRemoveImage: () => void;
  onAnalyzeImage: () => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (analyzing: boolean) => void;
  setResults: (results: ClassificationResult | null) => void;
  setError: (error: string | null) => void;
}

export function ImageUploader({
  selectedFile,
  previewUrl,
  onFileSelect,
  onRemoveImage,
  onAnalyzeImage,
  isAnalyzing,
  setIsAnalyzing,
  setResults,
  setError
}: ImageUploaderProps) {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    
    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }
    
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 10MB",
        variant: "destructive"
      });
      return;
    }
    
    onFileSelect(file);
  }, [onFileSelect, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp']
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false
  });
  
  const handleAnalyzeClick = async () => {
    if (!selectedFile) return;
    
    setUploading(true);
    setIsAnalyzing(true);
    onAnalyzeImage();
    
    try {
      const result = await analyzeImage(selectedFile);
      setResults(result);
      setError(null);
    } catch (err) {
      console.error("Error analyzing image:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setResults(null);
    } finally {
      setUploading(false);
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-8 h-8 flex items-center justify-center">
              <Upload className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Upload <span className="text-green-600 dark:text-green-400">Image</span></h2>
        </div>
        
        {/* Upload Area */}
        {!previewUrl ? (
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
              isDragActive 
                ? "border-green-500 bg-green-50/80 dark:bg-green-900/20 shadow-inner" 
                : "border-green-200 hover:border-green-500 dark:border-green-800 dark:hover:border-green-600 hover:shadow-md"
            }`}
          >
            <input {...getInputProps()} />
            <div className="mb-5">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
            <p className="mb-2 text-gray-800 dark:text-white font-medium text-lg">
              {isDragActive ? "Drop your image here..." : "Drag and drop your image here"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">or</p>
            <Button className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/30 shadow-sm">
              Browse Files
            </Button>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              Supported formats: JPG, PNG, WEBP (Max size: 10MB)
            </p>
          </div>
        ) : (
          /* Image Preview */
          <div className="mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-100 dark:border-green-900/40 shadow-md">
              <div className="relative flex justify-center">
                <img 
                  src={previewUrl} 
                  alt="Preview of uploaded potato leaf" 
                  className="max-h-[320px] object-contain rounded-lg" 
                />
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 rounded-full h-8 w-8 p-1 shadow-md" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveImage();
                  }}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {selectedFile?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {(selectedFile?.size ? (selectedFile.size / 1024).toFixed(1) : 0)} KB
                </p>
              </div>
            </div>
            
            {/* Upload Button */}
            <div className="mt-6 flex justify-center">
              <Button 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200" 
                onClick={handleAnalyzeClick} 
                disabled={uploading || !selectedFile}
              >
                {uploading ? "Analyzing..." : "Analyze Image"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
