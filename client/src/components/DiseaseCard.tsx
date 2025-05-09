import { Card, CardContent } from "@/components/ui/card";
import { Leaf, AlertTriangle, CheckCircle } from "lucide-react";

interface DiseaseCardProps {
  name: string;
  description: string;
  scientificName?: string;
  type?: "lateBlight" | "earlyBlight" | "healthy";
}

export function DiseaseCard({ name, description, scientificName, type = "lateBlight" }: DiseaseCardProps) {
  // Generate background gradient based on disease type
  const getBgGradient = () => {
    switch (type) {
      case "lateBlight":
        return "bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700";
      case "earlyBlight":
        return "bg-gradient-to-br from-amber-800 via-amber-700 to-amber-600";
      case "healthy":
        return "bg-gradient-to-br from-green-700 via-green-600 to-green-500";
      default:
        return "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500";
    }
  };
  
  // Select icon based on disease type
  const renderIcon = () => {
    switch (type) {
      case "lateBlight":
        return <AlertTriangle className="w-12 h-12 text-purple-300 mb-3" />;
      case "earlyBlight":
        return <Leaf className="w-12 h-12 text-amber-300 mb-3" />;
      case "healthy":
        return <CheckCircle className="w-12 h-12 text-green-300 mb-3" />;
      default:
        return <Leaf className="w-12 h-12 text-gray-300 mb-3" />;
    }
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg h-[350px] transition-all duration-300 ease-in-out shadow-md hover:shadow-xl ${getBgGradient()}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
      
      {/* Stylized pattern - decorative background design */}
      <div className="absolute top-4 right-4 opacity-25">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 0L0 80M20 0L0 20M40 0L0 40M60 0L0 60M80 20L20 80M80 40L40 80M80 60L60 80" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="absolute inset-x-0 p-6 h-full flex flex-col">
        {/* Icon at the top */}
        <div className="flex justify-center items-center pt-6">
          {renderIcon()}
        </div>
        
        {/* Title and scientific name */}
        <div className="mt-2 text-center mb-4">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          {scientificName && (
            <p className="text-sm italic text-gray-200 mt-1">{scientificName}</p>
          )}
        </div>
        
        {/* Description - always visible, but expands on hover */}
        <div className="flex-grow overflow-hidden transition-all duration-300 ease-in-out px-2 pb-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg h-full overflow-y-auto">
            <p className="text-white/90 text-sm">{description}</p>
          </div>
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute right-4 bottom-4 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300">
        Scroll for more
      </div>
    </div>
  );
}