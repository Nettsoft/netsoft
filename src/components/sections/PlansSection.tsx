import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Zap, Tv, Wifi } from "lucide-react";

const plans = [
  {
    name: "Essential",
    speed: "200 Mbps",
    icon: Wifi,
    description: "Perfect for everyday browsing and streaming",
    features: [
      "200 Mbps download speed",
      "Unlimited data",
      "Basic router included",
      "Email support",
    ],
    ideal: "Ideal for 1-2 people",
    highlighted: false,
  },
  {
    name: "Performance",
    speed: "500 Mbps",
    icon: Zap,
    description: "Great for families and remote workers",
    features: [
      "500 Mbps download speed",
      "Unlimited data",
      "Mesh WiFi system",
      "Priority support",
      "100+ HD channels",
    ],
    ideal: "Ideal for 3-5 people",
    highlighted: true,
  },
  {
    name: "Ultimate",
    speed: "1 Gbps",
    icon: Tv,
    description: "Maximum speed for power users and gamers",
    features: [
      "1 Gbps download speed",
      "Unlimited data",
      "Premium mesh WiFi",
      "24/7 priority support",
      "500+ HD & 4K channels",
      "Streaming bundle included",
    ],
    ideal: "Ideal for 5+ people",
    highlighted: false,
  },
];

export default function PlansSection() {
  return (
    <section className="section-padding-sm bg-background">
      <div className="container-wide px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4">
            Plans & Packages
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Find Your{' '}
            <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Flexible options for every household. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Icon & Name */}
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl ${plan.highlighted ? "bg-primary-foreground/20" : "bg-primary/10"} flex items-center justify-center mb-4 sm:mb-6`}>
                <plan.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              <h3 className={`text-lg sm:text-2xl font-bold mb-1 sm:mb-2 ${plan.highlighted ? "" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className={`text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 ${plan.highlighted ? "" : "text-foreground"}`}>
                {plan.speed}
              </div>
              <p className={`mb-4 sm:mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${plan.highlighted ? "bg-primary-foreground/20" : "bg-primary/10"} flex items-center justify-center flex-shrink-0`}>
                      <Check className={`w-2.5 h-2.5 sm:w-3 h-3 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={`text-xs sm:text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Ideal For */}
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.ideal}
              </p>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "secondary" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/coverage">Check Availability</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 px-2"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">
            Need help choosing? Our experts are here for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Button variant="outline" asChild>
              <Link to="/internet">Compare All Plans</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
