import { Link, useLocation } from "wouter";
import { Moon, Leaf, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Simple theme toggle component
function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-neutral-900 text-white py-3 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <div className="flex items-center space-x-3 text-white cursor-pointer group">
              <div className="bg-primary rounded-full p-1.5 group-hover:bg-primary/90 transition-colors">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">PotatoGuard</span>
            </div>
          </Link>
          <div className="bg-primary/10 px-2 py-0.5 rounded-full ml-3">
            <p className="text-xs font-medium text-primary">AI-Powered Disease Detection</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 md:space-x-2">
          {[
            { path: "/", label: "Home" },
            { path: "/analyzer", label: "Analyzer" },
            { path: "/guide", label: "Guide" },
            { path: "/diseases", label: "Diseases" },
            { path: "/prevention", label: "Prevention" }
          ].map((item) => (
            <Link key={item.path} href={item.path}>
              <span 
                className={`
                  px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors
                  ${isActive(item.path) 
                    ? "bg-primary/20 text-primary" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
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
      </div>
    </nav>
  );
}