import { DiseaseCard } from "@/components/DiseaseCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Disease images - Using base64 placeholders for demonstration
const lateBlight = "https://www.agriculture.com.ph/wp-content/uploads/2022/05/late-blight.jpg";
const earlyBlight = "https://extension.umn.edu/sites/extension.umn.edu/files/early-blight.jpg";
const healthy = "https://cropwatch.unl.edu/potato/images/Healthy_Potato_Field.jpg";

interface DiseaseSectionProps {
  showViewAllButton?: boolean;
}

export function DiseaseSection({ showViewAllButton = true }: DiseaseSectionProps) {
  const diseases = [
    {
      name: "Late Blight",
      scientificName: "Phytophthora infestans",
      imageSrc: lateBlight,
      description: "Late Blight is one of the most destructive potato diseases. It caused the Irish potato famine in the 1840s. Symptoms include dark, water-soaked lesions on leaves that quickly turn brown and black with a pale green border. White mold may appear on leaf undersides in humid conditions."
    },
    {
      name: "Early Blight",
      scientificName: "Alternaria solani",
      imageSrc: earlyBlight,
      description: "Early Blight typically appears as target-shaped dark brown spots with concentric rings on lower, older leaves first. The disease progresses upward, causing leaf yellowing and defoliation. Spots are often surrounded by a yellow halo and may coalesce as they enlarge."
    },
    {
      name: "Healthy Plant",
      imageSrc: healthy,
      description: "Healthy potato plants have vibrant green leaves with no signs of spots, lesions, or discoloration. The foliage is full and shows no wilting or curling. Proper identification of healthy plant characteristics helps in early detection of diseases."
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary dark:text-primary">Common Potato Diseases</h2>
        <p className="text-center text-neutral-dark dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Learn to identify the most common potato diseases and understand their characteristics. 
          Hover over each card to see detailed descriptions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {diseases.map((disease, index) => (
            <DiseaseCard 
              key={index}
              name={disease.name}
              scientificName={disease.scientificName}
              imageSrc={disease.imageSrc}
              description={disease.description}
            />
          ))}
        </div>
        
        {showViewAllButton && (
          <div className="text-center">
            <Link href="/diseases">
              <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white">
                View Disease Database
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}