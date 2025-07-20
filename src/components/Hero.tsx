import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Brain, TrendingUp, Lock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-primary/90" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      
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
            From Support to Infrastructure. From Local to{" "}
            <span className="text-brand-accent">Global</span>. From Manual to{" "}
            <span className="text-brand-accent">Autonomous</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            TCCL transforms how ambitious companies scale—turning customer connections into self-sustaining brand ecosystems powered by AI, backed by proven global operations.
          </p>
          
          <div className="mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-lg font-medium">
              The only platform that combines African operational excellence with AI-native brand development, creating decentralized growth engines that scale without limits.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover-scale">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white/30">
              Book Strategy Call
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Shield className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-sm text-white/80">Global operations muscle meets local market intelligence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in" style={{animationDelay: '1s'}}>
              <Zap className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="font-bold mb-2">Automation</h3>
              <p className="text-sm text-white/80">AI that works 24/7 across every timezone</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Brain className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="font-bold mb-2">Intelligence</h3>
              <p className="text-sm text-white/80">Systems that learn and predict customer needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in" style={{animationDelay: '1.4s'}}>
              <TrendingUp className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="font-bold mb-2">Scale</h3>
              <p className="text-sm text-white/80">From startup to unicorn without breaking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;