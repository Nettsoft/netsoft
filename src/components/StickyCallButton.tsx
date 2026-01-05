import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyCallButton() {
  const handleCall = () => {
    window.location.href = "tel:1-800-638-7638";
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      onClick={handleCall}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
      aria-label="Call us now"
    >
      <Phone className="w-6 h-6 text-white animate-pulse group-hover:animate-none" />
      <span className="absolute -top-12 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Call Us Now: 1-800-NETSOFT
      </span>
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></span>
    </motion.button>
  );
}
