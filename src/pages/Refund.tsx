import PageLayout from "@/components/PageLayout";
export default function RefundPage() {
  return (
    <PageLayout title="Refund Policy" description="Our commitment to customer satisfaction.">
      <div className="w-full bg-accent/10 border-b border-accent text-accent text-center py-3 px-2 text-sm font-medium" role="alert" aria-label="independent disclosure">
        We are an independent third-party service assistance startup, launched in 2025, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
      </div>
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="card-elevated">
            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Policy</h2>
            <p className="text-muted-foreground mb-6">
              Refund requests can be submitted within <strong>7 to 15 days</strong> of service purchase, depending on the type of assistance provided. Eligibility for a refund is determined by the nature of the service and whether assistance has already been delivered. Please review the details below:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Refunds are available for eligible services only, as outlined at the time of purchase.</li>
              <li>If assistance has already been fully delivered, refund eligibility may be limited.</li>
              <li>Requests must be submitted within the specified window (7–15 days) from the date of purchase.</li>
              <li>Refunds are processed to the original payment method within 5–10 business days after approval.</li>
              <li>For questions or to submit a request, please contact our support team.</li>
            </ul>
            <h2 className="text-2xl font-bold text-foreground mb-4">Equipment Return (if applicable)</h2>
            <p className="text-muted-foreground">If your service included equipment, it must be returned in good condition within 14 days of cancellation to avoid additional charges.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
