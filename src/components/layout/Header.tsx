import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import braintoLogo from "@/assets/brainito-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={braintoLogo} 
              alt="Brainito" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Login
            </a>
            <a href="/hire-marketer">
              <Button variant="headerCta" size="default">
                Hire Marketer
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-3">
              <a href="/login" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Login
              </a>
              <a href="/hire-marketer">
                <Button variant="headerCta" className="w-full">
                  Hire Marketer
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
