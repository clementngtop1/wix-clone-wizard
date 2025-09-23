import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground">We're here to help.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a 
                    href="mailto:clement.ng@ancycomwebsolutions.info" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    clement.ng@ancycomwebsolutions.info
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a 
                    href="tel:+601162565165" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +601162565165
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    Surian Condominium, Mutiara Damansara,<br />
                    Petaling Jaya, Selangor, Malaysia
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form CTA */}
          <div className="flex items-center justify-center">
            <Card className="p-8 bg-gradient-hero text-center w-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 mb-6">
                Use our contact form to schedule a free consultation.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = 'mailto:clement.ng@ancycomwebsolutions.info?subject=Free%20Consultation%20Request'}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Schedule Free Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;