import { motion } from "framer-motion";
import { Wifi, Tv, Zap, Headphones, Shield, Clock } from "lucide-react";

const features = [
  { icon: Wifi, label: "Fiber Guidance", description: "We help you understand fiber options" },
  { icon: Tv, label: "Channel Assistance", description: "Guidance on HD & 4K streaming" },
  { icon: Zap, label: "Smooth Experience", description: "Facilitating seamless streaming" },
  { icon: Headphones, label: "24/7 Help", description: "Support whenever you need it" },
  { icon: Shield, label: "Privacy Focused", description: "We never request provider passwords" },
  { icon: Clock, label: "Reliable Guidance", description: "Consistent, independent support" },
];

export default function TrustStrip() {
  // Duplicate features for seamless infinite scroll
  const scrollingFeatures = [...features, ...features];
  return (
    <section className="py-2 bg-card border-y border-border overflow-hidden">
      <div className="container-wide px-2 sm:px-4">
        <div className="relative w-full">
          <div
            className="flex gap-4 sm:gap-8 animate-scroll-x"
            style={{
              width: 'max-content',
              animation: 'scroll-x 24s linear infinite',
            }}
          >
            {scrollingFeatures.map((feature, index) => (
              <div
                key={feature.label + index}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:bg-secondary/50 transition-colors group min-w-[180px] sm:min-w-[220px]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground">{feature.label}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          display: flex;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
