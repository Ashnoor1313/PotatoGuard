import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, PhoneCall, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We've received your message and will respond soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <Card className="mb-6 dark:bg-gray-900 dark:border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 dark:text-white">Our Office</h3>
                        <p className="text-neutral-dark dark:text-gray-300">
                          123 Agritech Drive<br />
                          Innovation Valley, CA 94025<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 dark:text-white">Email Us</h3>
                        <p className="text-neutral-dark dark:text-gray-300">
                          <a href="mailto:info@potatoguard.com" className="text-primary hover:underline">
                            info@potatoguard.com
                          </a>
                          <br />
                          <a href="mailto:support@potatoguard.com" className="text-primary hover:underline">
                            support@potatoguard.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <PhoneCall className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 dark:text-white">Call Us</h3>
                        <p className="text-neutral-dark dark:text-gray-300">
                          +1 (555) 123-4567<br />
                          Monday - Friday, 9am - 5pm PST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-900 dark:border-gray-800">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary">Working Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium dark:text-white">Monday - Friday</span>
                      <span className="text-neutral-dark dark:text-gray-300">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium dark:text-white">Saturday</span>
                      <span className="text-neutral-dark dark:text-gray-300">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium dark:text-white">Sunday</span>
                      <span className="text-neutral-dark dark:text-gray-300">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={subject} onValueChange={setSubject} required>
                      <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Type your message here..."
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary">Find Us</h2>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden h-80 flex items-center justify-center">
              <p className="text-center text-gray-600 dark:text-gray-400 p-4">
                Interactive map would be embedded here.<br />
                For demonstration purposes, this is a placeholder.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}