import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Zap, Network, Shield, Cpu } from "lucide-react";
const Pillars = () => {
  const pillars = [{
    icon: Layers,
    title: "Strategy Stack",
    description: "Business strategy, market positioning, and growth planning powered by AI insights and proven frameworks"
  }, {
    icon: Zap,
    title: "Digital Stack",
    description: "Website optimization, SEO, content creation, and digital marketing that actually converts visitors to customers"
  }, {
    icon: Network,
    title: "Growth Stack",
    description: "Sales funnels, customer success programs, and retention strategies that compound your revenue over time"
  }];
  return <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full mb-6">
            <Network className="h-4 w-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary">Service Categories</span>
          </div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-text-primary mb-6">
            Three Productised 
            <span className="text-gradient"> Service Stacks</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">Everything you need to grow your business, delivered through AI-optimised processes and proven frameworks that scale with your success</p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => <Card key={pillar.title} className="card-hover border-brand-border bg-card/50 backdrop-blur-sm animate-slide-up group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-text-primary group-hover:text-gradient transition-all duration-300">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          <p className="text-text-secondary mb-4">
            Ready to scale your business with AI-powered service delivery?
          </p>
          <div className="inline-flex items-center gap-2 text-brand-primary font-medium cursor-pointer group">
            <span>See our service packages</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>;
};
export default Pillars;