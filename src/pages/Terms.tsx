import PageLayout from "@/components/PageLayout";
export default function TermsPage() {
  return (
    <PageLayout title="Terms & Conditions" description="Terms governing your use of our services.">
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-2 xs:py-3 px-2 text-xs xs:text-sm font-medium" role="alert" aria-label="independent disclosure">
        We are an independent third-party service assistance startup, launched in 2025, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
      </div>
      <section className="section-padding bg-background">
        <div className="container-tight max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 xs:px-6">
          <div className="card-elevated p-4 xs:p-6 sm:p-8">
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">Service Agreement</h2>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6">
              By using Net-soft Communications' independent third-party assistance services, you agree to these terms. Net-soft Communications is not an internet, cable, or streaming service provider and does not sell any provider plans. Our service fees are separate and distinct from any provider charges. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">Acceptable Use</h2>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6">
              Our services are intended to assist, guide, and support users in navigating cable, internet, and streaming options. All provider names are referenced descriptively only and include their respective trademarks (™ or ®). Misuse of our platform, including impersonation or unauthorized commercial use, is strictly prohibited.
            </p>
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">Billing & Fees</h2>
            <p className="text-sm xs:text-base text-muted-foreground">
              You will be billed separately by your chosen provider for their services. Net-soft Communications charges a distinct assistance fee for our support, which will be clearly disclosed prior to purchase.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
