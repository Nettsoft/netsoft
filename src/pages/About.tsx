import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Shield, Clock, Award, Target, Heart } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutNetwork from "@/assets/about-network.jpg";
import FinalCTASection from "@/components/sections/FinalCTASection";

const stats = [
  { value: "2025", label: "Startup Launched" },
  { value: "100%", label: "Independent" },
  { value: "24/7", label: "Support" },
  { value: "0", label: "Provider Affiliations" },
];

const values = [
  {
    icon: Target,
    title: "Guidance",
    description: "We assist and guide you through your cable, internet, and streaming options—no sales, just support.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We clearly disclose our fees and are never affiliated with or endorsed by any provider.",
  },
  {
    icon: Clock,
    title: "Support",
    description: "We help facilitate your experience and answer your questions quickly and independently.",
  },
  {
    icon: Heart,
    title: "Startup Spirit",
    description: "Founded in 2025, we’re committed to helping you get the most from your connectivity—always as a third party.",
  },
];

const timeline = [
  { year: "2025", title: "Startup Launched", description: "Net-soft Communications founded as an independent third-party assistance platform." },
  { year: "2025", title: "First Customers Helped", description: "Began assisting users with cable, internet, and streaming questions." },
  { year: "2025", title: "Policy-First Approach", description: "Built our platform to be Google Ads compliant and fully transparent." },
  { year: "2025", title: "Growing Community", description: "Supporting more users every day with independent guidance." },
];

export default function AboutPage() {
  return (
    <PageLayout title="About Net-soft Communications" description="Independent third-party cable, internet, and streaming assistance platform. Launched in 2025. Not an ISP. Not affiliated with or endorsed by any provider.">
      {/* Independent Disclosure */}
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium" role="alert" aria-label="independent disclosure">
        Net-soft Communications is an independent third-party service assistance startup, launched in 2025. We are not an ISP, do not sell provider plans, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. Our service helps guide, support, and facilitate your experience for a separate assistance fee.
      </div>
      {/* Mission Section */}
      <section className="section-padding-sm bg-background">
        <div className="container-wide px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                About Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Independent Service Assistance
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Net-soft Communications is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutTeam}
                alt="Our team collaborating"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-card rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-border">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-foreground">200+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Team Members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-wide px-2 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              What Drives Us <span className="text-gradient">Every Day</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <value.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={aboutNetwork}
                alt="Network operations center"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Our Infrastructure
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Built for <span className="text-gradient">Performance</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Our state-of-the-art network operations center monitors performance 24/7, 
                ensuring you always have the fastest, most reliable connection possible.
              </p>
              <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Redundant fiber backbone across the region",
                  "Real-time network monitoring and optimization",
                  "Automatic failover and load balancing",
                  "Enterprise-grade security protocols",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-card">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              15 Years of <span className="text-gradient">Connecting Communities</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
            
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="card-elevated inline-block">
                      <p className="text-xs sm:text-sm font-medium text-primary mb-0.5 sm:mb-1">{item.year}</p>
                      <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center z-10">
                    <Award className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
