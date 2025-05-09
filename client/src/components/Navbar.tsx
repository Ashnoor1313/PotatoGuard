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
      className="rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <div className="flex items-center space-x-2 text-white cursor-pointer">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">PotatoGuard</span>
            </div>
          </Link>
          <p className="text-xs ml-2 text-primary-foreground/80">AI-Powered Disease Detection</p>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/">
            <span className={`text-sm font-medium cursor-pointer ${isActive("/") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Home
            </span>
          </Link>
          <Link href="/analyzer">
            <span className={`text-sm font-medium cursor-pointer ${isActive("/analyzer") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Analyzer
            </span>
          </Link>
          <Link href="/guide">
            <span className={`text-sm font-medium cursor-pointer ${isActive("/guide") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Guide
            </span>
          </Link>
          <Link href="/diseases">
            <span className={`text-sm font-medium cursor-pointer ${isActive("/diseases") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Diseases
            </span>
          </Link>
          <Link href="/prevention">
            <span className={`text-sm font-medium cursor-pointer ${isActive("/prevention") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Prevention
            </span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}