import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const NotJustCallCenter = () => {
  const achievements = [
    {
      icon: TrendingUp,
      metric: "3x",
      label: "Average Revenue Growth",
      description: "Within 12 months of partnership"
    },
    {
      icon: Users,
      metric: "200+",
      label: "Small Businesses Served",
      description: "From startups to $10M companies"
    },
    {
      icon: Zap,
      metric: "90%",
      label: "Implementation Success",
      description: "Of growth strategies deployed"
    }
  ];

  const capabilities = [
    "Strategic business planning and market positioning",
    "AI-powered website optimization and SEO",
    "Automated content creation and social media management",
    "Sales funnel development and lead nurturing",
    "Customer success programs and retention strategies",
    "Real-time performance tracking and optimization"
  ];

  return (
    <section id="about" className="section-padding bg-background pt-6 md:pt-8">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-text-primary">AI-Enabled Growth Partner</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h2 className="text-display-md md:text-display-lg font-bold text-text-primary tracking-tight">
                Beyond a Service Provider—
                <span className="text-gradient block"> We're Your Growth Partner</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                We combine human expertise with AI automation to deliver strategic guidance and execution. 
                Think of us as your fractional C-suite—handling strategy, marketing, and technology so you can focus on what you do best.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary mb-4">How we drive your growth:</h3>
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{capability}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="btn-primary group shadow-lg">
                Start Your Partnership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary">
                View Success Stories
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
                  "TCCL became our growth partner when we couldn't afford a full marketing team. They handled strategy, content, and lead generation while we focused on delivery. Revenue tripled in 18 months."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full" />
                  <div>
                    <div className="font-semibold text-text-primary">Marcus Rodriguez</div>
                    <div className="text-sm text-text-secondary">Founder, Local Services Co</div>
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