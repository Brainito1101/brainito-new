import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Heart, Zap, ArrowRight, Eye, Rocket } from "lucide-react";

const About = () => {
  const timelineEvents = [
    { year: "2018", title: "The Idea", description: "Identified the gap between enterprise marketing tools and SMB needs" },
    { year: "2019", title: "Foundation", description: "Wockito Innovative Solutions PVT LTD was founded in Ahmedabad, India" },
    { year: "2020", title: "First Product", description: "Launched our first AI-powered marketing audit tool" },
    { year: "2021", title: "Expansion", description: "Expanded services to include dedicated marketing professionals" },
    { year: "2022", title: "Global Reach", description: "Opened US office in Delaware and served 100+ clients globally" },
    { year: "2023", title: "AI Revolution", description: "Integrated advanced AI for personalized marketing strategies" },
    { year: "2024", title: "Platform Launch", description: "Launched comprehensive Brainito platform with DIY and managed services" },
    { year: "2025", title: "The Future", description: "Continuing to innovate and help 10,000+ businesses grow" },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we create is focused on measurable outcomes. We don't just promise growth—we deliver it with data-backed approaches."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to deliver marketing solutions that stay ahead of the curve and give you a competitive edge."
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description: "Your success is our success. We're committed to understanding your unique challenges and crafting solutions that truly work for you."
    },
    {
      icon: Zap,
      title: "Speed & Agility",
      description: "In the fast-paced world of marketing, speed matters. We deliver actionable strategies quickly without compromising on quality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Asana-inspired */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-white via-purple-light/50 to-purple-medium">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              We're in business to help you grow
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Brainito is a leading AI-powered marketing platform that combines intelligent automation with human expertise. 
              We help businesses of all sizes—from ambitious startups to established enterprises—achieve remarkable growth 
              through data-driven marketing strategies.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our story is your story
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You want to grow your business. You're motivated by impact and purpose. 
                And you want your marketing to make a difference. We want the same thing.
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />
                
                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <div 
                      key={event.year} 
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className={`bg-purple-light/30 rounded-2xl p-6 border border-border/20 hover:shadow-lg transition-shadow ${
                          index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                        }`}>
                          <span className="text-2xl font-bold text-accent">{event.year}</span>
                          <h3 className="text-lg font-bold text-foreground mt-2 mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                      
                      {/* Center dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" />
                      
                      {/* Empty space for other side */}
                      <div className="w-5/12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-purple-light/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-sm border border-border/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 text-primary-foreground">
                <div className="w-16 h-16 rounded-2xl bg-background/20 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  To democratize world-class marketing by making AI-powered strategies accessible to every business, 
                  regardless of size or budget. We believe every entrepreneur deserves the tools and expertise 
                  to compete and win in today's digital landscape.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-10 text-background">
                <div className="w-16 h-16 rounded-2xl bg-background/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-background/90 text-lg leading-relaxed">
                  To be the world's most trusted marketing partner for growing businesses. We envision a future 
                  where AI and human creativity work together seamlessly, enabling every business to achieve 
                  their full potential and make a meaningful impact in their market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-purple-medium via-purple-dark to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Brainito for their marketing success.
            </p>
            <a href="/diy-marketing-plan">
              <Button variant="gradient" size="lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
