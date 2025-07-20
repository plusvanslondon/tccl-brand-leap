import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Cpu, Globe, Zap } from "lucide-react";

const NotJustCallCenter = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Not Just a Call Centre
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            We started in contact centers. We mastered human connection at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold mb-6">Now we're building something bigger</h3>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Infrastructure that makes every company feel like it has a global operations team, 
              a Silicon Valley tech stack, and an AI research lab.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="h-6 w-6 text-brand-accent" />
                <div>
                  <div className="font-semibold">The old TCCL</div>
                  <div className="text-white/80">handled your calls</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Cpu className="h-6 w-6 text-brand-accent" />
                <div>
                  <div className="font-semibold">The new TCCL</div>
                  <div className="text-white/80">handles your entire customer universe</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in" style={{animationDelay: '0.6s'}}>
            <CardContent className="p-8">
              <Globe className="h-12 w-12 text-brand-accent mb-6" />
              <h4 className="text-xl font-bold mb-4">From Lagos to London, São Paulo to Singapore</h4>
              <p className="text-white/90 mb-6">
                We're not just answering phones. We're answering the question: 
                "How do ambitious companies scale without losing their humanity?"
              </p>
              <div className="flex items-center gap-2 text-brand-accent font-semibold">
                <Zap className="h-5 w-5" />
                Build systems that think, act, and grow
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-primary/20 backdrop-blur-sm p-12 rounded-2xl border border-white/20 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold mb-6">
            The answer? Build systems that think, act, and grow like the best human teams—but never sleep, never quit, and never stop learning.
          </h3>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Discover How We Do It
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotJustCallCenter;