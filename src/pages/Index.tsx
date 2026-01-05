import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DataInsightsSection from "@/components/sections/DataInsightsSection";
import LifestyleSection from "@/components/sections/LifestyleSection";
import ServicesSlider from "@/components/sections/ServicesSlider";
import PlansSection from "@/components/sections/PlansSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import GallerySection from "@/components/sections/GallerySection";
import BannerSection from "@/components/sections/BannerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        {/* HeroSection is now shifted up for better above-the-fold visibility */}
        <HeroSection />
        <TrustStrip />
        <FeaturesSection />
        <DataInsightsSection />
        <GallerySection />
        <LifestyleSection />
        <ServicesSlider />
        <PlansSection />
        <WhyChooseUsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
