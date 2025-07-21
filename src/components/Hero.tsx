import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Brain, TrendingUp, Lock, Sparkles, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 to-brand-primary/90" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '0s'}} />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-2xl floating-animation" style={{animationDelay: '4s'}} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Logo */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <img 
              src="/lovable-uploads/dcd4b71b-5666-415b-a8c1-7398f6206679.png" 
              alt="TCCL Logo" 
              className="w-24 h-24 animate-fade-in"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            From Support to{" "}
            <span className="text-gradient">Infrastructure</span>. From Local to{" "}
            <span className="text-brand-accent pulse-glow">Global</span>. From Manual to{" "}
            <span className="text-gradient web3-glow">Autonomous</span>.
            <Sparkles className="inline-block ml-4 h-8 w-8 text-brand-accent floating-animation" />
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            TCCL transforms how ambitious companies scale—turning customer connections into self-sustaining brand ecosystems powered by AI, backed by proven global operations.
          </p>
          
          <div className="mb-12 p-6 glass-card rounded-xl border border-white/20 animate-fade-in relative overflow-hidden group" style={{animationDelay: '0.4s'}}>
            <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
            <div className="flex items-start gap-4">
              <Cpu className="h-6 w-6 text-brand-accent mt-1 web3-glow" />
              <p className="text-lg font-medium leading-relaxed relative z-10">
                The only platform that combines <span className="text-brand-accent font-semibold">African operational excellence</span> with <span className="text-gradient font-semibold">AI-native brand development</span>, creating <span className="text-brand-accent font-semibold">decentralized growth engines</span> that scale without limits.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover-scale web3-glow hover:shadow-floating transition-all duration-500 relative overflow-hidden group">
              <span className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 glass-card text-white border-white/30 hover:border-brand-accent/50 hover:shadow-glass transition-all duration-300 group">
              <span className="relative z-10 flex items-center">
                Book Strategy Call
                <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </Button>
          </div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 animate-fade-in group hover:shadow-floating relative overflow-hidden floating-animation" style={{animationDelay: '0.8s'}}>
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <Shield className="h-8 w-8 text-brand-accent mb-4 web3-glow group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="font-bold mb-2 text-white relative z-10">Execution</h3>
              <p className="text-sm text-white/90 relative z-10">Global operations muscle meets local market intelligence</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 animate-fade-in group hover:shadow-floating relative overflow-hidden floating-animation" style={{animationDelay: '1s'}}>
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <Zap className="h-8 w-8 text-brand-accent mb-4 web3-glow group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="font-bold mb-2 text-white relative z-10">Automation</h3>
              <p className="text-sm text-white/90 relative z-10">AI that works 24/7 across every timezone</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 animate-fade-in group hover:shadow-floating relative overflow-hidden floating-animation" style={{animationDelay: '1.2s'}}>
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <Brain className="h-8 w-8 text-brand-accent mb-4 web3-glow group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="font-bold mb-2 text-white relative z-10">Intelligence</h3>
              <p className="text-sm text-white/90 relative z-10">Systems that learn and predict customer needs</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 animate-fade-in group hover:shadow-floating relative overflow-hidden floating-animation" style={{animationDelay: '1.4s'}}>
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <TrendingUp className="h-8 w-8 text-brand-accent mb-4 web3-glow group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <h3 className="font-bold mb-2 text-white relative z-10">Scale</h3>
              <p className="text-sm text-white/90 relative z-10">From startup to unicorn without breaking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;