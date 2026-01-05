import { motion } from "framer-motion";
import galleryLivingRoom from "@/assets/gallery-living-room.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryGaming from "@/assets/gallery-gaming.jpg";
import gallerySmartHome from "@/assets/gallery-smart-home.jpg";

const galleryItems = [
  {
    image: galleryLivingRoom,
    title: "Entertainment Hub",
    description: "4K streaming for the whole family",
  },
  {
    image: galleryOffice,
    title: "Work From Home",
    description: "Blazing fast connections for productivity",
  },
  {
    image: galleryGaming,
    title: "Gaming Paradise",
    description: "Ultra-low latency for competitive gaming",
  },
  {
    image: gallerySmartHome,
    title: "Connected Living",
    description: "Smart home devices, seamlessly integrated",
  },
];

export default function GallerySection() {
  return (
    <section className="section-padding-sm bg-secondary/30">
      <div className="container-wide px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
            Real Experiences
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            See How Customers{' '}
            <span className="text-gradient">Stay Connected</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From entertainment to work, gaming to smart home — our network powers it all.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-primary-foreground">
                <h3 className="text-base sm:text-xl font-bold mb-0.5 sm:mb-1">{item.title}</h3>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
