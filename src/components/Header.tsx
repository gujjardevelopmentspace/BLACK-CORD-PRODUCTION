import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Play, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/why-choose-us", label: "Why Us" },
    { to: "/process", label: "Process" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 sm:w-6 sm:h-6 text-brand-white fill-current" />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-foreground">
              <span className="hidden sm:inline">Black Cord </span>
              <span className="text-brand-red">
                <span className="sm:hidden">BCP</span>
                <span className="hidden sm:inline">Production</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-brand-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/start-project">
              <Button variant="hero" size="lg">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-brand-white fill-current" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    Black Cord <span className="text-brand-red">Production</span>
                  </span>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-lg text-foreground hover:text-brand-red transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <div className="pt-4 border-t">
                  <Link to="/start-project" onClick={() => setIsOpen(false)}>
                    <Button variant="hero" size="lg" className="w-full">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;