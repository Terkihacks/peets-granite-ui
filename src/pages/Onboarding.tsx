import OnboardHeader from "@/components/OnboardHeader";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";


const Onboarding = () => {
   return (
   <div className="min-h-screen bg-background">
      <OnboardHeader />
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Onboarding;
