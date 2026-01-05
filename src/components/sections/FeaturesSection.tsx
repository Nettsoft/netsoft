import { motion } from "framer-motion";
import { Zap, Tv, Wifi, Gamepad2, Download, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Internet Guidance",
    description: "We help you understand internet speed options and what fits your needs best.",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Tv,
    title: "Cable & Streaming Support",
    description: "Get help comparing HD, 4K, and streaming choices—no sales, just support.",
    gradient: "from-accent to-accent-light",
  },
  {
    icon: Wifi,
    title: "WiFi Assistance",
    description: "Facilitate better home WiFi by guiding you through setup and troubleshooting.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Gamepad2,
    title: "Gaming Experience Help",
    description: "Advice on optimizing your connection for gaming—independent, not provider-based.",
    gradient: "from-accent-light to-primary",
  },
  {
    icon: Download,
    title: "No Data Cap Confusion",
    description: "We clarify data policies and help you understand your options—never selling plans.",
    gradient: "from-primary-light to-accent",
  },
  {
    icon: Globe,
    title: "Streaming Platform Guidance",
    description: "Support for navigating Netflix™, Disney+™, and more. No provider affiliation.",
    gradient: "from-accent to-primary-light",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding-sm bg-background">
      <div className="container-wide px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4">
            How We Help
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Independent Guidance, <span className="text-gradient">No Sales. No Affiliation.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Net-soft Communications is here to assist, guide, and support you with cable, internet, and streaming&mdash;always as a third party, never as a provider.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card-elevated h-full relative overflow-hidden flex flex-col justify-between">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
