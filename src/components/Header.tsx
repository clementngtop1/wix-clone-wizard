import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="text-lg font-semibold">
              <span className="text-foreground">Ancycom</span>
              <br />
              <span className="text-sm text-muted-foreground -mt-1 block">Web Solutions</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log In
            </Button>
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-hero hover:shadow-glow-purple transition-all duration-300 font-semibold">
            GET STARTED
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;