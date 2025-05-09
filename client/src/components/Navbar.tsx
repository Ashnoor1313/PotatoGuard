import { Link, useLocation } from "wouter";
import { Leaf } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <a className="flex items-center space-x-2 text-white">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">PotatoGuard</span>
            </a>
          </Link>
          <p className="text-xs ml-2 text-primary-foreground/80">AI-Powered Disease Detection</p>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/">
            <a className={`text-sm font-medium ${isActive("/") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Home
            </a>
          </Link>
          <Link href="/analyzer">
            <a className={`text-sm font-medium ${isActive("/analyzer") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Analyzer
            </a>
          </Link>
          <Link href="/guide">
            <a className={`text-sm font-medium ${isActive("/guide") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Guide
            </a>
          </Link>
          <Link href="/diseases">
            <a className={`text-sm font-medium ${isActive("/diseases") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Diseases
            </a>
          </Link>
          <Link href="/prevention">
            <a className={`text-sm font-medium ${isActive("/prevention") ? "text-white underline decoration-2 underline-offset-4" : "text-primary-foreground/90 hover:text-white"}`}>
              Prevention
            </a>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}