import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Upload,
  Microscope,
  AlertCircle,
  CheckCircle, 
  BookOpen, 
  FileText,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Guide() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How PotatoGuard Works</h1>
            <p className="text-lg text-neutral-dark dark:text-gray-300 max-w-3xl mx-auto">
              Learn how our AI-powered potato disease detection system helps farmers identify and treat plant diseases quickly and accurately.
            </p>
          </header>

          {/* Step-by-step guide */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white">
                      <Camera className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Step 1: Take a Clear Photo</h2>
                    <p className="mb-4 dark:text-gray-300">Take a clear, well-lit photo of the potato leaf showing symptoms of potential disease. For best results:</p>
                    <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                      <li>Ensure adequate lighting (natural daylight works best)</li>
                      <li>Capture the entire leaf with symptoms visible</li>
                      <li>Avoid shadows or reflections on the leaf</li>
                      <li>Keep the leaf in focus (not blurry)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white">
                      <Upload className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Step 2: Upload Your Image</h2>
                    <p className="mb-4 dark:text-gray-300">Go to the Analyzer page and upload your potato leaf image:</p>
                    <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                      <li>Click on the upload area or drag and drop your image</li>
                      <li>Verify your image appears in the preview</li>
                      <li>Click "Analyze Image" to begin processing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white">
                      <Microscope className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Step 3: AI Analysis</h2>
                    <p className="mb-4 dark:text-gray-300">Our advanced Convolutional Neural Network (CNN) processes your image:</p>
                    <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                      <li>The image is analyzed by our AI model trained on thousands of potato leaf images</li>
                      <li>The system identifies patterns associated with different potato diseases</li>
                      <li>Multiple potential diseases are evaluated and ranked by confidence level</li>
                      <li>Results are returned within seconds</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white">
                      <FileText className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Step 4: Review Results</h2>
                    <p className="mb-4 dark:text-gray-300">Receive detailed analysis of your potato leaf:</p>
                    <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                      <li>Primary disease classification with confidence level</li>
                      <li>Alternative possibilities with their respective confidence levels</li>
                      <li>Disease information including symptoms and characteristics</li>
                      <li>Treatment recommendations and management strategies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white">
                      <BookOpen className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Step 5: Take Action</h2>
                    <p className="mb-4 dark:text-gray-300">Based on the results, you can:</p>
                    <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                      <li>Apply the recommended treatments for the identified disease</li>
                      <li>Implement prevention measures to protect healthy plants</li>
                      <li>Monitor affected plants and their response to treatment</li>
                      <li>Access our comprehensive disease database for additional information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Accuracy Information */}
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-primary">Understanding Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-2">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 dark:text-white">High Confidence (Above 80%)</h3>
                      <p className="dark:text-gray-300">When our system shows high confidence in a diagnosis, it's very likely accurate. You should proceed with the recommended treatments.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 dark:bg-amber-900 rounded-full p-2">
                      <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 dark:text-white">Medium Confidence (50-80%)</h3>
                      <p className="dark:text-gray-300">Consider both the primary and alternative diagnoses. If possible, consult with an agricultural expert before treatment.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary">Ready to Try It?</h2>
            <p className="mb-6 dark:text-gray-300">Upload your first potato leaf image and get instant disease detection</p>
            <Link href="/analyzer">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2">
                Go to Analyzer
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
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