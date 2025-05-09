import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-[#F5F5F5] dark:bg-black py-12">
        <Card className="w-full max-w-md mx-4 dark:bg-gray-900 dark:border-gray-800">
          <CardContent className="pt-10 pb-10">
            <div className="flex flex-col items-center text-center mb-6">
              <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">404 Page Not Found</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                The page you are looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div className="flex justify-center mt-6">
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
