import { Card } from "@/components/ui/card";
import { Smartphone, Code, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Apps Development",
      description: "Custom-coded, scalable websites for corporate, retail, or SME clients.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Smartphone,
      title: "WhatsApp & AI Integration",
      description: "Build and deploy customer service automation on WhatsApp, including chatbot flows, appointment reminders, and payment automation.",
      gradient: "from-accent to-primary"
    },
    {
      icon: TrendingUp,
      title: "SEO & Lead Funnels",
      description: "Boost your online presence with high-converting landing pages and technical SEO",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-purple transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;