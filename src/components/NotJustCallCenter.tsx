import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Cpu, Globe, Zap, Network, Sparkles, Brain } from "lucide-react";

const NotJustCallCenter = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-2xl floating-animation" style={{animationDelay: '4s'}} />
      
      {/* Decorative Elements */}
      <Network className="absolute top-20 left-10 h-32 w-32 text-white/5 floating-animation" />
      <Brain className="absolute bottom-20 right-20 h-24 w-24 text-white/5 floating-animation" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-brand-accent web3-glow" />
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Evolution in Progress</span>
            <Sparkles className="h-6 w-6 text-brand-accent web3-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Not Just a{" "}
            <span className="text-gradient">Call Centre</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            We started in contact centers. We mastered{" "}
            <span className="text-brand-accent font-semibold">human connection at scale</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold mb-6">Now we're building something bigger</h3>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Infrastructure that makes every company feel like it has a global operations team, 
              a Silicon Valley tech stack, and an AI research lab.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 glass-card rounded-xl border border-white/20 group hover:border-brand-accent/50 transition-all duration-500 relative overflow-hidden">
                <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
                <Phone className="h-8 w-8 text-brand-accent web3-glow relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="relative z-10">
                  <div className="font-bold text-lg">The old TCCL</div>
                  <div className="text-white/90">handled your calls</div>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center py-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
                <ArrowRight className="h-5 w-5 text-brand-accent" />
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
              </div>
              <div className="flex items-center gap-4 p-6 glass-card rounded-xl border border-white/20 group hover:border-brand-accent/50 transition-all duration-500 relative overflow-hidden pulse-glow">
                <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
                <Cpu className="h-8 w-8 text-brand-accent web3-glow relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="font-bold text-lg text-gradient">The new TCCL</div>
                  <div className="text-white/90">handles your entire customer universe</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-card border-white/20 text-white animate-fade-in hover:border-brand-accent/50 transition-all duration-500 group relative overflow-hidden hover:shadow-floating" style={{animationDelay: '0.6s'}}>
            <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
            <CardContent className="p-8 relative z-10">
              <Globe className="h-12 w-12 text-brand-accent mb-6 web3-glow group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors duration-500">
                From Lagos to London, São Paulo to Singapore
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed text-base">
                We're not just answering phones. We're answering the question:{" "}
                <span className="text-brand-accent font-semibold">"How do ambitious companies scale without losing their humanity?"</span>
              </p>
              <div className="flex items-center gap-3 text-brand-accent font-semibold group-hover:text-gradient transition-colors duration-500">
                <Zap className="h-5 w-5 web3-glow group-hover:rotate-12 transition-transform duration-300" />
                Build systems that think, act, and grow
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center glass-card p-12 rounded-2xl border border-white/20 animate-fade-in group hover:border-brand-accent/50 transition-all duration-500 relative overflow-hidden hover:shadow-floating" style={{animationDelay: '0.8s'}}>
          <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-brand-accent web3-glow floating-animation" />
          </div>
          <h3 className="text-3xl font-bold mb-8 leading-tight relative z-10">
            The answer? Build systems that{" "}
            <span className="text-gradient">think, act, and grow</span> like the best human teams—but{" "}
            <span className="text-brand-accent">never sleep, never quit, and never stop learning</span>.
          </h3>
          <Button variant="hero" size="lg" className="text-lg px-10 py-4 web3-glow hover:shadow-floating transition-all duration-500 relative overflow-hidden group/btn">
            <span className="shimmer absolute inset-0 opacity-0 group-hover/btn:opacity-100" />
            <span className="relative z-10 flex items-center">
              Discover How We Do It
              <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotJustCallCenter;