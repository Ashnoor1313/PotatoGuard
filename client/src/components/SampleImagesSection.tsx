import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface SampleImage {
  name: string;
  filename: string;
  description: string;
  type: "healthy" | "early-blight" | "late-blight" | "other";
}

export function SampleImagesSection() {
  const sampleImages: SampleImage[] = [
    {
      name: "Potato Leaf Sample 1",
      filename: "image_1746810424180.png",
      description: "Potato leaf sample for disease analysis",
      type: "healthy"
    },
    {
      name: "Potato Leaf Sample 2",
      filename: "image_1746810354047.png",
      description: "Potato leaf sample for disease analysis",
      type: "early-blight"
    },
    {
      name: "Potato Leaf Sample 3",
      filename: "image_1746810563345.png",
      description: "Potato leaf sample for disease analysis",
      type: "late-blight"
    },
    {
      name: "Potato Leaf Sample 4",
      filename: "image_1746809135733.png",
      description: "Potato leaf sample for disease analysis",
      type: "other"
    },
    {
      name: "Potato Leaf Sample 5",
      filename: "image_1746797352482.png",
      description: "Potato leaf sample for disease analysis",
      type: "other"
    }
  ];
  
  const getTypeBackground = (type: string) => {
    switch(type) {
      case "healthy":
        return "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 border-green-200 dark:border-green-800/30";
      case "early-blight":
        return "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/30 border-amber-200 dark:border-amber-800/30";
      case "late-blight":
        return "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30 border-red-200 dark:border-red-800/30";
      default:
        return "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30 border-gray-200 dark:border-gray-800/30";
    }
  };
  
  const getTypeTextColor = (type: string) => {
    switch(type) {
      case "healthy":
        return "text-green-700 dark:text-green-400";
      case "early-blight":
        return "text-amber-700 dark:text-amber-400";
      case "late-blight":
        return "text-red-700 dark:text-red-400";
      default:
        return "text-gray-700 dark:text-gray-400";
    }
  };
  
  const getTypeBadgeColor = (type: string) => {
    switch(type) {
      case "healthy":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
      case "early-blight":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300";
      case "late-blight":
        return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-300";
    }
  };
  
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/sample-images/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="my-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Sample <span className="text-green-600 dark:text-green-400">Images</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full my-4"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Download these sample images to test the potato leaf disease analyzer
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleImages.map((image) => (
          <Card key={image.filename} className={`border overflow-hidden ${getTypeBackground(image.type)}`}>
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeColor(image.type)}`}>
                  {image.type.replace('-', ' ')}
                </div>
              </div>
              <h3 className={`text-lg font-bold ${getTypeTextColor(image.type)}`}>{image.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{image.description}</p>
            </div>
            <div className="h-48 overflow-hidden relative">
              <img 
                src={`/sample-images/${image.filename}`} 
                alt={image.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
              <Button 
                onClick={() => handleDownload(image.filename)}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Image
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}