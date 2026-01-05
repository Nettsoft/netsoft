import { Link } from "react-router-dom";
import { Wifi, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Internet Services", href: "/internet" },
    { name: "Cable TV", href: "/cable-tv" },
    { name: "Streaming", href: "/streaming" },
    { name: "Business Solutions", href: "/internet" },
  ],
  company: [
    { name: "About Us", href: "/contact" },
    { name: "Coverage Area", href: "/coverage" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide section-padding-sm px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 mb-8 sm:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Net-soft <span className="text-primary-light">Communications</span>
              </span>
            </Link>
            <p className="text-background/70 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Net-soft Communications assists, guides, and supports you with cable, internet, and streaming services. We are not an ISP or provider, but an independent platform helping you navigate your options.<br />
              <span className="block mt-2 text-xs text-background/60">
                Net-soft Communications is an independent third-party service assistance startup. All trademarks, including provider names referenced descriptively (with ™ or ®), belong to their respective owners. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
              </span>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light" />
                <span>1-800-STREAM-LINK</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light" />
                <span>support@netsoftcomm.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light" />
                <span>Available Nationwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-semibold mb-2 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-semibold mb-2 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2 sm:mb-4">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-background/60">
            © {new Date().getFullYear()} Net-soft Communications. All rights reserved.
          </p>
          {/* Compliance disclosure moved above. Footer bar now simplified. */}
        </div>
      </div>
    </footer>
  );
}
