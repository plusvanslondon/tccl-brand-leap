import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, RefreshCw, Globe, Cog, BarChart3, Layers, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Content Engine",
      description: "Generate brand-consistent content across all channels. Blogs, social posts, email campaigns—all optimized for your audience.",
      gradient: "from-brand-primary to-brand-accent"
    },
    {
      icon: Target,
      title: "Intelligent Lead Scoring",
      description: "AI predicts customer lifetime value before the first interaction. Focus your energy where it matters most.",
      gradient: "from-brand-accent to-brand-primary"
    },
    {
      icon: RefreshCw,
      title: "CRM-Driven Engagement",
      description: "Automated nurture sequences that feel personal. Every touchpoint planned, every conversation purposeful.",
      gradient: "from-brand-dark to-brand-primary"
    },
    {
      icon: Globe,
      title: "Web3 Client Onboarding",
      description: "Decentralized identity management and seamless blockchain-native customer journeys.",
      gradient: "from-brand-primary to-brand-dark"
    },
    {
      icon: Cog,
      title: "Autonomous Operations",
      description: "AI handles admin, support tickets, and initial sales conversations. Your team focuses on strategy, not repetition.",
      gradient: "from-brand-accent to-brand-dark"
    },
    {
      icon: BarChart3,
      title: "Real-Time Intelligence",
      description: "Dashboard that shows not just what happened, but what's about to happen. Predict trends before they emerge.",
      gradient: "from-brand-dark to-brand-accent"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <Layers className="absolute top-10 right-20 h-40 w-40 text-brand-primary/10 floating-animation" />
        <Layers className="absolute bottom-20 left-20 h-32 w-32 text-brand-accent/10 floating-animation" style={{animationDelay: '3s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-brand-light/50 rounded-full border border-brand-primary/20">
            <Bot className="h-5 w-5 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">AI-Powered Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in">
            Platform{" "}
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Everything you need to transform customer connections into{" "}
            <span className="text-brand-primary font-semibold">autonomous growth engines</span> powered by cutting-edge AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-floating transition-all duration-500 border-border/50 hover:border-brand-accent/50 animate-fade-in hover-scale glass-card relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg web3-glow relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <feature.icon className="h-7 w-7 text-white relative z-10 group-hover:rotate-6 transition-transform duration-500" />
                </div>
                <CardTitle className="text-xl text-brand-dark group-hover:text-gradient transition-all duration-500 font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {feature.description}
                </CardDescription>
                <div className="flex items-center gap-2 mt-4 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm font-semibold">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;