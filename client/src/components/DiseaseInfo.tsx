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

  const isHealthy = classification.toLowerCase() === 'healthy';
  
  return (
    <Card className="shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-green-100 dark:border-green-900/60">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
            <div className={`rounded-full w-8 h-8 flex items-center justify-center ${
              isHealthy 
                ? 'bg-gradient-to-br from-green-500 to-green-600' 
                : 'bg-gradient-to-br from-amber-500 to-amber-600'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {isHealthy ? 'Plant ' : 'Disease '} 
            <span className={isHealthy ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}>
              Information
            </span>
          </h2>
        </div>
        
        <div>
          <div className={`p-5 rounded-xl mb-6 ${
            isHealthy 
              ? 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600' 
              : 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 dark:border-amber-600'
          }`}>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Symptoms
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Management
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {management.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
