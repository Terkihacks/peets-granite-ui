import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";


const Onboarding = () => {
   return (
   <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Onboarding;
