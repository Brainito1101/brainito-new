import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free AI Plan",
    price: "$0",
    period: "",
    description: "Perfect for exploring Brainito",
    features: [
      "Website audit",
      "Basic strategy",
      "AI-powered insights",
    ],
    cta: "Start Free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "DIY Marketing Plan",
    price: "$99",
    period: "/month",
    description: "For teams ready to execute",
    features: [
      "Full strategy",
      "Templates & calendar",
      "Execution roadmap",
      "30-day action plan",
    ],
    cta: "Get Started",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Hire a Marketer",
    price: "$2999",
    period: "/month",
    description: "Done-for-you marketing",
    features: [
      "Dedicated marketer",
      "Full execution",
      "Weekly reporting",
      "Strategy optimization",
      "Priority support",
    ],
    cta: "Hire Now",
    variant: "accent" as const,
    popular: false,
  },
];

const PricingSection = () => {
  return (
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
                    <span className="text-foreground">{feature}</span>
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
  );
};

export default PricingSection;
