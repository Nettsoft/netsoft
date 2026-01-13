import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

const whatWeDo = [
  "Understand internet and broadband service options",
  "Get practical guidance on common connectivity issues",
  "Learn how to navigate service provider processes",
  "Receive general informational support related to cable TV services",
];

const whatWeDont = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any brand",
  "We are not affiliated, authorized, or endorsed by any telecom or cable company",
  "We do not sell internet or cable subscriptions",
  "We do not provide guaranteed technical fixes",
  "All mentions of providers are strictly for informational purposes only",
];

export default function PlansSection() {
  return (
    <section className="section-padding-sm bg-background">
      <div className="container-wide px-2 sm:px-4">
        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              How We Help You
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Net-soft Communications helps users by providing informational support and guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-muted-foreground mt-6 sm:mt-8 max-w-2xl mx-auto">
            Our role is limited to independent guidance and assistance only.
          </p>
        </motion.div>

        {/* What We Do NOT Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4">
              What We Do NOT Do
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              To Avoid Confusion
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Please note what we are not and do not do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {whatWeDont.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-2"
        >
          <p className="text-base sm:text-lg text-foreground font-semibold mb-4">
            Ready to get independent guidance?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:8444498598">Talk to an Advisor</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:8444498598">Call Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
