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
    <PageLayout title="Internet Services Guidance" description="Independent third-party guidance on internet, broadband, and Wi-Fi service options.">
      {/* Disclaimer Banner */}
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-3 px-2 text-sm font-medium">
        We provide informational guidance only. We are not an ISP and do not sell internet services directly.
      </div>

      {/* What to Look For in Internet Services */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Internet Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Understand Internet <span className="text-gradient">Service Options</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                title: "Speed Considerations",
                description: "Understanding download/upload speeds and what they mean for your needs.",
              },
              {
                icon: Shield,
                title: "Data Policies",
                description: "Learn about data caps, unlimited plans, and how to evaluate what's right.",
              },
              {
                icon: Home,
                title: "Connection Types",
                description: "Fiber, cable, DSL, and satellite options explained in simple terms.",
              },
              {
                icon: Video,
                title: "Service Features",
                description: "Compare WiFi quality, equipment, and customer support options.",
              },
            ].map((feature, index) => (
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

      {/* Common Questions Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Common Questions About <span className="text-gradient">Internet Services</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                q: "How much internet speed do I need?",
                a: "It depends on your usage. Basic browsing needs 5-10 Mbps, streaming typically needs 25+ Mbps, and gaming or remote work often benefits from 100+ Mbps.",
              },
              {
                q: "What's the difference between download and upload speeds?",
                a: "Download speed is how fast data comes to you, while upload speed is how fast you send data out. Both matter depending on your activities.",
              },
              {
                q: "Should I get a data plan with or without a cap?",
                a: "Unlimited plans offer peace of mind if you stream a lot. Capped plans may work if your usage is moderate. Compare what's available in your area.",
              },
              {
                q: "How do I know which internet service is right for me?",
                a: "Consider available options in your area, your speed needs, budget, and contract terms. We can help you understand these options.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PlansSection />
      <FinalCTASection />
    </PageLayout>
  );
}
