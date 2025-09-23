import { Card } from "@/components/ui/card";
import teamAbout from "@/assets/team-about.jpg";

const Benefits = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Get All the Solutions You Need In a Single Channel
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Incorporating artificial intelligence into Business can significantly enhance both customer engagement and operational efficiency. AI tools allow you to provide rapid responses and ensure 24/7 availability for your clients.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              By utilizing AI Solution, you can automate routine enquiries, leading to faster resolutions and improved customer satisfaction. This automation frees up your team to handle more complex issues, enhancing overall service delivery.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Investing in AI for Business provides a unique opportunity to differentiate your offerings and stay competitive in an evolving market.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={teamAbout} 
              alt="Professional team working on AI solutions" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-hero rounded-full opacity-80 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;