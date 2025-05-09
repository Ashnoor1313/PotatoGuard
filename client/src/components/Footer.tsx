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
    { title: "Potato Disease Database", href: "https://www.potatodiseases.org", external: true },
    { title: "University Agriculture Extensions", href: "https://www.extension.org", external: true },
    { title: "Crop Protection Network", href: "https://cropprotectionnetwork.org", external: true },
  ];

  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Contact", href: "/contact" },
  ];
  
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer mb-4">
                <Leaf className="h-7 w-7 text-primary" />
                <div className="text-xl font-bold text-primary">PotatoGuard</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered potato disease detection and management system helping farmers identify and treat crop diseases efficiently.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : "_self"} 
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center"
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
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on potato disease management and agricultural innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PotatoGuard. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="mailto:info@potatoguard.com" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                <Mail className="h-4 w-4 mr-1" />
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