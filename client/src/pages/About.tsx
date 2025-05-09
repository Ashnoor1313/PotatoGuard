import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, PhoneCall } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary">About PotatoGuard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg mb-6 text-neutral-dark dark:text-gray-300">
                PotatoGuard is an innovative solution designed to help farmers and agricultural professionals identify 
                and manage potato diseases using artificial intelligence. Our mission is to reduce crop loss and increase 
                sustainable potato production worldwide.
              </p>
              
              <p className="text-lg mb-6 text-neutral-dark dark:text-gray-300">
                Founded in 2023, our team of agricultural scientists, AI experts, and software developers works together 
                to bring the latest technology to the agricultural sector, with a focus on practical solutions that 
                can be implemented in the field.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary">Our Technology</h2>
              <p className="text-lg mb-6 text-neutral-dark dark:text-gray-300">
                At the heart of PotatoGuard is a convolutional neural network (CNN) machine learning model trained on 
                thousands of images of healthy and diseased potato plants. Our model can identify common potato diseases 
                with high accuracy, providing farmers with immediate insights and treatment recommendations.
              </p>
              
              <p className="text-lg mb-6 text-neutral-dark dark:text-gray-300">
                We combine this technology with a user-friendly interface that makes it accessible to everyone, 
                regardless of technical expertise. Our goal is to democratize access to advanced agricultural 
                technology and support sustainable farming practices.
              </p>
            </div>
            
            <div>
              <Card className="mb-6 dark:bg-gray-900 dark:border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary">Contact Us</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium dark:text-white">Address</h3>
                        <p className="text-neutral-dark dark:text-gray-300">
                          123 Agritech Drive<br />
                          Innovation Valley, CA 94025<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium dark:text-white">Email</h3>
                        <a href="mailto:info@potatoguard.com" className="text-primary hover:underline">
                          info@potatoguard.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <PhoneCall className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium dark:text-white">Phone</h3>
                        <p className="text-neutral-dark dark:text-gray-300">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-900 dark:border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary">Partnership Opportunities</h2>
                  <p className="text-neutral-dark dark:text-gray-300 mb-4">
                    We're always looking to collaborate with agricultural organizations, research institutions, 
                    and technology partners to improve our services and expand our impact.
                  </p>
                  
                  <a 
                    href="https://www.agriculture.com/technology/crop-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    Learn about our partnership program
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Emily Chen",
                  role: "Chief Scientific Officer",
                  bio: "PhD in Plant Pathology with 15 years of experience in potato disease research and management."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Lead AI Engineer",
                  bio: "Expert in computer vision and machine learning with a focus on agricultural applications."
                },
                {
                  name: "Sarah Johnson",
                  role: "Head of Product",
                  bio: "Former farmer with extensive experience in agricultural technology and user experience design."
                },
                {
                  name: "David Kim",
                  role: "Research Director",
                  bio: "Agricultural scientist specializing in sustainable farming practices and disease prevention."
                },
                {
                  name: "Maria Garcia",
                  role: "Field Operations Manager",
                  bio: "Agricultural extension specialist with expertise in implementing technology solutions for farmers."
                },
                {
                  name: "James Wilson",
                  role: "Data Scientist",
                  bio: "Specialist in agricultural data analysis and predictive modeling for crop management."
                }
              ].map((member, index) => (
                <Card key={index} className="dark:bg-gray-900 dark:border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-primary dark:text-primary">{member.name}</h3>
                    <p className="text-neutral-dark font-medium dark:text-gray-400 mb-3">{member.role}</p>
                    <p className="text-neutral-dark dark:text-gray-300">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary">Ready to get started?</h2>
            <p className="text-lg mb-6 text-neutral-dark dark:text-gray-300">
              Try our potato disease analysis tool today and take the first step towards healthier crops.
            </p>
            <Link href="/analyzer">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Go to Analyzer
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}