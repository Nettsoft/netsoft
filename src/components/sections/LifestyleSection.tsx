import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import familyImage from "@/assets/family-watching-tv.jpg";

const benefits = [
  "Ultra-fast fiber internet up to 1 Gbps",
  "500+ HD and 4K channels",
  "Unlimited streaming & downloads",
  "Free professional installation",
  "No annual contracts required",
  "24/7 dedicated customer support",
];

export default function LifestyleSection() {
  return (
    <section className="section-padding-sm bg-background overflow-hidden">
      <div className="container-wide px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <img
                src={familyImage}
                alt="Family enjoying entertainment at home"
                className="w-full h-56 sm:h-72 md:h-80 lg:h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              For Every Lifestyle
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Internet & TV That{' '}
              <span className="text-gradient">Adapts to Your Life</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Whether you're streaming the latest shows, gaming with friends, or working from home, our services are designed to keep up with your connected lifestyle.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/internet">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
