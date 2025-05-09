import { Link, useLocation } from "wouter";
import { Moon, Leaf, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

// Simple theme toggle component
function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-400 hover:text-white"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const isActive = (path: string) => location === path;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/analyzer", label: "Analyzer" },
    { path: "/guide", label: "Guide" },
    { path: "/diseases", label: "Diseases" },
    { path: "/prevention", label: "Prevention" }
  ];

  return (
    <nav className="bg-black text-white py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Leaf className="h-7 w-7 text-primary" />
              <div>
                <div className="text-xl font-bold text-primary">PotatoGuard</div>
                <div className="text-xs text-gray-400 dark:text-gray-400 mt-[-3px]">AI-Powered Disease Detection</div>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`
                    text-sm font-medium cursor-pointer transition-colors
                    ${isActive(item.path) 
                      ? "text-primary" 
                      : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="pt-4 pb-3 border-t border-gray-800 mt-3 md:hidden">
            <div className="space-y-1 px-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div 
                    className={`
                      block px-3 py-2 rounded-md text-base font-medium cursor-pointer
                      ${isActive(item.path) 
                        ? "bg-gray-900 text-primary" 
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}