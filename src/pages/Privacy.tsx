import PageLayout from "@/components/PageLayout";

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy" description="How we collect, use, and protect your information.">
      <section className="section-padding bg-background">
        <div className="container-tight max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 xs:px-6">
          <div className="card-elevated p-4 xs:p-6 sm:p-8">
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">Information We Collect</h2>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6">We collect information you provide directly, such as your name, email, address, and payment details when you request our assistance services. We do <strong>not</strong> request or store provider account passwords or sensitive credentials.</p>
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">How We Use Your Information</h2>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6">Your information is used solely to facilitate, support, and improve our independent assistance services, process payments, and communicate with you about your requests. We do not share your information with any cable, internet, or streaming service provider.</p>
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">Data Security & HTTPS</h2>
            <p className="text-sm xs:text-base text-muted-foreground mb-4 xs:mb-6">We use HTTPS encryption and implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
            <h2 className="text-xl xs:text-2xl font-bold text-foreground mb-3 xs:mb-4">Your Rights</h2>
            <p className="text-sm xs:text-base text-muted-foreground">You may request to access, update, or delete your personal information at any time by contacting our support team.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
