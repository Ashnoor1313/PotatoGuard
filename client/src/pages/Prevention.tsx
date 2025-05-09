import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Droplets, 
  Pill, 
  Repeat, 
  Sparkles, 
  Trash2,
  Warehouse,
  AlertTriangle
} from "lucide-react";

export default function Prevention() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Disease Prevention Strategies</h1>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Proactive approaches to protect your potato crop from common diseases
            </p>
          </header>

          {/* Prevention Strategies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Cultural Practices */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary pt-1">Cultural Practices</h2>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Proper Plant Spacing</h3>
                      <p className="text-sm text-neutral-darkest">Ensure adequate spacing between plants to promote air circulation, which helps leaves dry quickly after rain or irrigation.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Optimal Planting Time</h3>
                      <p className="text-sm text-neutral-darkest">Plant potatoes when soil temperatures are ideal (above 45°F). Avoid planting too early in cold, wet soils which can increase disease pressure.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hill Properly</h3>
                      <p className="text-sm text-neutral-darkest">Maintain proper hilling of potato plants to protect tubers from exposure to light and reduce the risk of tuber infections.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Balanced Nutrition</h3>
                      <p className="text-sm text-neutral-darkest">Maintain proper soil fertility based on soil tests. Balanced nutrition helps plants resist disease pressure.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Crop Rotation */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Repeat className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary pt-1">Crop Rotation</h2>
                </div>
                
                <p className="mb-4">
                  Implement a 3-4 year rotation away from potatoes and other solanaceous crops (tomatoes, peppers, eggplants) to break disease cycles.
                </p>
                
                <div className="bg-accent p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Benefits of Crop Rotation:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Reduces soil-borne pathogen populations</li>
                    <li>Disrupts disease and pest cycles</li>
                    <li>Improves soil health and structure</li>
                    <li>Enhances nutrient cycling</li>
                    <li>Reduces the need for pesticides</li>
                  </ul>
                </div>
                
                <h3 className="font-semibold mb-2">Recommended Rotation Crops:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Grains (wheat, barley, oats)</li>
                  <li>Legumes (clover, alfalfa, beans)</li>
                  <li>Brassicas (broccoli, cabbage, radish)</li>
                  <li>Sweet corn</li>
                  <li>Cover crops (buckwheat, sudangrass)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Watering Practices */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary pt-1">Watering Practices</h2>
                </div>
                
                <p className="mb-4">
                  Proper irrigation techniques can significantly reduce disease pressure in potato crops.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Morning Irrigation</h3>
                      <p className="text-sm text-neutral-darkest">Water early in the day to allow foliage to dry completely before evening, reducing the time leaves remain wet.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Drip Irrigation</h3>
                      <p className="text-sm text-neutral-darkest">Use drip irrigation or soaker hoses instead of overhead sprinklers to keep foliage dry while watering the soil.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Consistent Moisture</h3>
                      <p className="text-sm text-neutral-darkest">Maintain consistent soil moisture throughout the growing season. Avoid drought stress followed by heavy irrigation.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chemical Controls */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Pill className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary pt-1">Chemical Controls</h2>
                </div>
                
                <p className="mb-4">
                  When used appropriately, fungicides and other chemical controls can be effective components of an integrated disease management strategy.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                    <p className="text-sm">Always follow label instructions and local regulations when applying any chemical products. Consult with your local agricultural extension office for specific recommendations for your region.</p>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-2">Preventative Applications:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                  <li>Apply fungicides before disease appears during high-risk periods</li>
                  <li>Use forecast models to time applications effectively</li>
                  <li>Rotate chemical classes to prevent resistance development</li>
                </ul>
                
                <h3 className="font-semibold mb-2">Disease-Specific Approaches:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Late Blight:</strong> Protective fungicides with different modes of action</li>
                  <li><strong>Early Blight:</strong> Strobilurin and chlorothalonil products</li>
                  <li><strong>Scab:</strong> Soil treatments and pH management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sanitation */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Trash2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary pt-1">Sanitation</h2>
                </div>
                
                <p className="mb-4">
                  Good sanitation practices remove sources of disease inoculum and prevent pathogen spread.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Remove Volunteer Plants</h3>
                      <p className="text-sm text-neutral-darkest">Eliminate volunteer potato plants that can harbor diseases between seasons.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Clean Equipment</h3>
                      <p className="text-sm text-neutral-darkest">Regularly clean equipment to prevent spreading soil-borne pathogens between fields.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Destroy Cull Piles</h3>
                      <p className="text-sm text-neutral-darkest">Properly dispose of cull piles and infected plant material rather than leaving them near production fields.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Post-Harvest Field Management</h3>
                      <p className="text-sm text-neutral-darkest">Incorporate crop residues promptly after harvest to accelerate decomposition of potential disease sources.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Seed Selection */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Warehouse className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary pt-1">Seed Selection</h2>
                </div>
                
                <p className="mb-4">
                  Starting with high-quality, disease-free seed potatoes is one of the most effective preventative measures.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Certified Seed</h3>
                      <p className="text-sm text-neutral-darkest">Use certified seed potatoes from reputable suppliers that have been inspected for diseases.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Disease-Resistant Varieties</h3>
                      <p className="text-sm text-neutral-darkest">Select potato varieties with genetic resistance to diseases common in your area.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Seed Treatment</h3>
                      <p className="text-sm text-neutral-darkest">Consider seed treatments that protect against soil-borne diseases during early growth stages.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <div className="bg-secondary/20 rounded-full p-1 mt-0.5">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visual Inspection</h3>
                      <p className="text-sm text-neutral-darkest">Inspect seed potatoes before planting and discard any showing signs of disease or damage.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Integrated Pest Management Note */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-primary">Integrated Pest Management (IPM)</h2>
              <p className="mb-4">
                For the most effective disease prevention, combine multiple strategies in an integrated approach. Monitor your crop regularly, identify problems early, and apply the appropriate management techniques based on the specific situation.
              </p>
              <p>
                Remember that prevention is easier and more cost-effective than treating established diseases. Investing time in preventative practices can significantly reduce crop losses and management costs over time.
              </p>
            </CardContent>
          </Card>
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