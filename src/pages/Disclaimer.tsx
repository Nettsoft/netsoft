import PageLayout from "@/components/PageLayout";

export default function DisclaimerPage() {
  return (
    <PageLayout title="Disclaimer" description="Important information about our services.">
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="card-elevated">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Disclaimer</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Who We Are</h2>
                <p>
                  Net-soft Communications is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">What We Do NOT Do</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not an Internet Service Provider (ISP)</li>
                  <li>We do not provide official customer support for any brand</li>
                  <li>We are not affiliated, authorized, or endorsed by any telecom or cable company</li>
                  <li>We do not sell internet or cable subscriptions</li>
                  <li>We do not provide guaranteed technical fixes</li>
                  <li>All mentions of providers, if any, are strictly for informational purposes only</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Brand Names & Trademarks</h2>
                <p>
                  Brand names, if mentioned, are used strictly for informational purposes only. All trademarks belong to their respective owners. We are not affiliated with, endorsed by, or sponsored by any provider.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Our Service</h2>
                <p>
                  We provide general informational guidance related to internet, broadband, Wi-Fi, and cable TV services. Our role is to assist you with understanding your options and navigating service provider processes—nothing more.
                </p>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg mt-6">
                <p className="font-semibold text-foreground mb-2">Complete Disclaimer:</p>
                <p className="text-sm">
                  Net-soft Communications is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only. Service availability and details may vary by location. For specific information about our assistance services in your area, please contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
