import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, RefreshCw, Globe, Cog, BarChart3 } from "lucide-react";

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
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform customer connections into autonomous growth engines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-brand transition-all duration-300 border-border/50 hover:border-brand-accent/50 animate-fade-in hover-scale"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-brand-dark group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;