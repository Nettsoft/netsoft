import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us" description="We're here to help. Reach out to our team.">
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-2 sm:py-3 px-2 text-xs sm:text-sm font-medium" role="alert" aria-label="independent disclosure">
        We are an independent third-party service assistance startup, launched in 2025, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
      </div>
      <section className="section-padding bg-background">
        <div className="container-wide px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="card-elevated flex items-center gap-2 sm:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-xs sm:text-base text-foreground">Phone</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">1-800-NETSOFT</p>
                  <span className="block text-[10px] sm:text-xs text-accent mt-1">Call greeting: "Thank you for calling Net-soft Communications, an independent service assistance platform."</span>
                </div>
              </div>
              <div className="card-elevated flex items-center gap-2 sm:gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-xs sm:text-base text-foreground">Email</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">support@netsoftcomm.com</p>
                </div>
              </div>
              <div className="card-elevated flex items-center gap-2 sm:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-xs sm:text-base text-foreground">Location</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Available Nationwide</p>
                </div>
              </div>
              <div className="card-elevated bg-accent/10 border border-accent text-accent text-xs sm:text-sm p-2 sm:p-3">
                <strong>Note:</strong> We never request provider passwords or sensitive credentials. For all support inquiries, please describe your issue and our team will assist you.
              </div>
            </div>
            <div className="card-elevated mt-6 lg:mt-0">
              <h3 className="text-base sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Send a Message</h3>
              <form className="space-y-3 sm:space-y-4">
                <input type="text" placeholder="Name" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border bg-background text-foreground text-xs sm:text-base" />
                <input type="email" placeholder="Email" className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border bg-background text-foreground text-xs sm:text-base" />
                <textarea placeholder="Message" rows={4} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border bg-background text-foreground text-xs sm:text-base" />
                <Button variant="hero" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
