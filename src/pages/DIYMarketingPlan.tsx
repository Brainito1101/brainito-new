import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ArrowRight, 
  Target, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Map, 
  ListChecks, 
  Calculator, 
  ClipboardList,
  Globe,
  Check,
  Sparkles,
  Zap,
  Heart,
  Star,
  Quote,
  MessageCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import feature images (using existing homepage assets as placeholders)
import featureDiyPlan from "@/assets/feature-diy-plan.png";
import featureActionBoard from "@/assets/feature-action-board.png";
import featureHireManager from "@/assets/feature-hire-manager.png";
import featureReporting from "@/assets/feature-reporting.png";
import dashboardPreview from "@/assets/dashboard-preview.png";

const modules = [
  {
    number: "01",
    icon: <Globe className="w-6 h-6" />,
    title: "Website Analysis",
    description: "Get a complete breakdown of your website's performance, trust score, and visibility metrics. Understand your digital presence at a glance.",
    image: dashboardPreview,
  },
  {
    number: "02",
    icon: <Target className="w-6 h-6" />,
    title: "Competitor Analysis",
    description: "Discover what your competitors are doing right and where they're falling short. Get actionable insights to outperform them.",
    image: featureDiyPlan,
  },
  {
    number: "03",
    icon: <Users className="w-6 h-6" />,
    title: "Buyer Persona",
    description: "Detailed customer profiles with demographics, goals, and pain points. Know exactly who you're marketing to.",
    image: featureHireManager,
  },
  {
    number: "04",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Demand Insights",
    description: "Keyword opportunities, search volumes, and content ideas across Google, YouTube, Instagram, and Facebook.",
    image: featureReporting,
  },
  {
    number: "05",
    icon: <Map className="w-6 h-6" />,
    title: "Customer Journey",
    description: "Map every touchpoint from awareness to purchase. Understand how customers find and choose you.",
    image: featureActionBoard,
  },
  {
    number: "06",
    icon: <ListChecks className="w-6 h-6" />,
    title: "Marketing Plan",
    description: "Phase-by-phase action plan with timelines, budgets, key objectives, and expected outcomes.",
    image: featureDiyPlan,
  },
  {
    number: "07",
    icon: <Calculator className="w-6 h-6" />,
    title: "Budget Projections",
    description: "12-month budget forecasts with traffic, leads, and ROI projections. Know your numbers before you spend.",
    image: featureReporting,
  },
  {
    number: "08",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Action Board",
    description: "Track and manage all marketing tasks in one place. Stay organized with due dates, assignments, and progress tracking.",
    image: featureActionBoard,
  },
  {
    number: "09",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Monthly Reports",
    description: "Automated performance reports with key metrics, insights, and recommendations for continuous improvement.",
    image: featureReporting,
  },
];

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, TechStart",
    rating: 5,
    review: "The DIY Marketing Plan gave us clarity we never had. The buyer personas alone were worth it — we finally understand our customers.",
    initials: "SM",
    color: "from-primary to-purple-medium",
  },
  {
    name: "Michael Chen",
    role: "CEO, GrowthLabs",
    rating: 5,
    review: "I was skeptical about AI-generated plans, but this is different. It's based on real data and actually makes sense for our business.",
    initials: "MC",
    color: "from-accent to-orange-400",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Co",
    rating: 5,
    review: "The action board keeps our team aligned. No more scattered tasks — everything is in one place with clear deadlines.",
    initials: "ER",
    color: "from-purple-medium to-primary",
  },
  {
    name: "James Thompson",
    role: "Owner, Local Eats",
    rating: 5,
    review: "Budget projections helped us plan our entire year. We knew exactly what to expect before spending a single dollar.",
    initials: "JT",
    color: "from-orange-400 to-accent",
  },
];

const faqs = [
  {
    question: "What is DIY Marketing Plan?",
    answer: "DIY Marketing Plan is an AI-powered marketing strategy system that generates a complete, customized marketing plan based on your website. It includes competitor analysis, buyer personas, customer journey maps, budget projections, and a month-by-month action plan.",
  },
  {
    question: "What do I need to prepare for DIY Marketing Plan?",
    answer: "Just your website URL! Our AI analyzes your site, competitors, and market to generate everything you need. No prep work, no lengthy questionnaires — just paste your URL and get your plan.",
  },
  {
    question: "How long does it take to build DIY Marketing Plan?",
    answer: "Your complete marketing plan is generated in under 5 minutes. The AI analyzes your website, researches your market, and creates a comprehensive strategy instantly.",
  },
  {
    question: "What will I get in DIY Marketing Plan?",
    answer: "You get 9 complete modules: Website Analysis, Competitor Analysis, Buyer Personas, Demand Insights, Customer Journey Maps, Marketing Plan, Budget Projections, Action Board, and Monthly Reports. Everything you need to execute marketing like a pro.",
  },
  {
    question: "What if I don't understand something?",
    answer: "Every section includes clear explanations and actionable steps. Plus, you can book a consultation call with our marketing experts to walk through your plan and get personalized guidance.",
  },
  {
    question: "How do I book a consultation?",
    answer: "Once you generate your plan, you'll see an option to book a consultation directly from your dashboard. Our experts will review your plan with you and answer any questions.",
  },
  {
    question: "Do you offer execution?",
    answer: "Yes! If you want hands-off marketing, our 'Done For You' plan includes a dedicated marketing manager who executes everything for you. They handle strategy, content, campaigns, and reporting while you focus on your business.",
  },
];

