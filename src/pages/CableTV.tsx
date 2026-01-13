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
    <PageLayout title="Cable TV Services Guidance" description="Independent third-party guidance on cable TV and streaming service options.">
      {/* Disclaimer Banner */}
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-3 px-2 text-sm font-medium">
        We provide informational guidance only. We are not a cable or streaming provider.
      </div>

      {/* Understanding Cable TV Options */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Cable TV Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Understand Cable TV <span className="text-gradient">Service Options</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn what's available in cable TV services and how to evaluate options that work for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Tv,
                name: "Entertainment Channels",
                description: "General entertainment, news, and lifestyle programming.",
              },
              {
                icon: Film,
                name: "Movies & Series",
                description: "Understanding premium movie channels and on-demand content.",
              },
              {
                icon: Trophy,
                name: "Sports Programming",
                description: "Evaluating sports packages and coverage options.",
              },
              {
                icon: Baby,
                name: "Family Content",
                description: "Kids and family-friendly programming considerations.",
              },
              {
                icon: Music,
                name: "Music Channels",
                description: "Music programming and audio options available.",
              },
              {
                icon: Globe,
                name: "International Options",
                description: "International programming and language options.",
              },
            ].map((channel, index) => (
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
                <p className="text-muted-foreground text-sm">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Cable TV Questions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions About <span className="text-gradient">Cable TV</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                q: "What's the difference between cable TV and streaming?",
                a: "Cable TV typically offers live channels and traditional programming, while streaming provides on-demand content. Some services now offer both.",
              },
              {
                q: "How do I choose between different channel packages?",
                a: "Consider what you watch most. Do you need sports? Movies? Kids content? Compare available packages in your area that fit your preferences.",
              },
              {
                q: "What are typical channel counts and what do they include?",
                a: "Basic packages may include 50-100 channels, while premium packages can include 300+. Higher counts typically add specialty and premium content.",
              },
              {
                q: "What features should I look for?",
                a: "Consider DVR capability, on-demand content, multi-room viewing, and mobile access. These features vary by service.",
              },
              {
                q: "How do I evaluate the overall value?",
                a: "Compare total cost, available channels for your interests, features, and customer service. What matters most depends on your needs.",
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

      {/* Streaming Comparison */}
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 xs:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Understanding Your <span className="text-gradient">Options</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Traditional Cable",
                description: "Live channels, scheduled programming, usually includes DVR.",
              },
              {
                title: "Streaming Services",
                description: "On-demand content, watch when you want, often subscription-based.",
              },
              {
                title: "Hybrid Approaches",
                description: "Combined cable and streaming options for comprehensive entertainment.",
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </PageLayout>
  );
}
