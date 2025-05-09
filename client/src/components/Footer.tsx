import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Github, Mail, Leaf, ExternalLink } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzBjMC02LjYyNy01LjM3My0xMi0xMi0xMlMxMiAyMy4zNzMgMTIgMzBzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJ6Ii8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Top glowing accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 rounded-full blur-sm"></div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer mb-5">
                <Leaf className="h-7 w-7 text-green-400" />
                <div className="text-xl font-bold text-green-400">PotatoGuard</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              AI-powered potato disease detection and management system helping farmers identify and treat crop diseases efficiently.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-300">Navigate</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-green-300 transition-colors text-sm cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-300">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : "_self"} 
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm flex items-center"
                  >
                    {link.title}
                    {link.external && <ExternalLink className="h-3 w-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-300">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-green-300 transition-colors text-sm cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-green-800/40 pt-10 mb-10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-3 text-green-300">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-5">
              Subscribe to our newsletter for the latest updates on potato disease management and agricultural innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 bg-green-950/50 border border-green-800/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-green-800/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PotatoGuard. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="mailto:info@potatoguard.com" className="text-gray-400 hover:text-green-300 transition-colors text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@potatoguard.com
              </a>
              <p className="text-gray-400 text-sm">
                Powered by AI and FastAPI
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}