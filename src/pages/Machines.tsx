import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetailModal from "@/components/ProductDetailModal";
import machineryHero from "@/assets/machinery-hero.jpg";
import generatorYellow from "@/assets/generator-yellow.jpg";

const Machines = memo(() => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  type Machine = {
    id: number;
    name: string;
    image: string;
    power: string;
    fuelType: string;
    brand: string;
    price: string;
    description: string;
  };

  const handleViewDetails = (product: Machine) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  const machines = [
    {
      id: 1,
      name: "Industrial Generator 500KW",
      image: generatorYellow,
      power: "500KW",
      fuelType: "Diesel",
      brand: "PowerMax Pro",
      price: "$45,000",
      description: "Heavy-duty generator for industrial applications"
    },
    {
      id: 2,
      name: "Compact Generator 100KW", 
      image: machineryHero,
      power: "100KW",
      fuelType: "Gas/Diesel",
      brand: "EcoGen",
      price: "$18,500",
      description: "Versatile generator perfect for medium-scale operations"
    },
    {
      id: 3,
      name: "Portable Generator 25KW",
      image: generatorYellow,
      power: "25KW", 
      fuelType: "Gasoline",
      brand: "MobilePower",
      price: "$8,200",
      description: "Lightweight and portable for job sites"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={machineryHero} 
            alt="Industrial Machinery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industrial Machinery & Generators
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Professional-grade equipment for your industrial and construction needs
          </p>
          <Button variant="industrial" size="lg">
            Explore Equipment
          </Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Equipment Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable machinery and generators built for demanding industrial environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine) => (
              <Card key={machine.id} className="overflow-hidden group hover:shadow-glow transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={machine.image} 
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {machine.fuelType}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{machine.name}</CardTitle>
                  <CardDescription>{machine.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Power Output:</span>
                      <span className="font-medium">{machine.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Brand:</span>
                      <span className="font-medium">{machine.brand}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="text-2xl font-bold text-primary">{machine.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="industrial" className="flex-1">
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleViewDetails(machine)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isGranite={false}
      />

      <Footer />
    </div>
  );
});

export default Machines;