import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DiseaseSection } from "@/components/DiseaseSection";
import { Button } from "@/components/ui/button";
import { Clock, InfoIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-white py-20 md:py-28 overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-500 dark:from-green-900 dark:via-green-800 dark:to-green-700">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_0,_transparent_70%)]"></div>
            {/* Leaf pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjAgMjBjNi42MjcgMCAxMi01LjM3MyAxMi0xMlMyNi42MjcgOC44ODIgMjAgOC44ODIgOCAxNC4yNTUgOCAyMC44ODJzNS4zNzMgMTIgMTIgMTJ6TTQwIDQwYzYuNjI3IDAgMTItNS4zNzMgMTItMTJTNDYuNjI3IDE2IDQwIDE2IDI4IDIxLjM3MyAyOCAyOHM1LjM3MyAxMiAxMiAxMnoiLz48L2c+PC9zdmc+')] bg-repeat"></div>
            </div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
                Protect Your Potato Crop with AI-Powered Disease Detection
              </h1>
              <p className="text-lg md:text-xl mb-8 text-green-50 drop-shadow-sm">
                Upload images of potato leaves to instantly identify diseases and get treatment recommendations. Save your harvest with early detection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/analyzer">
                  <Button 
                    size="lg" 
                    className="bg-white dark:bg-green-100 text-green-700 dark:text-green-800 hover:bg-white/90 dark:hover:bg-green-50 flex items-center gap-2 shadow-lg"
                  >
                    <Clock className="h-5 w-5" />
                    Analyze Leaf Image
                  </Button>
                </Link>
                <Link href="/guide">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-green-700 flex items-center gap-2 shadow-lg backdrop-blur-sm bg-white/10"
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
        <section className="py-16 bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">Why Choose <span className="text-green-600 dark:text-green-400">PotatoGuard</span>?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Accurate Detection</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Our CNN-based AI model is trained on thousands of leaf images for reliable disease identification.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Instant Results</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Get disease identification and treatment recommendations in seconds, not days.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Treatment Guides</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Receive detailed treatment recommendations and prevention strategies for each disease.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Disease Section */}
        <DiseaseSection hideHeader={false} />
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800"></div>
          
          {/* Leaf pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJibGFjayIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzBjMC02LjYyNy01LjM3My0xMi0xMi0xMlMxMiAyMy4zNzMgMTIgMzBzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJ6Ii8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 max-w-6xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl max-w-3xl mx-auto border-b-4 border-green-500">
              <div className="text-center">
                <div className="inline-block p-3 bg-green-100 dark:bg-green-700 rounded-full mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Ready to protect your <span className="text-green-600 dark:text-green-400">potato crop</span>?</h2>
                <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">Start analyzing your potato leaves today and take proactive steps to prevent crop loss.</p>
                <Link href="/analyzer">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                    Start Analyzing Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}