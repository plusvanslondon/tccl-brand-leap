import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Brain, TrendingUp, Lock, Network, Sparkles } from "lucide-react";

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
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <Network className="absolute top-20 left-10 h-32 w-32 text-brand-primary/20 floating-animation" />
        <Network className="absolute bottom-20 right-10 h-24 w-24 text-brand-accent/20 floating-animation" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-brand-accent web3-glow" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Web3-Native Foundation</span>
            <Sparkles className="h-8 w-8 text-brand-accent web3-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in">
            Five Pillars of{" "}
            <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            The foundation that powers <span className="text-brand-primary font-semibold">self-scaling brand ecosystems</span> in the decentralized economy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title}
              className={`group relative overflow-hidden border-2 border-transparent hover:border-brand-accent/50 transition-all duration-500 hover:shadow-floating animate-fade-in hover-scale glass-card ${
                index === 2 ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm pulse-glow' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg web3-glow relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <pillar.icon className="h-8 w-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <CardTitle className="text-2xl text-brand-dark group-hover:text-gradient transition-all duration-500 font-bold">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500 text-base">
                  {pillar.description}
                </p>
                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;