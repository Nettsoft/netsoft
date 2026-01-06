import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Gift, ArrowRight } from "lucide-react";

export default function BannerSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-light to-accent p-8 md:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                  Limited Time Offer
                </h3>
                <p className="text-primary-foreground/80">
                  Get 50% off your first 3 months + free installation
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <Gift className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">Free Router Upgrade</span>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="group shadow-lg"
                asChild
              >
                <a href="tel:8444498598">
                  Call Now: (844) 449-8598
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
