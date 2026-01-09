import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "leo-hobby",
      projectName: "Leo Hobby",
      impact: "Scaled from local seller to nationwide D2C brand in 90 days",
      keyResults: ["+340% Revenue", "4.2x ROAS", "-45% CAC"],
      image: "from-purple-100/80 to-orange-50/60"
    },
    {
      id: "shiv-jyoti-eye-hospital",
      projectName: "Shiv Jyoti Eye Hospital",
      impact: "Became the top-ranked eye hospital in local search",
      keyResults: ["+180% New Patients", "Top 3 Google", "+400% Bookings"],
      image: "from-orange-50/60 to-purple-100/80"
    },
    {
      id: "techstart-solutions",
      projectName: "TechStart Solutions",
      impact: "Transformed lead generation with AI-powered content strategy",
      keyResults: ["+520% Organic Traffic", "+340% Leads", "-45% CAC"],
      image: "from-purple-50/80 to-pink-50/60"
    },
    {
      id: "growthbox-ecommerce",
      projectName: "GrowthBox E-commerce",
      impact: "Built a consistent social media presence that drives sales",
      keyResults: ["+280% Revenue", "+15K Followers", "4.2x ROAS"],
      image: "from-amber-50/60 to-purple-100/80"
    },
    {
      id: "financehub",
      projectName: "FinanceHub",
      impact: "Positioned as thought leader in complex B2B fintech space",
      keyResults: ["+250% Enterprise Leads", "+320% Demo Requests", "+85% Conversion"],
      image: "from-purple-100/60 to-rose-50/60"
    },
    {
      id: "greenlife-organics",
      projectName: "GreenLife Organics",
      impact: "Built brand awareness and loyalty in competitive organic market",
      keyResults: ["+200% Brand Mentions", "+45K Email Subscribers", "3.8x ROAS"],
      image: "from-orange-100/60 to-purple-50/80"
    },
    {
      id: "urban-fitness-studio",
      projectName: "Urban Fitness Studio",
      impact: "Filled classes and built a loyal community of fitness enthusiasts",
      keyResults: ["+150% Memberships", "+8K Instagram", "92% Retention"],
      image: "from-purple-50/60 to-amber-50/60"
    },
    {
      id: "cloudtech-saas",
      projectName: "CloudTech SaaS",
      impact: "Reduced churn and increased MRR through targeted campaigns",
      keyResults: ["+180% MRR", "-35% Churn", "+250% Trials"],
      image: "from-rose-50/60 to-purple-100/60"
    },
    {
      id: "artisan-bakery",
      projectName: "Artisan Bakery Co.",
      impact: "Became the go-to bakery in the city through local marketing",
      keyResults: ["+300% Walk-ins", "500+ Reviews", "4.9 Rating"],
      image: "from-purple-100/80 to-orange-100/60"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-white via-purple-light/50 to-purple-medium">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Brainito's Case Studies
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Real results from real businesses. See how Brainito has helped companies like yours achieve remarkable growth.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Link 
                  key={study.id} 
                  to={`/case-studies/${study.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-border/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Case Study Image/Banner */}
                  <div className={`h-48 bg-gradient-to-br ${study.image} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-primary/60 group-hover:text-primary transition-colors">
                      {study.projectName}
                    </span>
                  </div>
                  <div className="p-6">
                    {/* Project Name */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.projectName}
                    </h3>
                    
                    {/* Impact - 1 line */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {study.impact}
                    </p>
                    
                    {/* Key Results - 3 */}
                    <div className="flex flex-wrap gap-2">
                      {study.keyResults.map((result, idx) => (
                        <span 
                          key={idx}
                          className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-purple-medium via-purple-dark to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their marketing with Brainito.
            </p>
            <a href="/diy-marketing-plan">
              <Button variant="gradient" size="lg">
                Get Your Marketing Plan <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;