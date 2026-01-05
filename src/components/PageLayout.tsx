import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container-wide text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
