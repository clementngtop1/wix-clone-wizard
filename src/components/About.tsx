import { Card } from "@/components/ui/card";
import aiInnovation from "@/assets/ai-innovation.jpg";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            All Your Organization Needs in a Single AI-Powered Solutions
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src={aiInnovation} 
              alt="AI Innovation Engine" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-hero rounded-full opacity-80 blur-xl" />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">AI Innovative Engine</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Malaysian-based technology firm specializing in advanced website development, AI-powered automations, and integrations with platforms like n8n, WhatsApp, and Twilio. Our mission is to help SMEs and corporates harness automation and intelligent systems to scale faster.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
          <h3 className="text-3xl font-bold mb-6 text-center">About Us</h3>
          <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Ancycom Web Solutions is a digital technology consultancy headquartered in Kuala Lumpur, Malaysia. Founded in 2020, our team of certified engineers and developers delivers scalable, secure, and smart web solutions tailored to real business problems.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;