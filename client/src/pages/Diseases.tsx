import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DiseaseSection } from "@/components/DiseaseSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Diseases() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary">Common Potato Diseases</h1>
            <p className="text-lg text-neutral-dark dark:text-gray-300 max-w-3xl mx-auto">
              Learn to identify common potato diseases, understand their symptoms, and find appropriate treatment methods
            </p>
          </header>

          {/* Disease Cards Section - Directly using the cards without the heading from DiseaseSection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <DiseaseCard 
              name="Late Blight"
              scientificName="Phytophthora infestans"
              imageSrc="https://i.imgur.com/TPrXpgG.jpg"
              description="Late Blight is one of the most destructive potato diseases. It caused the Irish potato famine in the 1840s. Symptoms include dark, water-soaked lesions on leaves that quickly turn brown and black with a pale green border. White mold may appear on leaf undersides in humid conditions."
            />
            <DiseaseCard 
              name="Early Blight"
              scientificName="Alternaria solani"
              imageSrc="https://i.imgur.com/MwEMIIc.jpg"
              description="Early Blight typically appears as target-shaped dark brown spots with concentric rings on lower, older leaves first. The disease progresses upward, causing leaf yellowing and defoliation. Spots are often surrounded by a yellow halo and may coalesce as they enlarge."
            />
            <DiseaseCard 
              name="Healthy Plant"
              imageSrc="https://i.imgur.com/1vrQIlD.jpg"
              description="Healthy potato plants have vibrant green leaves with no signs of spots, lesions, or discoloration. The foliage is full and shows no wilting or curling. Proper identification of healthy plant characteristics helps in early detection of diseases."
            />
          </div>
          
          {/* Detailed Disease Information */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary">Detailed Disease Information</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="late-blight" className="border dark:border-gray-700">
                <AccordionTrigger className="text-xl font-medium text-primary dark:text-primary px-4">
                  Late Blight (Phytophthora infestans)
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <Card className="dark:bg-gray-900 dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="prose dark:prose-invert max-w-none">
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
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="early-blight" className="border dark:border-gray-700">
                <AccordionTrigger className="text-xl font-medium text-primary dark:text-primary px-4">
                  Early Blight (Alternaria solani)
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <Card className="dark:bg-gray-900 dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="prose dark:prose-invert max-w-none">
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
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="healthy" className="border dark:border-gray-700">
                <AccordionTrigger className="text-xl font-medium text-primary dark:text-primary px-4">
                  Healthy Potato Plants - Characteristics
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <Card className="dark:bg-gray-900 dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="lead mb-6">
                          Recognizing the characteristics of healthy potato plants is crucial for early detection of diseases. A healthy potato plant displays specific visual traits that indicate proper growth and development.
                        </p>
                        
                        <h3>Visual Characteristics</h3>
                        <ul>
                          <li>Uniform, vibrant green foliage without spots, lesions, or discoloration</li>
                          <li>Leaves that are fully expanded and show no curling, wilting, or abnormal growth patterns</li>
                          <li>Even coloration across the plant with no yellowing of lower leaves (except in natural senescence late in season)</li>
                          <li>Stems that are firm and upright with no dark lesions or water-soaked areas</li>
                          <li>Consistent growth pattern across the field with plants of similar height and vigor</li>
                        </ul>
                        
                        <h3>Growth and Development</h3>
                        <p>
                          Healthy potato plants progress through growth stages predictably, from sprouting and vegetative growth to flowering and tuber development. Plants should achieve full canopy closure with neighboring plants and maintain foliage until natural senescence at the end of the growing season.
                        </p>
                        
                        <h3>Best Practices for Maintaining Healthy Plants</h3>
                        <ol>
                          <li><strong>Quality seed</strong> - Start with certified disease-free seed potatoes</li>
                          <li><strong>Proper nutrition</strong> - Provide balanced fertilization based on soil tests</li>
                          <li><strong>Adequate irrigation</strong> - Maintain consistent soil moisture without waterlogging</li>
                          <li><strong>Pest management</strong> - Monitor and control insects that can damage plants or vector diseases</li>
                          <li><strong>Preventive measures</strong> - Apply fungicides preventively in high-risk periods</li>
                          <li><strong>Regular monitoring</strong> - Scout fields regularly to catch problems early</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}