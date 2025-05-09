import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Import sample images
import healthyLeaf1 from "@/assets/sample-leaves/healthy-leaf-1.jpg";
import healthyLeaf2 from "@/assets/sample-leaves/healthy-leaf-2.jpg";
import diseaseLeaf1 from "@/assets/sample-leaves/disease-leaf-1.jpg";
import diseaseLeaf2 from "@/assets/sample-leaves/disease-leaf-2.jpg";

interface SampleImage {
  name: string;
  image: string;
  filename: string;
  description: string;
}

export function SampleImagesSection() {
  const sampleImages = [
    {
      name: "Potato Leaf Sample 1",
      image: healthyLeaf1,
      filename: "healthy-leaf-1.jpg",
      description: "Potato leaf sample for disease analysis"
    },
    {
      name: "Potato Leaf Sample 2",
      image: healthyLeaf2,
      filename: "healthy-leaf-2.jpg",
      description: "Potato leaf sample for disease analysis"
    },
    {
      name: "Potato Leaf Sample 3",
      image: diseaseLeaf1,
      filename: "disease-leaf-1.jpg",
      description: "Potato leaf sample for disease analysis"
    },
    {
      name: "Potato Leaf Sample 4",
      image: diseaseLeaf2,
      filename: "disease-leaf-2.jpg",
      description: "Potato leaf sample for disease analysis"
    }
  ];
  
  // No longer need type-based styling helpers
  
  const handleDownload = (imageSrc: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleImages.map((image) => (
          <Card key={image.filename} className="border overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30 border-green-200 dark:border-green-800/30">
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400">{image.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{image.description}</p>
            </div>
            <div className="h-48 overflow-hidden relative">
              <img 
                src={image.image} 
                alt={image.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
              <Button 
                onClick={() => handleDownload(image.image, image.filename)}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Sample
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}