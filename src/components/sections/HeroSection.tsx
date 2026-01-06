import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Wifi, Tv, Gauge, Shield, Zap, Phone } from "lucide-react";
import heroRouter from "@/assets/hero-router.png";
import heroTv from "@/assets/hero-tv.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-24">
      {/* Independent Disclosure (Above the Fold) */}
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-3 px-2 text-sm font-medium" role="alert" aria-label="independent disclosure">
        Net-soft Communications is an independent third-party cable, internet, and streaming assistance platform, launched in 2025. We are not an ISP, do not sell provider plans, and are not affiliated with or endorsed by any provider. Our service helps guide, support, and facilitate your experience for a separate assistance fee.
      </div>
      <div className="container-wide section-padding-sm pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Startup Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 border border-border"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Startup launched 2025 &mdash; 100% independent
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Independent. Helpful.</span>
              <br className="hidden sm:block" />
              <span className="text-gradient">Here for You.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg">
              Net-soft Communications is a third-party assistance platform for cable, internet, and streaming. We guide, support, and facilitate your experience&mdash;never selling plans, never affiliated with providers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
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

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <div>
                <div className="text-3xl font-bold text-foreground">1 Gbps</div>
                <div className="text-sm text-muted-foreground">Max Speed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">HD Channels</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 w-full flex justify-center"
          >
            <div className="relative">
              {/* Main TV Image */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={heroTv}
                  alt="Smart TV with streaming content"
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg mx-auto rounded-2xl shadow-xl object-cover"
                />
              </motion.div>

              {/* Router Image */}
              <motion.div
                className="absolute -bottom-8 -left-8 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img
                  src={heroRouter}
                  alt="Modern WiFi router"
                  className="w-24 sm:w-32 md:w-36 lg:w-48 rounded-xl shadow-lg object-cover"
                />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute top-4 -right-4 lg:right-0 z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Speed</div>
                      <div className="text-lg font-bold text-foreground">940 Mbps</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-24 -right-4 lg:right-8 z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Tv className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Channels</div>
                      <div className="text-lg font-bold text-foreground">500+ HD</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
