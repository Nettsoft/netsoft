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
            Your Connection{' '}
            <span className="text-gradient">Starts Here</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto">
            Ready to experience reliable, high-speed connectivity? Check availability in your area and get started with Net-soft Communications today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:8444498598">
                <Phone className="w-5 h-5" />
                Call Now: (844) 449-8598
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:8444498598">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              No annual contract required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Free professional installation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              30-day money-back guarantee
            </div>
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
