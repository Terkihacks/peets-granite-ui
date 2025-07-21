import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-border/50">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-copper" />
              <span>+1 (555) 123-4567</span>
            </div>
            <span>Professional Industrial Solutions</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">Account</a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GF</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Granite Forge</h1>
                <p className="text-xs text-muted-foreground">Emporium</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#granite" className="text-foreground hover:text-primary transition-colors font-medium">Granite Slabs</a>
              <a href="#machinery" className="text-foreground hover:text-primary transition-colors font-medium">Machinery</a>
              <a href="#generators" className="text-foreground hover:text-primary transition-colors font-medium">Generators</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 min-w-[300px]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search granite slabs, generators..." 
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-copper text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Button>

            <Button 
              variant="industrial" 
              size="default"
              className="hidden md:flex"
            >
              Request Quote
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none text-sm flex-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <a href="#granite" className="text-foreground hover:text-primary transition-colors font-medium py-2">Granite Slabs</a>
                <a href="#machinery" className="text-foreground hover:text-primary transition-colors font-medium py-2">Machinery</a>
                <a href="#generators" className="text-foreground hover:text-primary transition-colors font-medium py-2">Generators</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">About</a>
              </div>
              <Button variant="industrial" className="mt-2">
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;