import { motion } from "framer-motion";
import { Home, Building2, Tv, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Home Internet",
    description: "Lightning-fast fiber internet for your household. Stream, game, and work from home with ease.",
    features: ["Up to 1 Gbps speeds", "Whole-home WiFi", "Unlimited data"],
    gradient: "from-primary to-primary-light",
    href: "/internet",
  },
  {
    icon: Building2,
    title: "Business Internet",
    description: "Enterprise-grade connectivity for businesses of all sizes. Keep your team connected and productive.",
    features: ["Dedicated bandwidth", "99.99% uptime SLA", "Priority support"],
    gradient: "from-accent to-accent-light",
    href: "/internet",
  },
  {
    icon: Tv,
    title: "Cable TV Packages",
    description: "Premium entertainment with 500+ channels. Sports, movies, news, and family content all in one.",
    features: ["500+ HD channels", "DVR included", "4K content"],
    gradient: "from-primary-light to-accent",
    href: "/cable-tv",
  },
  {
    icon: Play,
    title: "Streaming Add-Ons",
    description: "Enhance your experience with popular streaming services bundled at a discount.",
    features: ["Netflix integration", "Disney+ ready", "Prime Video"],
    gradient: "from-accent-light to-primary",
    href: "/streaming",
  },
];

// Duplicate services for seamless infinite loop
const duplicatedServices = [...services, ...services];

export default function ServicesSlider() {
  return (
    <section className="section-padding-sm bg-card overflow-hidden">
      <div className="container-wide px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Solutions for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From residential internet to enterprise solutions, find the perfect plan for your connectivity needs.
          </p>
        </motion.div>

        {/* Infinite Loop Slider */}
        <div className="relative">
          <div className="flex animate-infinite-scroll gap-3 sm:gap-6">
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.title}-${index}`}
                className="flex-shrink-0 w-[260px] sm:w-[350px] md:w-[400px] px-1 sm:px-3"
              >
                <div className="card-elevated h-full">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6`}>
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:8444498598">Call Now</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
