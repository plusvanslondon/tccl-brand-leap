import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const NotJustCallCenter = () => {
  const achievements = [
    {
      icon: TrendingUp,
      metric: "340%",
      label: "Revenue Growth",
      description: "Average increase in first year"
    },
    {
      icon: Users,
      metric: "50K+",
      label: "Customers Served",
      description: "Across enterprise clients"
    },
    {
      icon: Zap,
      metric: "89%",
      label: "Automation Rate",
      description: "Of routine customer interactions"
    }
  ];

  const capabilities = [
    "AI-powered customer journey mapping",
    "Real-time sentiment analysis and response",
    "Predictive lead scoring and qualification",
    "Automated content generation and personalization",
    "Cross-platform engagement orchestration",
    "Advanced analytics and performance insights"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-text-primary">Evolution Complete</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-display-md md:text-display-lg font-bold text-text-primary">
                We're Not Just a 
                <span className="text-gradient"> Call Center</span> Anymore
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                We've transformed from traditional customer service into an AI-native customer relationship powerhouse. 
                Today, we're the strategic partner that turns every customer interaction into a growth opportunity.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary mb-4">What sets us apart:</h3>
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{capability}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-primary group">
                Discover Our Evolution
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Metrics Side */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Achievement Cards */}
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.label}
                  className="card-hover border-brand-border group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-text-primary mb-1">
                          {achievement.metric}
                        </div>
                        <div className="text-lg font-semibold text-text-primary mb-1">
                          {achievement.label}
                        </div>
                        <div className="text-text-secondary text-sm">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote Card */}
            <Card className="border-brand-border bg-gradient-subtle p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-0">
                <blockquote className="text-lg italic text-text-primary mb-4">
                  "TCCL transformed our customer engagement completely. What used to take our team hours now happens automatically, and our conversion rates have never been higher."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full" />
                  <div>
                    <div className="font-semibold text-text-primary">Sarah Chen</div>
                    <div className="text-sm text-text-secondary">VP Growth, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotJustCallCenter;