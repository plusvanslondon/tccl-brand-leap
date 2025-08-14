import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Calendar, MessageSquare, Shield, Zap, Users } from "lucide-react";
const CTA = () => {
  const features = [{
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance"
  }, {
    icon: Zap,
    title: "Instant Setup",
    description: "Get started in under 15 minutes"
  }, {
    icon: Users,
    title: "24/7 Support",
    description: "Dedicated success team included"
  }];
  return <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        {/* Main CTA Card */}
        <Card className="border-brand-border shadow-xl overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <div className="bg-gradient-primary text-white p-8 md:p-12 text-center">
              <h2 className="text-display-md md:text-display-lg font-bold mb-6 tracking-tight">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 200+ business owners who've stopped juggling agencies and started scaling with AI. 
                Your growth partner awaits—no long contracts, just results.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-white/90 shadow-lg group font-semibold">
                  Get Your Growth Partner
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">30-day trial available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="bg-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => <div key={feature.title} className="text-center animate-slide-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary">
                      {feature.description}
                    </p>
                  </div>)}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <div className="mt-12 text-center animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
          <p className="text-text-secondary mb-6">
            Questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="btn-secondary group">
              <Phone className="mr-2 h-4 w-4" />
              Call Sales: +447537 141 707
            </Button>
            <Button variant="outline" className="btn-secondary group">
              <MessageSquare className="mr-2 h-4 w-4" />
              Live Chat Support
            </Button>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center text-sm text-text-muted animate-fade-in" style={{
        animationDelay: '0.4s'
      }}>
          <p>Trusted by small businesses. Results-focused partnerships. Transparent pricing.</p>
        </div>
      </div>
    </section>;
};

// Helper component for check icons
const CheckIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>;
export default CTA;