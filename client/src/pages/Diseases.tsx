import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Diseases() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Potato Diseases Database</h1>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Comprehensive information about common potato diseases, their symptoms, causes, and treatment methods
            </p>
          </header>

          {/* Diseases Database */}
          <Tabs defaultValue="late-blight" className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="late-blight">Late Blight</TabsTrigger>
              <TabsTrigger value="early-blight">Early Blight</TabsTrigger>
              <TabsTrigger value="other">Other Diseases</TabsTrigger>
            </TabsList>
            
            <TabsContent value="late-blight">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Late Blight (Phytophthora infestans)</h2>
                  
                  <div className="prose max-w-none">
                    <p className="lead mb-6">
                      Late blight is one of the most destructive diseases of potato and was responsible for the Irish potato famine in the 1840s. It remains a serious threat to potato production worldwide.
                    </p>
                    
                    <h3>Symptoms</h3>
                    <ul>
                      <li>Pale green water-soaked spots, usually at leaf tips or edges</li>
                      <li>Rapidly enlarging dark brown to purplish-black lesions</li>
                      <li>White fuzzy growth (sporulation) on leaf undersides, especially in humid conditions</li>
                      <li>Rapid leaf death, often with a distinctive odor</li>
                      <li>Brown, firm lesions on potato tubers that extend into the flesh</li>
                    </ul>
                    
                    <h3>Disease Cycle</h3>
                    <p>
                      The pathogen overwinters in infected potato tubers, volunteer plants, or plant debris. In spring, 
                      spores are produced and spread by wind and rain to infect new plants. The disease develops 
                      rapidly in cool, wet weather (temperatures between 50°F and 78°F with high humidity or leaf wetness).
                    </p>
                    
                    <h3>Management Strategies</h3>
                    <ol>
                      <li><strong>Preventive fungicide applications</strong> - Regular application of protective fungicides before symptoms appear</li>
                      <li><strong>Resistant varieties</strong> - Plant potato varieties with resistance to late blight</li>
                      <li><strong>Sanitation</strong> - Remove volunteer potato plants, destroy cull piles, and eliminate sources of inoculum</li>
                      <li><strong>Good cultural practices</strong> - Proper hilling, adequate spacing, and avoiding overhead irrigation can reduce disease development</li>
                      <li><strong>Monitoring and early detection</strong> - Regular field scouting and use of disease forecasting systems</li>
                    </ol>
                    
                    <h3>Economic Impact</h3>
                    <p>
                      Late blight continues to be one of the most economically significant potato diseases globally. Losses can reach 100% in 
                      favorable conditions if the disease is not controlled. The cost of fungicide applications for prevention 
                      represents a significant portion of potato production expenses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="early-blight">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Early Blight (Alternaria solani)</h2>
                  
                  <div className="prose max-w-none">
                    <p className="lead mb-6">
                      Early blight is a common fungal disease affecting potatoes worldwide. Despite its name, it can occur at any time during the growing season, though it typically begins to appear after plants start to flower.
                    </p>
                    
                    <h3>Symptoms</h3>
                    <ul>
                      <li>Dark brown to black lesions with concentric rings (target pattern)</li>
                      <li>Lesions often surrounded by a yellow chlorotic zone</li>
                      <li>Symptoms typically begin on older, lower leaves first</li>
                      <li>Advanced infections cause leaf drop and significant defoliation</li>
                      <li>Shallow, dark, leathery lesions may develop on tubers</li>
                    </ul>
                    
                    <h3>Disease Cycle</h3>
                    <p>
                      The fungus overwinters on infected plant debris and in soil. Spores are produced in spring and spread by wind, water, insects, and 
                      through human activity. Infection is favored by warm temperatures (75-85°F), high humidity, and wet leaves. Stress factors 
                      like drought, nutrient deficiency, or insect damage can increase plant susceptibility.
                    </p>
                    
                    <h3>Management Strategies</h3>
                    <ol>
                      <li><strong>Crop rotation</strong> - Use a 3-4 year rotation away from potatoes and related solanaceous crops</li>
                      <li><strong>Fungicide applications</strong> - Protective fungicides can be effective when applied before disease development</li>
                      <li><strong>Cultural practices</strong> - Proper plant spacing, avoid overhead irrigation, and water early in the day</li>
                      <li><strong>Sanitation</strong> - Remove and destroy infected plant debris</li>
                      <li><strong>Resistant varieties</strong> - Some potato varieties show partial resistance to early blight</li>
                      <li><strong>Balanced nutrition</strong> - Adequate fertility, especially nitrogen, can reduce susceptibility</li>
                    </ol>
                    
                    <h3>Economic Impact</h3>
                    <p>
                      Early blight can reduce yields by 20-30% through decreased photosynthetic area. Unlike late blight, it rarely causes 
                      complete crop destruction, but management costs and yield losses make it economically significant, especially in warmer potato-growing regions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="other">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Other Common Potato Diseases</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Black Leg (Pectobacterium spp.)</h3>
                      <p className="mb-3">A bacterial disease causing stem rot at the base of the plant and soft rot in tubers.</p>
                      <ul className="list-disc pl-5">
                        <li>Black, slimy stem base</li>
                        <li>Yellowing and wilting of foliage</li>
                        <li>Soft, wet decay of tubers with foul odor</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Common Scab (Streptomyces scabies)</h3>
                      <p className="mb-3">A bacterial disease affecting the appearance but not the viability of potato tubers.</p>
                      <ul className="list-disc pl-5">
                        <li>Corky, raised lesions on tuber surfaces</li>
                        <li>Brown to tan, rough-textured areas</li>
                        <li>Superficial damage that doesn't affect internal tissue</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Fusarium Dry Rot (Fusarium spp.)</h3>
                      <p className="mb-3">A fungal disease primarily affecting stored tubers.</p>
                      <ul className="list-disc pl-5">
                        <li>Dry, wrinkled areas on tuber surface</li>
                        <li>Internal brown to black, dry rot with cavities</li>
                        <li>White, pink or red fungal growth may develop on lesions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Potato Virus Y (PVY)</h3>
                      <p className="mb-3">A viral disease spread primarily by aphids.</p>
                      <ul className="list-disc pl-5">
                        <li>Mosaic patterns or mottling on leaves</li>
                        <li>Leaf drop, stunting, and necrosis</li>
                        <li>Reduced yield and tuber quality</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Ring Rot (Clavibacter michiganensis subsp. sepedonicus)</h3>
                      <p className="mb-3">A serious bacterial disease that can cause severe economic loss.</p>
                      <ul className="list-disc pl-5">
                        <li>Wilting and yellowing of leaves, often on one side</li>
                        <li>Creamy yellow to brown ring of rot in tuber vascular tissue</li>
                        <li>Eventually leads to plant death</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}