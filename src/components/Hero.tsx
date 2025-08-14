import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Shield, Zap } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <header className="flex items-center justify-between py-6">
            <div className="text-2xl font-bold text-brand-primary">
              TCCL
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-text-secondary hover:text-brand-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-text-secondary hover:text-brand-primary transition-colors">
                About
              </a>
              
              <Button variant="outline" size="sm">
                Login
              </Button>
            </nav>
          </header>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full">
                <Star className="h-4 w-4 text-brand-accent fill-current" />
                <span className="text-sm font-medium text-text-primary">Digital-First Growth Partner</span>
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-display-lg md:text-display-xl font-bold text-text-primary leading-tight tracking-tight">
                  Your AI-Enabled 
                  <span className="text-gradient block md:inline"> Growth Partner</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                  Stop juggling agencies. Get strategy, execution, and growth acceleration through our AI-driven platform—your fractional COO, CMO & CTO in one partnership.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary group shadow-lg" asChild>
                  <a href="/dashboard">
                    Get Your Growth Partner
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background shadow-sm" />)}
                  </div>
                  <span className="text-sm font-medium text-text-secondary">200+ Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 text-brand-accent fill-current" />)}
                  <span className="text-sm font-medium text-text-secondary">3x Average Growth</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative bg-card border border-brand-border rounded-2xl p-8 shadow-xl">
                {/* Dashboard Preview */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-primary">TCCL Insights Live Dashboard</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-text-secondary">Live</span>
                    </div>
                  </div>
                  
                  {/* Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-surface border border-brand-border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-brand-primary" />
                        <span className="text-sm font-medium text-text-secondary">Active Leads</span>
                      </div>
                      <div className="text-2xl font-bold text-text-primary">1,247</div>
                      <div className="text-sm text-green-600">+23% this week</div>
                    </div>
                    
                    <div className="bg-brand-surface border border-brand-border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-brand-accent" />
                        <span className="text-sm font-medium text-text-secondary">Conversion</span>
                      </div>
                      <div className="text-2xl font-bold text-text-primary">34.5%</div>
                      <div className="text-sm text-green-600">+12% this month</div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-text-secondary">Recent Activity</h4>
                    {[{
                    action: "AI generated personalized email sequence",
                    time: "2 min ago",
                    status: "success"
                  }, {
                    action: "Lead scoring updated for 47 prospects",
                    time: "5 min ago",
                    status: "info"
                  }, {
                    action: "Automated follow-up sent to warm leads",
                    time: "12 min ago",
                    status: "success"
                  }].map((activity, i) => <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-brand-border">
                        <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
                        <div className="flex-1">
                          <div className="text-sm text-text-primary">{activity.action}</div>
                          <div className="text-xs text-text-muted">{activity.time}</div>
                        </div>
                      </div>)}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  <Shield className="inline h-3 w-3 mr-1" />
                  Secure
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl -z-10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;