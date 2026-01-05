import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, MapPin, Clock, Users, BarChart3, Activity } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    value: 940,
    suffix: " Mbps",
    label: "Average Download Speed",
    description: "Consistently fast across all hours",
  },
  {
    icon: MapPin,
    value: 98,
    suffix: "%",
    label: "Coverage Area",
    description: "Nationwide availability",
  },
  {
    icon: Clock,
    value: 99.9,
    suffix: "%",
    label: "Network Uptime",
    description: "Industry-leading reliability",
  },
  {
    icon: Activity,
    value: 2025,
    suffix: "",
    label: "Startup Launched",
    description: "Independent since 2025",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value % 1 !== 0 ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function DataInsightsSection() {
  return (
    <section className="section-padding-sm data-section-bg">
      <div className="container-wide px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
            Real-Time Insights
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Transparent Performance,{' '}
            <span className="text-gradient">No Hidden Surprises</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Get real-time performance, coverage, and reliability insights. We believe in complete transparency.
          </p>
        </motion.div>

        {/* Main Data Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-accent rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 text-primary-foreground relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-background/20 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <insight.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                    <AnimatedCounter value={insight.value} suffix={insight.suffix} />
                  </div>
                  <div className="text-base sm:text-lg font-medium mb-0.5 sm:mb-1">{insight.label}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/70">{insight.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Live Status Indicator */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-background/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-light"></span>
                </span>
                <span className="text-sm font-medium">Network Status: Operational</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-background/20">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium">Updated: Just now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
