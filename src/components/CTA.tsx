import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 to-brand-primary/95" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            Ready to build the future of your brand?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join the companies transforming from support centers to infrastructure powerhouses. 
            Your autonomous growth engine awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 hover-scale shadow-glow">
              Start Your Transformation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Strategy Call
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">24/7</div>
              <div className="text-white/80">AI-Powered Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">Global</div>
              <div className="text-white/80">Operational Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">∞</div>
              <div className="text-white/80">Scalable Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;