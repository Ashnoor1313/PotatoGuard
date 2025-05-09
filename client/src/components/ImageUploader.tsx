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
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-neutral-darkest dark:text-white">Upload Image</h2>
        
        {/* Upload Area */}
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? "border-primary bg-primary/5 dark:bg-primary/10" 
              : "border-neutral-medium hover:border-primary dark:border-gray-700 dark:hover:border-primary"
          }`}
        >
          <input {...getInputProps()} />
          <div className="mb-4">
            <Upload className="h-12 w-12 mx-auto text-neutral-dark dark:text-gray-400" />
          </div>
          <p className="mb-2 text-neutral-darkest dark:text-white font-medium">
            {isDragActive ? "Drop your image here..." : "Drag and drop your image here"}
          </p>
          <p className="text-sm text-neutral-dark dark:text-gray-400 mb-4">or</p>
          <Button>Browse Files</Button>
          <p className="mt-4 text-xs text-neutral-dark dark:text-gray-400">
            Supported formats: JPG, PNG, WEBP (Max size: 10MB)
          </p>
        </div>
        
        {/* Image Preview */}
        {previewUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2 dark:text-white">Image Preview</h3>
            <div className="relative bg-neutral-light dark:bg-gray-800 rounded-lg p-2 flex justify-center">
              <img 
                src={previewUrl} 
                alt="Preview of uploaded potato leaf" 
                className="max-h-[300px] object-contain rounded-lg" 
              />
              <Button 
                variant="destructive" 
                size="icon" 
                className="absolute top-4 right-4 bg-neutral-darkest bg-opacity-70 hover:bg-opacity-90 rounded-full h-8 w-8 p-1" 
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveImage();
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Upload Button */}
        {previewUrl && (
          <div className="mt-6">
            <Button 
              className="w-full py-3 text-white" 
              onClick={handleAnalyzeClick} 
              disabled={uploading || !selectedFile}
            >
              {uploading ? "Analyzing..." : "Analyze Image"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
