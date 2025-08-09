import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, RefreshCw, Globe, Cog, BarChart3, ArrowRight } from "lucide-react";
const Features = () => {
  const features = [{
    icon: Target,
    title: "Strategic Business Planning",
    description: "Quarterly growth plans, competitive analysis, and market positioning strategies tailored to your industry and goals.",
    category: "Strategy"
  }, {
    icon: Globe,
    title: "Website & SEO Optimization",
    description: "High-converting websites that rank on Google and turn visitors into customers through proven conversion tactics.",
    category: "Digital"
  }, {
    icon: Bot,
    title: "AI-Powered Content Creation",
    description: "Consistent, brand-aligned content for blogs, social media, and email campaigns that engage your ideal customers.",
    category: "Content"
  }, {
    icon: RefreshCw,
    title: "Sales Funnel Development",
    description: "Automated lead nurturing sequences and sales processes that convert prospects while you focus on delivery.",
    category: "Growth"
  }, {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time dashboards showing what's working, what's not, and exactly where to focus for maximum ROI.",
    category: "Analytics"
  }, {
    icon: Cog,
    title: "Customer Success Programs",
    description: "Retention strategies and upselling systems that increase customer lifetime value and reduce churn.",
    category: "Success"
  }];
  return <section id="services" className="section-padding bg-brand-surface/30 pt-0 md:pt-6 pb-6 md:pb-8">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full mb-6">
            <Bot className="h-4 w-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary">Service Capabilities</span>
          </div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-text-primary mb-6">
            Everything Your Business Needs to 
            <span className="text-gradient"> Grow Profitably</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From strategy to execution, we handle the complex growth initiatives so you can focus on what you do best
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={feature.title} className="card-hover border-brand-border bg-card group animate-slide-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
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
                
              </CardContent>
            </Card>)}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center animate-fade-in" style={{
        animationDelay: '0.7s'
      }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to get your growth partner?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Stop juggling multiple agencies. Get strategy, execution, and results through one partner.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Get Started Today
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;