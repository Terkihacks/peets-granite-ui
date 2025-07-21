import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import graniteHero from "@/assets/granite-hero.jpg";
import machineryHero from "@/assets/machinery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero */}
      <div className="relative bg-gradient-hero min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Granite & 
                <span className="text-copper"> Industrial Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Discover our extensive collection of premium granite slabs and heavy-duty industrial machinery. 
                Built for strength, engineered for excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="copper" size="xl" className="group">
                  Explore Granite Collection
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                  View Machinery
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src={graniteHero} 
                      alt="Premium Granite" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <p className="text-white text-sm mt-2 font-medium">Premium Granite Slabs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-copper/20 rounded-lg p-4 text-center">
                      <Award className="h-8 w-8 text-copper mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">ISO Certified Quality</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src={machineryHero} 
                      alt="Industrial Machinery" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <p className="text-white text-sm mt-2 font-medium">Heavy Machinery</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-steel/20 rounded-lg p-4 text-center">
                      <Truck className="h-8 w-8 text-steel-light mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">Global Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-copper/10 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-copper" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">ISO certified materials & equipment</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Global Shipping</h3>
                <p className="text-sm text-muted-foreground">Worldwide delivery & installation</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-steel/10 p-3 rounded-lg">
                <Award className="h-6 w-6 text-steel" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Expert Support</h3>
                <p className="text-sm text-muted-foreground">24/7 technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;