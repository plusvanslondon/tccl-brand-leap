import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Brain, TrendingUp, Lock } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Execution",
      description: "Global operations muscle meets local market intelligence. We don't just promise—we deliver across continents with the precision of Silicon Valley and the hustle of Lagos.",
      color: "from-brand-primary to-brand-accent"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "AI-generated content, automated lead scoring, and intelligent CRM flows that work while you sleep. Your brand grows 24/7 across every timezone.",
      color: "from-brand-accent to-brand-primary"
    },
    {
      icon: Brain,
      title: "Intelligence",
      description: "Smart systems that learn your customers, predict their needs, and create personalized experiences at scale. Every interaction makes your platform smarter.",
      color: "from-brand-dark to-brand-primary"
    },
    {
      icon: TrendingUp,
      title: "Scale",
      description: "Web3-native infrastructure built for exponential growth. From startup to unicorn without breaking your systems or losing your soul.",
      color: "from-brand-primary to-brand-dark"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Enterprise-grade protection with decentralized resilience. Your brand, your data, your growth—all fortress-protected.",
      color: "from-brand-accent to-brand-dark"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in">
            Five Pillars of Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            The foundation that powers self-scaling brand ecosystems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title}
              className={`group relative overflow-hidden border-2 border-transparent hover:border-brand-accent/50 transition-all duration-500 hover:shadow-brand animate-fade-in hover-scale ${
                index === 2 ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;