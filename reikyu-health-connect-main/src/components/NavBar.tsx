import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import reikywLogo from "@/assets/reikyu-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" },
  ];

  const languages = ["EN", "हिं", "ଓଡ଼"];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:scale-105">
            <img 
              src={reikywLogo} 
              alt="Reikyu Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">Reikyu</span>
              <span className="text-xs text-muted-foreground">Health AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 h-8"
                onClick={() => {
                  const currentIndex = languages.indexOf(language);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setLanguage(languages[nextIndex]);
                }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">{language}</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-floating border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-smooth ${
                    isActive(item.path)
                      ? "text-primary bg-primary-light/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;