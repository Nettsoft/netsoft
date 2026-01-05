import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function CoveragePage() {
  return (
    <PageLayout title="Check Coverage" description="Enter your address to see available services in your area.">
      <section className="section-padding bg-background">
        <div className="container-tight px-2 sm:px-4">
          <div className="card-elevated max-w-md sm:max-w-xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Enter Your Address</h3>
            </div>
            <input
              type="text"
              placeholder="Street address, city, state, ZIP"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-3 sm:mb-4 text-xs sm:text-base"
            />
            <Button variant="hero" className="w-full">Check Availability</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
