import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, TrendingUp, Target, Users, DollarSign, Quote } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  // Placeholder data - would be fetched based on slug in real implementation
  const caseStudy = {
    projectName: "Leo Hobby",
    industry: "E-commerce / D2C",
    impact: "Scaled from local seller to nationwide D2C brand in 90 days",
    keyResults: ["+340% Revenue", "4.2x ROAS", "-45% CAC"],
    duration: "90 Days",
    services: ["Full Marketing Strategy", "Paid Advertising", "Content Marketing", "SEO"],
  };

  const metrics = [
    { icon: TrendingUp, label: "Revenue Growth", value: "+340%", description: "Year-over-year increase" },
    { icon: Target, label: "ROAS", value: "4.2x", description: "Return on ad spend" },
    { icon: DollarSign, label: "CAC Reduction", value: "-45%", description: "Customer acquisition cost" },
  ];

  const relatedStudies = [
    {
      slug: "shiv-jyoti-eye-hospital",
      projectName: "Shiv Jyoti Eye Hospital",
      impact: "Became the top-ranked eye hospital in local search",
      keyResults: ["+180% New Patients", "Top 3 Google", "+400% Bookings"],
    },
    {
      slug: "techstart-solutions",
      projectName: "TechStart Solutions",
      impact: "Transformed lead generation with AI-powered content strategy",
      keyResults: ["+520% Organic Traffic", "+340% Leads", "-45% CAC"],
    },
    {
      slug: "growthbox-ecommerce",
      projectName: "GrowthBox E-commerce",
      impact: "Built a consistent social media presence that drives sales",
      keyResults: ["+280% Revenue", "+15K Followers", "4.2x ROAS"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-white via-purple-light/50 to-purple-medium">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            <div className="max-w-4xl">
              {/* Industry Badge */}
              <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                {caseStudy.industry}
              </span>

              {/* Project Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {caseStudy.projectName}
              </h1>

              {/* Impact Statement */}
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl">
                {caseStudy.impact}
              </p>

              {/* Key Results */}
              <div className="flex flex-wrap gap-3">
                {caseStudy.keyResults.map((result, idx) => (
                  <span 
                    key={idx}
                    className="inline-block bg-white/90 text-primary text-sm font-bold px-4 py-2 rounded-full shadow-sm"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pt-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-100/80 to-orange-50/60 shadow-lg overflow-hidden">
                {/* Placeholder for featured image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary/40">Case Study Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* The Challenge */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                        <Target className="w-5 h-5 text-red-600" />
                      </span>
                      The Challenge
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The client was struggling to scale their business beyond local markets due to limited marketing expertise and inefficient ad spend.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Their existing marketing efforts were fragmented, with no clear strategy or measurement framework. Customer acquisition costs were high, and they lacked the data infrastructure to make informed decisions about their marketing investments.
                    </p>
                  </div>

                  {/* Our Approach */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </span>
                      Our Approach
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We started with a comprehensive audit of their existing marketing efforts and identified key opportunities for improvement. Our team developed a multi-channel strategy focused on:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">Data-driven audience targeting and segmentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">Optimized paid advertising campaigns across Meta and Google</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">Content strategy aligned with customer journey stages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground">Conversion rate optimization and landing page improvements</span>
                      </li>
                    </ul>
                  </div>

                  {/* The Solution */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-600" />
                      </span>
                      The Solution
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We implemented a comprehensive marketing automation system that allowed the team to scale their efforts efficiently. Our dedicated marketing manager worked closely with their team to ensure seamless execution.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Within the first month, we had established a clear measurement framework and begun optimizing campaigns based on real-time data. By month three, the results spoke for themselves.
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-32 space-y-6">
                    {/* Project Details Card */}
                    <div className="bg-purple-light/30 rounded-2xl p-6">
                      <h3 className="font-bold text-foreground mb-4">Project Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-semibold text-foreground">{caseStudy.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Industry</p>
                          <p className="font-semibold text-foreground">{caseStudy.industry}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Services</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {caseStudy.services.map((service, idx) => (
                              <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-foreground">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white">
                      <h3 className="font-bold mb-2">Want Similar Results?</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Let us create a custom marketing strategy for your business.
                      </p>
                      <Link to="/diy-marketing-plan">
                        <Button variant="gradient" size="sm" className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-purple-light/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
                The Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border/20"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-accent mb-1">{metric.value}</p>
                    <p className="font-semibold text-foreground text-sm mb-1">{metric.label}</p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-light/50 to-purple-medium/30 rounded-3xl p-8 sm:p-12 relative">
                <Quote className="w-12 h-12 text-accent/30 absolute top-8 left-8" />
                <div className="relative z-10 text-center">
                  <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8 italic">
                    "Working with Brainito completely transformed our business. Their data-driven approach and dedicated team helped us achieve results we never thought possible. We went from a local seller to a nationwide brand in just 90 days."
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-lg font-bold text-white">RK</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-foreground">Rahul Kumar</p>
                      <p className="text-sm text-muted-foreground">Founder, Leo Hobby</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-16 bg-white border-t border-border/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">More Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedStudies.map((study, index) => (
                  <Link 
                    key={index} 
                    to={`/case-studies/${study.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-border/20 hover:shadow-lg transition-all"
                  >
                    <div className="h-40 bg-gradient-to-br from-purple-100/80 to-orange-50/60 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary/40 group-hover:text-primary/60 transition-colors">
                        {study.projectName}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {study.projectName}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {study.impact}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.keyResults.map((result, idx) => (
                          <span 
                            key={idx}
                            className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diy-marketing-plan">
                <Button variant="gradient" size="lg">
                  Get Your Marketing Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/hire-marketer">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Hire a Marketer
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
