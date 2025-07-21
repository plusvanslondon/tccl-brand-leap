import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Zap, Network, Infinity } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 to-brand-primary/95" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.15),transparent_70%)]" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}} />
      
      {/* Decorative Elements */}
      <Network className="absolute top-10 right-10 h-32 w-32 text-white/5 floating-animation" />
      <Sparkles className="absolute bottom-10 left-10 h-24 w-24 text-white/5 floating-animation" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles className="h-8 w-8 text-brand-accent web3-glow" />
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Transform Today</span>
            <Sparkles className="h-8 w-8 text-brand-accent web3-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            Ready to build the{" "}
            <span className="text-gradient">future</span> of your brand?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join the companies transforming from support centers to{" "}
            <span className="text-brand-accent font-semibold">infrastructure powerhouses</span>. 
            Your <span className="text-gradient font-semibold">autonomous growth engine</span> awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 hover-scale web3-glow hover:shadow-floating transition-all duration-500 relative overflow-hidden group">
              <span className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                <Sparkles className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 glass-card text-white border-white/30 hover:border-brand-accent/50 hover:shadow-glass transition-all duration-500 group relative overflow-hidden"
            >
              <span className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Book Strategy Call
              </span>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 group relative overflow-hidden hover:shadow-glass">
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <Zap className="h-8 w-8 text-brand-accent mx-auto mb-4 web3-glow group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-brand-accent mb-3 group-hover:text-gradient transition-colors duration-300">24/7</div>
              <div className="text-white/90 font-medium">AI-Powered Operations</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 group relative overflow-hidden hover:shadow-glass pulse-glow">
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <Network className="h-8 w-8 text-brand-accent mx-auto mb-4 web3-glow group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-brand-accent mb-3 group-hover:text-gradient transition-colors duration-300">Global</div>
              <div className="text-white/90 font-medium">Operational Reach</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl border border-white/20 hover:border-brand-accent/50 transition-all duration-500 group relative overflow-hidden hover:shadow-glass">
              <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
              <Infinity className="h-8 w-8 text-brand-accent mx-auto mb-4 web3-glow group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-brand-accent mb-3 group-hover:text-gradient transition-colors duration-300">∞</div>
              <div className="text-white/90 font-medium">Scalable Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;