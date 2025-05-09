import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, InfoIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary dark:bg-black text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Protect Your Potato Crop with AI-Powered Disease Detection
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Upload images of potato leaves to instantly identify diseases and get treatment recommendations. Save your harvest with early detection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/analyzer">
                  <Button 
                    size="lg" 
                    className="bg-white dark:bg-primary dark:hover:bg-primary/90 text-primary dark:text-white hover:bg-white/90 flex items-center gap-2"
                  >
                    <Clock className="h-5 w-5" />
                    Analyze Leaf Image
                  </Button>
                </Link>
                <Link href="/guide">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-primary dark:hover:bg-primary dark:hover:text-white flex items-center gap-2"
                  >
                    <InfoIcon className="h-5 w-5" />
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose PotatoGuard?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-accent dark:bg-black border dark:border-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Accurate Detection</h3>
                <p className="text-neutral-darkest dark:text-gray-300">Our CNN-based AI model is trained on thousands of leaf images for reliable disease identification.</p>
              </div>
              
              <div className="bg-accent dark:bg-black border dark:border-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Instant Results</h3>
                <p className="text-neutral-darkest dark:text-gray-300">Get disease identification and treatment recommendations in seconds, not days.</p>
              </div>
              
              <div className="bg-accent dark:bg-black border dark:border-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Treatment Guides</h3>
                <p className="text-neutral-darkest dark:text-gray-300">Receive detailed treatment recommendations and prevention strategies for each disease.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-accent dark:bg-black border-t dark:border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-primary">Ready to protect your potato crop?</h2>
              <p className="text-lg mb-8 dark:text-white">Start analyzing your potato leaves today and take proactive steps to prevent crop loss.</p>
              <Link href="/analyzer">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Start Analyzing Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}