import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Internet", href: "/internet" },
      { name: "Cable TV", href: "/cable-tv" },
      { name: "Streaming", href: "/streaming" },
    ],
  },
  { name: "Coverage", href: "/coverage" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
              {/* Abstract connectivity icon */}
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <circle cx="16" cy="16" r="3" fill="white" />
                <circle cx="16" cy="6" r="2" fill="white" opacity="0.8" />
                <circle cx="16" cy="26" r="2" fill="white" opacity="0.8" />
                <circle cx="6" cy="16" r="2" fill="white" opacity="0.8" />
                <circle cx="26" cy="16" r="2" fill="white" opacity="0.8" />
                <path d="M16 8L16 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 19L16 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 16L13 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19 16L24 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="8" r="1.5" fill="white" opacity="0.6" />
                <circle cx="24" cy="8" r="1.5" fill="white" opacity="0.6" />
                <circle cx="8" cy="24" r="1.5" fill="white" opacity="0.6" />
                <circle cx="24" cy="24" r="1.5" fill="white" opacity="0.6" />
                <path d="M9 9L14 14" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                <path d="M23 9L18 14" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                <path d="M9 23L14 18" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                <path d="M23 23L18 18" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">
              Net-soft <span className="text-gradient">Communications</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-48 py-2 mt-1 bg-card rounded-xl shadow-lg border border-border"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:8444498598">Support</a>
            </Button>
            <Button variant="hero" size="default" asChild>
              <a href="tel:8444498598">Call Now: (844) 449-8598</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.children ? (
                      <div className="space-y-1">
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.name ? null : link.name
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-muted-foreground"
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-1"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block px-4 py-2 text-sm font-medium ${
                          location.pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4 space-y-2">
                  <Button variant="hero" className="w-full" asChild>
                    <a href="tel:8444498598">Call Now: (844) 449-8598</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
