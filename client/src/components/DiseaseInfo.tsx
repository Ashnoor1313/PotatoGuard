import { Card, CardContent } from "@/components/ui/card";

interface DiseaseInfoProps {
  classification: string;
}

export function DiseaseInfo({ classification }: DiseaseInfoProps) {
  let title: string;
  let description: string;
  let symptoms: string[];
  let management: string[];

  // Set content based on classification
  switch (classification.toLowerCase()) {
    case "late blight":
      title = "Late Blight";
      description = "Late blight is a potentially devastating disease of potato, caused by the fungus Phytophthora infestans. It spreads quickly in wet weather conditions.";
      symptoms = [
        "Dark brown spots on leaves",
        "White fungal growth on leaf undersides",
        "Rapid leaf death and tissue collapse",
        "Brown lesions on tubers"
      ];
      management = [
        "Apply fungicides preventatively",
        "Use resistant varieties",
        "Ensure good drainage",
        "Remove infected plants immediately",
        "Avoid overhead irrigation"
      ];
      break;
    
    case "early blight":
      title = "Early Blight";
      description = "Early blight is a common fungal disease of potato, caused by Alternaria solani. It typically appears during warm weather and can affect leaves, stems, and tubers.";
      symptoms = [
        "Dark, concentric rings forming bull's-eye pattern",
        "Brown to black lesions on older leaves first",
        "Yellow areas surrounding leaf spots",
        "Stem lesions that may girdle the plant"
      ];
      management = [
        "Rotate crops (3-4 year cycle)",
        "Apply appropriate fungicides",
        "Space plants for adequate air circulation",
        "Remove infected plant debris",
        "Water at the base of plants to avoid wetting foliage"
      ];
      break;
    
    case "healthy":
      title = "Healthy Plant";
      description = "Your potato plant appears healthy with no signs of disease. Continued good agricultural practices will help maintain plant health.";
      symptoms = [
        "Vibrant green leaves without spots or lesions",
        "Uniform coloration across the foliage",
        "No wilting or yellowing",
        "Robust stem structure"
      ];
      management = [
        "Maintain regular watering schedule",
        "Monitor for pest activity",
        "Apply balanced fertilization",
        "Practice crop rotation",
        "Use proper spacing for good airflow"
      ];
      break;
      
    default:
      title = "Unknown Condition";
      description = "The classification doesn't match our known conditions. Consider consulting with a local agricultural extension service for specific advice.";
      symptoms = [
        "Consult a plant pathologist for accurate diagnosis",
        "Document progression of symptoms",
        "Check for regional disease outbreaks"
      ];
      management = [
        "Isolate affected plants as a precaution",
        "Monitor surrounding plants closely",
        "Submit samples to a plant diagnostic laboratory"
      ];
  }

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-neutral-darkest">Disease Information</h2>
        
        <div>
          <h3 className="text-lg font-medium text-neutral-darkest mb-2">{title}</h3>
          <p className="text-neutral-darkest mb-3">{description}</p>
          
          <h4 className="font-medium text-neutral-darkest mt-4 mb-2">Symptoms:</h4>
          <ul className="list-disc pl-5 space-y-1 text-neutral-darkest">
            {symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
          
          <h4 className="font-medium text-neutral-darkest mt-4 mb-2">Management:</h4>
          <ul className="list-disc pl-5 space-y-1 text-neutral-darkest">
            {management.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
