import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="section-padding-sm bg-background relative overflow-hidden">
      <div className="container-wide px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Get Independent Service Guidance
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto">
            Ready to speak with a third-party internet advisor? Contact Net-soft Communications for independent, transparent guidance on cable, internet, and streaming services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:8444498598">
                <Phone className="w-5 h-5" />
                Talk to an Advisor
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:8444498598">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Compliance Statement */}
          <div className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            <p className="font-semibold mb-2">
              Net-soft Communications is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
}
