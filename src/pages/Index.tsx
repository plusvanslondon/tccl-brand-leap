import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Features from "@/components/Features";
import NotJustCallCenter from "@/components/NotJustCallCenter";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pillars />
      <Features />
      <NotJustCallCenter />
      <CTA />
    </div>
  );
};

export default Index;
