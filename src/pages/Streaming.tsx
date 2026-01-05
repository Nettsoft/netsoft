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
    <PageLayout title="Streaming Services" description="All your favorite streaming platforms, bundled and optimized.">
      {/* Hero Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Stream Everything
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Favorite Apps, <span className="text-gradient">One Network</span>
              </h2>
              <p className="text-base xs:text-lg text-muted-foreground mb-6">
                Stream your favorite content without buffering or quality drops. 
                Our network is optimized for all major streaming platforms.
              </p>

              {/* Streaming App Badges */}
              <div className="flex flex-wrap gap-2 xs:gap-3 mb-8">
                {streamingApps.map((app) => (
                  <span
                    key={app.name}
                    className={`${app.color} text-white px-3 py-1.5 xs:px-4 xs:py-2 rounded-full text-xs xs:text-sm font-medium`}
                  >
                    {app.name}
                  </span>
                ))}
              </div>

              <Button variant="hero" asChild className="w-full sm:w-auto">
                <Link to="/coverage">Get Streaming-Ready</Link>
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

      {/* Benefits Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built for <span className="text-gradient">Streaming</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
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

      {/* Smart Home Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full order-2 lg:order-1"
            >
              <img
                src={gallerySmartHome}
                alt="Smart home entertainment"
                className="rounded-2xl shadow-2xl w-full max-w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Connected Living
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Smart Home <span className="text-gradient">Compatible</span>
              </h2>
              <p className="text-base xs:text-lg text-muted-foreground mb-6">
                Control your entertainment with voice commands. Our network supports 
                all smart home ecosystems for a truly connected experience.
              </p>
              <ul className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
                {[
                  "Works with Alexa, Google Home, and Siri",
                  "Smart speakers and displays supported",
                  "Whole-home audio streaming",
                  "Automatic quality optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base text-muted-foreground">
                    <Play className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bandwidth Calculator CTA */}
      <section className="py-12 xs:py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              How Much Speed Do You Need?
            </h2>
            <p className="text-primary-foreground/80 mb-6 xs:mb-8 max-w-2xl mx-auto text-sm xs:text-base">
              With 4K streaming requiring 25 Mbps per stream, households with multiple devices 
              need a robust connection. Our plans scale with your needs.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 xs:gap-4">
              <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-xl px-4 xs:px-6 py-3 xs:py-4 min-w-[120px]">
                <p className="text-primary-foreground/80 text-xs xs:text-sm">HD Streaming</p>
                <p className="text-lg xs:text-2xl font-bold text-primary-foreground">5 Mbps</p>
              </div>
              <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-xl px-4 xs:px-6 py-3 xs:py-4 min-w-[120px]">
                <p className="text-primary-foreground/80 text-xs xs:text-sm">4K Streaming</p>
                <p className="text-lg xs:text-2xl font-bold text-primary-foreground">25 Mbps</p>
              </div>
              <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-xl px-4 xs:px-6 py-3 xs:py-4 min-w-[120px]">
                <p className="text-primary-foreground/80 text-xs xs:text-sm">Gaming + 4K</p>
                <p className="text-lg xs:text-2xl font-bold text-primary-foreground">100+ Mbps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
