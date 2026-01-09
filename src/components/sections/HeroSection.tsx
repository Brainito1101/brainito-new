import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Play } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const HeroSection = () => {
  const [count, setCount] = useState(1758);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex flex-col pt-40 sm:pt-52 pb-48 sm:pb-64 px-4 overflow-visible bg-gradient-to-b from-white via-purple-light to-purple-dark">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 bg-primary/15 rounded-full blur-[80px] sm:blur-[100px] animate-float" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-purple-medium/20 rounded-full blur-[80px] sm:blur-[100px] animate-float delay-500" />
          <div className="absolute top-1/3 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] animate-pulse-glow" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trusted counter */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 bg-gradient-to-br from-accent via-accent to-orange-300/40 backdrop-blur-sm rounded-full animate-fade-up">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                Trusted by <span className="tabular-nums">{count.toLocaleString()}</span> Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-5 animate-fade-up leading-tight">
              <span className="royal-gradient-text">Marketing Audit Report</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-up delay-100 leading-relaxed">
              Data-driven website insights and audit backed by 10+ years of research.
            </p>

            {/* Input Fields */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up delay-200 max-w-2xl mx-auto">
              <input
                type="url"
                placeholder="Enter your website"
                className="h-12 sm:h-14 w-full sm:flex-1 px-5 rounded-[10px] bg-white border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 sm:h-14 w-full sm:flex-1 px-5 rounded-[10px] bg-white border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
              />
              <Button variant="hero" className="h-12 sm:h-14 px-6 sm:px-8 text-base group w-full sm:w-auto">
                <span className="flex items-center justify-center font-bold">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            {/* Login link */}
            <p className="text-sm text-muted-foreground mt-6 animate-fade-up delay-300">
              <a href="/login" className="text-primary hover:text-accent font-semibold transition-colors">Login</a> if account already exists
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview - Half in hero, half in white section */}
      <div className="relative z-20 -mt-32 sm:-mt-48 animate-fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Dashboard with shadow */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <img 
                src={dashboardPreview} 
                alt="Brainito Marketing Dashboard showing AI Trust Score, traffic analytics, and competitor insights"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
