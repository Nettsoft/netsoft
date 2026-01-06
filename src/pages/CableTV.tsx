import PageLayout from "@/components/PageLayout";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { motion } from "framer-motion";
import { Tv, Film, Trophy, Baby, Music, Globe, PlayCircle, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import galleryLivingRoom from "@/assets/gallery-living-room.jpg";

const channels = [
  { icon: Tv, name: "Entertainment", count: "150+" },
  { icon: Film, name: "Movies & Series", count: "80+" },
  { icon: Trophy, name: "Sports", count: "60+" },
  { icon: Baby, name: "Kids", count: "40+" },
  { icon: Music, name: "Music", count: "30+" },
  { icon: Globe, name: "International", count: "50+" },
];

const features = [
  {
    icon: Monitor,
    title: "4K Ultra HD",
    description: "Crystal clear picture quality on supported channels and content.",
  },
  {
    icon: PlayCircle,
    title: "Cloud DVR",
    description: "Record up to 500 hours of your favorite shows and watch anytime.",
  },
  {
    icon: Smartphone,
    title: "Watch Anywhere",
    description: "Stream live TV on your phone, tablet, or laptop when you're away.",
  },
];

const packages = [
  {
    name: "Basic",
    channels: "100+",
    features: ["Local channels", "News networks", "Basic entertainment"],
  },
  {
    name: "Family",
    channels: "250+",
    features: ["All Basic channels", "Kids programming", "Movie channels"],
  },
  {
    name: "Premium",
    channels: "500+",
    features: ["All Family channels", "Sports packages", "Premium movies", "International"],
  },
];

export default function CableTVPage() {
  return (
    <PageLayout title="Cable TV Services" description="500+ HD and 4K channels for the whole family.">
      {/* Channel Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Channel Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Something for <span className="text-gradient">Everyone</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{channel.name}</h3>
                <p className="text-2xl font-bold text-gradient">{channel.count} Channels</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Room Image Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src={galleryLivingRoom}
                alt="Modern living room entertainment"
                className="rounded-2xl shadow-2xl w-full max-w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Premium Experience
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Entertainment That <span className="text-gradient">Delivers</span>
              </h2>
              <p className="text-base xs:text-lg text-muted-foreground mb-8">
                From live sports to blockbuster movies, kids shows to international programming — 
                experience TV the way it should be: crystal clear, always available, and packed with choice.
              </p>
              <Button variant="hero" asChild className="w-full sm:w-auto">
                <Link to="/coverage">View TV Packages</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Features You'll <span className="text-gradient">Love</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated text-center flex flex-col h-full"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground flex-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Choose Your <span className="text-gradient">Package</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-elevated flex flex-col h-full ${index === 2 ? "ring-2 ring-primary" : ""}`}
              >
                {index === 2 && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-3xl sm:text-4xl font-bold text-gradient mb-4 sm:mb-6">{pkg.channels}</p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={index === 2 ? "hero" : "outline"} 
                  className="w-full mt-auto"
                  asChild
                >
                  <a href="tel:8444498598">Call Now: (844) 449-8598</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
