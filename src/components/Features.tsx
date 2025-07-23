import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, RefreshCw, Globe, Cog, BarChart3, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Content Engine",
      description: "Generate brand-consistent content across all channels. Blogs, social posts, email campaigns—all optimized for your audience.",
      category: "Content"
    },
    {
      icon: Target,
      title: "Intelligent Lead Scoring",
      description: "AI predicts customer lifetime value before the first interaction. Focus your energy where it matters most.",
      category: "Sales"
    },
    {
      icon: RefreshCw,
      title: "CRM-Driven Engagement",
      description: "Automated nurture sequences that feel personal. Every touchpoint planned, every conversation purposeful.",
      category: "Automation"
    },
    {
      icon: Globe,
      title: "Web3 Client Onboarding",
      description: "Decentralized identity management and seamless blockchain-native customer journeys.",
      category: "Innovation"
    },
    {
      icon: Cog,
      title: "Autonomous Operations",
      description: "AI handles admin, support tickets, and initial sales conversations. Your team focuses on strategy, not repetition.",
      category: "Operations"
    },
    {
      icon: BarChart3,
      title: "Real-Time Intelligence",
      description: "Dashboard that shows not just what happened, but what's about to happen. Predict trends before they emerge.",
      category: "Analytics"
    }
  ];

  return (
    <section className="section-padding bg-brand-surface/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full mb-6">
            <Bot className="h-4 w-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary">Platform Features</span>
          </div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-text-primary mb-6">
            Everything You Need to 
            <span className="text-gradient"> Scale Intelligently</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Transform customer connections into autonomous growth engines powered by cutting-edge AI
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover border-brand-border bg-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full">
                    {feature.category}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <CardTitle className="text-xl font-semibold text-text-primary group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-text-secondary leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to see these features in action?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Experience how our AI-powered platform can transform your customer relationships and drive autonomous growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;