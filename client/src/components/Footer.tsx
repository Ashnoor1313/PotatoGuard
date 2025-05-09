import { Link } from "wouter";
import { Mail, Leaf, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const mainLinks = [
    { title: "Home", href: "/" },
    { title: "Analyzer", href: "/analyzer" },
    { title: "Guide", href: "/guide" },
    { title: "Diseases", href: "/diseases" },
    { title: "Prevention", href: "/prevention" },
    { title: "Learning", href: "/learning" },
  ];
  
  const resourceLinks = [
    { title: "Potato Disease Database", href: "https://potatoes.ahdb.org.uk/agronomy/diseases", external: true },
    { title: "University Agriculture Extensions", href: "https://extension.psu.edu/potato-diseases", external: true },
    { title: "Crop Protection Network", href: "https://cropprotectionnetwork.org", external: true },
  ];

  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Contact", href: "/contact" },
  ];
  
  return (
    <footer className="bg-gradient-to-b from-green-900 via-green-950 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
          <path fill="#fff" fillOpacity="0.05" d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zM64 16h-5v-2h5V9h2v5h5v2h-5v5h-2v-5zm-32 0h-5v-2h5V9h2v5h5v2h-5v5h-2v-5zm64 32h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zm-32 0h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zm-32 0h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zm32-16h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zM32 48h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zM0 48h5v2H0v5h-2v-5h-5v-2h5v-5h2v5zm64 0h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zM32 16h-5v-2h5V9h2v5h5v2h-5v5h-2v-5zm0-32h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zM64 16h-5v-2h5V9h2v5h5v2h-5v5h-2v-5zm0-32h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zM32 80h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zm32 0h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zM32 48h-5v-2h5v-5h2v5h5v2h-5v5h-2v-5zm0-32h-5v-2h5V9h2v5h5v2h-5v5h-2v-5zm-32 0h-5v-2h5V9h2v5h5v2h-5v5h-2v-5z"></path>
        </svg>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Top glowing accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-green-300 rounded-full blur-sm"></div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer mb-6">
                <div className="bg-green-900/50 p-2 rounded-full flex items-center justify-center border border-green-800/30">
                  <Leaf className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  PotatoGuard
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              AI-powered potato disease detection and management system helping farmers identify and treat crop diseases efficiently.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Navigate
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-green-300 transition-colors text-sm cursor-pointer flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-green-500/50"></span>
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : "_self"} 
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-green-500/50"></span>
                    {link.title}
                    {link.external && <ExternalLink className="h-3 w-3 ml-1 text-green-500/70" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-green-300 transition-colors text-sm cursor-pointer flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-green-500/50"></span>
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="pt-10 mb-10">
          <div className="max-w-2xl mx-auto bg-green-950/50 rounded-2xl shadow-xl p-8 border border-green-800/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-green-400/5"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-green-400/5"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-1 bg-green-800"></div>
                <h3 className="text-xl font-bold mx-3 text-green-300">Stay Updated</h3>
                <div className="w-10 h-1 bg-green-800"></div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Subscribe to our newsletter for the latest updates on potato disease management and agricultural innovations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-black/30 border border-green-800/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium shadow-lg px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-200">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-green-800/30 pt-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center">
              <Leaf className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} <span className="text-green-400 font-medium">PotatoGuard</span>. All rights reserved.
              </p>
            </div>
            
            <a href="mailto:info@potatoguard.com" className="text-gray-400 hover:text-green-300 transition-colors text-sm flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              info@potatoguard.com
            </a>
            
            <div className="flex items-center text-gray-500 text-sm">
              <span className="h-1 w-1 rounded-full bg-green-500 mr-2"></span>
              Powered by AI and FastAPI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}