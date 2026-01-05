import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Network, HeadphonesIcon, Wrench, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Network,
    title: "Reliable Network Infrastructure",
    content: "Our state-of-the-art fiber network is built for reliability. With redundant systems and 24/7 monitoring, we ensure your connection stays strong. Our network is designed to handle peak traffic without compromising on speed or stability.",
  },
  {
    icon: HeadphonesIcon,
    title: "Transparent & Honest Support",
    content: "No runaround, no hidden fees, no frustration. Our support team is trained to solve problems quickly and honestly. You'll always know what's happening with your service, and we'll never surprise you with unexpected charges.",
  },
  {
    icon: Wrench,
    title: "Easy Setup & Installation",
    content: "Professional installation is always free. Our certified technicians will have you up and running in no time. Plus, our self-setup option lets tech-savvy customers get connected in minutes with our plug-and-play equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Connection, Always",
    content: "Your security is our priority. Every connection is protected with enterprise-grade encryption. Our included security suite protects against malware, phishing, and other online threats, keeping your family safe online.",
  },
];

export default function WhyChooseUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding-sm data-section-bg">
      <div className="container-wide px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Why Net-soft Communications
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              The Net-soft Communications{' '}
              <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              We're not just another internet provider. We're committed to delivering an exceptional experience from installation to everyday use.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-0.5 sm:mb-1">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                <div className="text-xl sm:text-3xl font-bold text-accent mb-0.5 sm:mb-1">4.8★</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center gap-2 sm:gap-4 p-4 sm:p-6 text-left hover:bg-secondary/30 transition-colors"
                >
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    <reason.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-lg font-semibold text-foreground">
                      {reason.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-16 sm:pl-[88px]">
                        <p className="text-xs sm:text-base text-muted-foreground">
                          {reason.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
