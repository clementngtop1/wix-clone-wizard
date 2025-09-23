import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
      
      {/* Flowing Animation Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000">
          Your AI-Agent Solution
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom delay-300 duration-1000">
          Linked AI-Agent Solution to your Organization
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-hero hover:shadow-glow-purple transition-all duration-300 font-semibold text-lg px-8 py-4 animate-in slide-in-from-bottom delay-500 duration-1000"
          onClick={() => window.location.href = 'mailto:clement.ng@ancycomwebsolutions.info?subject=enquiry%202'}
        >
          GET STARTED →
        </Button>
      </div>
    </section>
  );
};

export default Hero;