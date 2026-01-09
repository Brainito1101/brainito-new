import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the AI audit really free?",
    answer: "Yes, 100% free! Our AI analyzes your website and provides a comprehensive audit with actionable insights. No credit card required, no hidden fees. You only pay when you're ready to upgrade to our DIY Marketing Plan or hire a dedicated marketer.",
  },
  {
    question: "How fast will I get my marketing plan?",
    answer: "Your personalized marketing audit is delivered instantly — within 30 seconds of submitting your website URL. The full DIY Marketing Plan with your 30-day execution roadmap is available immediately upon upgrading.",
  },
  {
    question: "What's inside the DIY Marketing Plan?",
    answer: "You get a complete 30-day marketing strategy tailored to your business, including: content calendar, campaign templates, channel recommendations, target audience insights, competitive analysis, and step-by-step execution guides. Everything you need to run marketing like a pro.",
  },
  {
    question: "How does the marketer hiring work?",
    answer: "When you choose 'Hire a Marketer', we match you with a dedicated marketing professional based on your industry and goals. They'll handle execution, reporting, and optimization — all while keeping you in the loop. Think of it as your own marketing department, without the overhead.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely! All our plans are month-to-month with no long-term commitments. You can upgrade, downgrade, or cancel anytime from your dashboard. We believe in earning your business every month.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Brainito
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
  );
};

export default FAQSection;
