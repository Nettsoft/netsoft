import PageLayout from "@/components/PageLayout";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { motion } from "framer-motion";
import { Play, Tv, Smartphone, Laptop, Wifi, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import streamingDevices from "@/assets/streaming-devices.jpg";
import gallerySmartHome from "@/assets/gallery-smart-home.jpg";

const streamingApps = [
  { name: "Netflix", color: "bg-red-600" },
  { name: "Disney+", color: "bg-blue-600" },
  { name: "Prime Video", color: "bg-sky-400" },
  { name: "HBO Max", color: "bg-purple-600" },
  { name: "Hulu", color: "bg-green-500" },
  { name: "Peacock", color: "bg-yellow-500" },
];

const benefits = [
  {
    icon: Wifi,
    title: "Optimized Network",
    description: "Our network prioritizes streaming traffic for buffer-free viewing.",
  },
  {
    icon: Tv,
    title: "Smart TV Ready",
    description: "Works seamlessly with all smart TV brands and streaming devices.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device",
    description: "Stream on phones, tablets, laptops, and TVs simultaneously.",
  },
  {
    icon: Zap,
    title: "Instant Start",
    description: "Videos start instantly with no loading time on our fiber network.",
  },
];

export default function StreamingPage() {
  return (
    <PageLayout title="Streaming Services Guidance" description="Independent guidance on streaming and entertainment service options.">
      {/* Disclaimer Banner */}
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-3 px-2 text-sm font-medium">
        We provide informational guidance only. We are not a streaming service provider.
      </div>

      {/* Understanding Streaming Options */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Streaming Guidance
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Understand Streaming <span className="text-gradient">Options</span>
              </h2>
              <p className="text-base xs:text-lg text-muted-foreground mb-6">
                Learn about different streaming services, what they offer, and how to evaluate which options work best for your viewing preferences and internet needs.
              </p>

              {/* Common Streaming Services (Informational) */}
              <div className="flex flex-wrap gap-2 xs:gap-3 mb-8">
                {[
                  "Netflix™",
                  "Disney+™",
                  "Prime Video®",
                  "HBO Max™",
                  "Hulu®",
                  "Others",
                ].map((app) => (
                  <span
                    key={app}
                    className="bg-card border border-border text-foreground px-3 py-1.5 xs:px-4 xs:py-2 rounded-full text-xs xs:text-sm font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                * Brand names are referenced for informational purposes only. All trademarks belong to their respective owners.
              </p>

              <Button variant="hero" asChild className="w-full sm:w-auto">
                <a href="tel:8444498598">Get Guidance</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src={streamingDevices}
                alt="Multiple streaming devices"
                className="rounded-2xl shadow-2xl w-full max-w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Streaming Considerations */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Key Streaming <span className="text-gradient">Considerations</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Wifi,
                title: "Internet Speed Needs",
                description: "Understanding bandwidth requirements for different quality levels.",
              },
              {
                icon: Tv,
                title: "Device Compatibility",
                description: "Which services work with your TV, phone, and other devices.",
              },
              {
                icon: Smartphone,
                title: "Simultaneous Streams",
                description: "How many devices can stream at once with different services.",
              },
              {
                icon: Zap,
                title: "Content Libraries",
                description: "What type of content each service offers and how to choose.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center flex flex-col h-full"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground flex-1">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet Speed for Streaming */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Understanding Streaming <span className="text-gradient">Bandwidth</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "HD Streaming",
                speed: "5-10 Mbps",
                description: "Good for streaming a single HD video on one device.",
              },
              {
                type: "4K Streaming",
                speed: "25 Mbps",
                description: "Recommended for one 4K stream without interruptions.",
              },
              {
                type: "Multiple Streams",
                speed: "100+ Mbps",
                description: "For households streaming on multiple devices simultaneously.",
              },
            ].map((tier, index) => (
              <motion.div
                key={tier.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{tier.type}</h3>
                <p className="text-2xl font-bold text-gradient mb-3">{tier.speed}</p>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              Streaming <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                q: "How much internet do I need for streaming?",
                a: "It depends on quality and how many streams you want simultaneously. HD needs 5 Mbps, 4K needs 25 Mbps per stream.",
              },
              {
                q: "Should I get a bundled or separate streaming services?",
                a: "Compare costs and content. Some bundled options save money, while separate services give more choice.",
              },
              {
                q: "Can I stream on multiple devices at the same time?",
                a: "Most services allow simultaneous streams, but limits vary. Check each service's specifications.",
              },
              {
                q: "What affects streaming quality?",
                a: "Internet speed, network congestion, device capabilities, and service quality all impact your streaming experience.",
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
                <p className="text-muted-foreground text-sm sm:text-base">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
