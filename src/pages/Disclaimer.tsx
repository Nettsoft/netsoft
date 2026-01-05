import PageLayout from "@/components/PageLayout";
export default function DisclaimerPage() {
  return (
    <PageLayout title="Disclaimer" description="Important information about our services.">
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="card-elevated">
            <p className="text-muted-foreground mb-6">
              Net-soft Communications is an independent third-party service assistance startup, launched in 2025. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. All provider names are referenced descriptively only and include their respective trademarks (™ or ®). All trademarks are property of their respective owners.
            </p>
            <p className="text-muted-foreground">Service availability, speeds, and pricing may vary by location. Contact us for specific details about our assistance services in your area.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
