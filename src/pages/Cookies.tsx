import PageLayout from "@/components/PageLayout";
export default function CookiesPage() {
  return (
    <PageLayout title="Cookie Policy" description="How we use cookies on our website.">
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="card-elevated">
            <p className="text-muted-foreground mb-6">We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies.</p>
            <p className="text-muted-foreground">You can manage cookie preferences through your browser settings at any time.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
