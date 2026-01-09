import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Free AI Plan",
    price: "$0",
    period: "",
    description: "Perfect for exploring Brainito",
    features: [
      "Website audit",
      "Basic strategy insights",
      "AI-powered recommendations",
      "Limited access to features",
    ],
    cta: "Start Free",
    ctaLink: "/",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "DIY Marketing Plan",
    price: "$99",
    period: "/month",
    description: "For teams ready to execute",
    features: [
      "Full marketing strategy",
      "Templates & content calendar",
      "Execution roadmap",
      "30-day action plan",
      "Competitor analysis",
      "Budget projections",
    ],
    cta: "Get Started",
    ctaLink: "/diy-marketing-plan",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Hire a Marketer",
    price: "$2,999",
    period: "/month",
    description: "Done-for-you marketing",
    features: [
      "Dedicated marketing manager",
      "Full execution & management",
      "Weekly reporting & insights",
      "Strategy optimization",
      "Priority support",
      "Monthly strategy calls",
    ],
    cta: "Hire Now",
    ctaLink: "/hire-marketer",
    variant: "accent" as const,
    popular: false,
  },
  {
    name: "Hire a Team",
    price: "Custom",
    period: "",
    description: "Enterprise marketing team",
    features: [
      "Full marketing team",
      "Multiple specialists",
      "Custom strategy & execution",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    variant: "outline" as const,
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the Free AI Plan?",
    answer: "The Free AI Plan includes a basic website audit, AI-powered marketing insights, and limited access to our strategy tools. It's perfect for exploring what Brainito can do for your business before committing to a paid plan.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change will take effect at the start of your next billing cycle.",
  },
  {
    question: "What's the difference between DIY Marketing Plan and Hire a Marketer?",
    answer: "The DIY Marketing Plan provides you with a complete marketing strategy, templates, and roadmap that you execute yourself. Hire a Marketer gives you a dedicated marketing professional who handles everything for you – from strategy to execution.",
  },
  {
    question: "How does billing work?",
    answer: "All paid plans are billed monthly. You can cancel anytime, and your access will continue until the end of your current billing period. We accept all major credit cards and offer invoicing for enterprise clients.",
  },
  {
    question: "What if I need a custom solution?",
    answer: "Our 'Hire a Team' option is designed for businesses that need a comprehensive marketing department. Contact our sales team to discuss your specific needs and we'll create a custom package tailored to your goals.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with our service, contact us within 14 days of your purchase for a full refund. See our Refund Policy for more details.",
  },
  {
    question: "How quickly can I get started?",
    answer: "You can start using the Free AI Plan immediately after signing up. For DIY Marketing Plan, you'll receive your complete strategy within 48 hours. Hire a Marketer clients are matched with their dedicated marketer within 3-5 business days.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-white via-purple-light/50 to-purple-medium">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Choose the Plan That's Right for You
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                No hidden fees, no complicated tiers. Start free and scale as you grow. 
                Every plan includes our AI-powered marketing insights.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-24 bg-gradient-to-b from-purple-medium via-purple-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-large ${
                    plan.popular 
                      ? "border-accent shadow-glow scale-105" 
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg-cta rounded-full">
                      <span className="text-sm font-semibold text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={plan.ctaLink}>
                    <Button variant={plan.variant} size="lg" className="w-full">
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-purple-light/30 rounded-xl border border-border/20 px-6"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary text-left py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-purple-medium via-purple-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses already growing with Brainito. 
                Start free today and see the difference AI-powered marketing can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="gradient" size="xl" className="group">
                    Get Started for FREE
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