const plans = [
  {
    name: "Free AI Plan",
    price: "$0",
    period: "",
    description: "Preview your strategy",
    features: [
      "Website analysis",
      "High-level insights",
      "AI-powered audit",
    ],
    cta: "Start Free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "DIY Marketing Plan",
    price: "$99",
    period: "/month",
    description: "Complete marketing system",
    features: [
      "Everything in Free",
      "Buyer personas",
      "Customer journey maps",
      "Budget projections",
      "Monthly action board",
      "Competitor analysis",
    ],
    cta: "Get Started",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Done For You",
    price: "$2,999",
    period: "/month",
    description: "Full execution included",
    features: [
      "Everything in DIY",
      "Dedicated marketer",
      "Monthly execution",
      "Weekly reporting",
      "Strategy optimization",
    ],
    cta: "Contact Sales",
    variant: "accent" as const,
    popular: false,
  },
];

const DIYMarketingPlan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1: Hero */}
      <section className="relative flex flex-col pt-40 sm:pt-52 pb-24 sm:pb-32 px-4 overflow-visible bg-gradient-to-b from-white via-purple-light/50 to-purple-medium">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 bg-primary/15 rounded-full blur-[80px] sm:blur-[100px] animate-float" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-purple-medium/20 rounded-full blur-[80px] sm:blur-[100px] animate-float delay-500" />
          <div className="absolute top-1/3 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] animate-pulse-glow" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[75px] font-black tracking-tight mb-4 sm:mb-5 animate-fade-up leading-tight">
              <span className="royal-gradient-text">Your Complete DIY Marketing Plan</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-foreground font-semibold max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-up delay-100 leading-relaxed">
              A clear, step-by-step strategy that turns market understanding into focused, executable action.
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
                  Create My Plan
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              How It Works?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A process built from hands-on work with thousands of founders.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px border-t-2 border-dashed border-border/50" />
              
              {[
                { 
                  num: "Step 1", 
                  title: "Enter URL", 
                  desc: "Paste your website address", 
                  icon: <Globe className="w-6 h-6" /> 
                },
                { 
                  num: "Step 2", 
                  title: "Generate", 
                  desc: "Our engine builds your strategy", 
                  icon: <Zap className="w-6 h-6" /> 
                },
                { 
                  num: "Step 3", 
                  title: "Consult", 
                  desc: "Connect with Expert to make use of plan at best", 
                  icon: <MessageCircle className="w-6 h-6" /> 
                },
              ].map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-xl shadow-primary/10 border border-border/30 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-300">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-accent mb-2 tracking-wider uppercase">{step.num}</div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What DIY Marketing Includes */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-purple-medium via-purple-dark to-primary border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              What DIY Marketing Plan Includes
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to understand your market and execute with clarity.
            </p>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                {/* Header with number and title */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {module.icon}
                    </span>
                    <span className="text-sm font-mono text-muted-foreground">
                      {module.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {module.description}
                  </p>
                </div>

                {/* Product Screenshot */}
                <div className="px-6 pb-6">
                  <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm group-hover:shadow-md transition-shadow">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-40 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore Features Button */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="group shadow-lg shadow-primary/25">
              Explore Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Reviews */}
      <section className="py-20 sm:py-28 px-4 bg-white border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              What People Say
            </h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl border border-border/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-10 h-10 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-accent fill-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm sm:text-base relative z-10">
                  "{review.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-semibold text-sm shadow-md`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-purple-medium via-purple-dark to-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              No hidden fees, no complications. Choose what works for you.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-large ${
                  plan.popular 
                    ? "border-primary shadow-glow scale-105 md:scale-110" 
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg-cta rounded-full">
                    <span className="text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section id="faqs" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about DIY Marketing Plan
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-soft transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA - Ready to Start */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-purple-medium via-purple-dark to-primary">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Start?
            </h2>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Get clarity, a clear roadmap, and set the right direction for your marketing.
            </p>

            {/* CTA Button */}
            <Button 
              size="xl" 
              className="bg-accent hover:bg-accent/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Create My Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DIYMarketingPlan;
