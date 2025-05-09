import { Card, CardContent } from "@/components/ui/card";

interface DiseaseCardProps {
  name: string;
  imageSrc: string;
  description: string;
  scientificName?: string;
}

export function DiseaseCard({ name, imageSrc, description, scientificName }: DiseaseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg h-[350px] transition-all duration-300 ease-in-out shadow-md hover:shadow-xl">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-[-30%]">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        {scientificName && (
          <p className="text-sm italic text-gray-300 mb-2">{scientificName}</p>
        )}
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <p className="text-white/90 text-sm mt-3">{description}</p>
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute right-4 bottom-4 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300">
        Hover for details
      </div>
    </div>
  );
}