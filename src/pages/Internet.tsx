import PageLayout from "@/components/PageLayout";
import PlansSection from "@/components/sections/PlansSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Shield, Home, Building2, Gamepad2, Video } from "lucide-react";
import internetInstallation from "@/assets/internet-installation.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";

const internetFeatures = [
  {
    icon: Home,
    title: "Home Internet",
    description: "Perfect for streaming, gaming, and working from home with speeds up to 1 Gbps.",
  },
  {
    icon: Building2,
    title: "Business Internet",
    description: "Enterprise-grade connectivity with dedicated bandwidth and SLA guarantees.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Optimized",
    description: "Ultra-low latency connections designed for competitive online gaming.",
  },
  {
    icon: Video,
    title: "4K Streaming",
    description: "Stream multiple 4K videos simultaneously without buffering.",
  },
];

const speedTiers = [
  { speed: "100", label: "Mbps", description: "Essential", ideal: "Basic browsing & email" },
  { speed: "300", label: "Mbps", description: "Standard", ideal: "HD streaming & remote work" },
  { speed: "500", label: "Mbps", description: "Premium", ideal: "4K streaming & gaming" },
  { speed: "1000", label: "Mbps", description: "Ultra", ideal: "Power users & large households" },
];

export default function InternetPage() {
  return (
    <PageLayout title="Internet Services" description="Lightning-fast fiber internet for your home and business.">
      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Why Our Internet
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Blazing Fast. <span className="text-gradient">Always Reliable.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {internetFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Tiers */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Choose Your <span className="text-gradient">Speed</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {speedTiers.map((tier, index) => (
              <motion.div
                key={tier.speed}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center group"
              >
                <div className="text-2xl sm:text-5xl font-bold text-gradient mb-0.5 sm:mb-1">{tier.speed}</div>
                <div className="text-xs sm:text-base text-muted-foreground mb-2 sm:mb-4">{tier.label}</div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{tier.description}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{tier.ideal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Image Section */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={internetInstallation}
                alt="Professional fiber installation"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Professional Installation
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Expert Setup, <span className="text-gradient">Zero Hassle</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Our certified technicians handle everything from running fiber to your home to 
                optimizing your WiFi coverage. We don't leave until you're connected and satisfied.
              </p>
              <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Free professional installation",
                  "Same-day setup available",
                  "Whole-home WiFi optimization",
                  "Free router included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" asChild>
                <Link to="/coverage">Schedule Installation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work From Home Section */}
      <section className="section-padding bg-card">
        <div className="container-wide px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Work From Home
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Stay Productive, <span className="text-gradient">Anywhere</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Video calls, file uploads, cloud applications — our network handles it all without breaking a sweat.
              </p>
              <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Crystal-clear video conferencing",
                  "Fast file uploads and downloads",
                  "Stable VPN connections",
                  "Multiple devices, no slowdown",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src={galleryOffice}
                alt="Modern home office setup"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <PlansSection />
      <FinalCTASection />
    </PageLayout>
  );
}
