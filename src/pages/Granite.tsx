import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetailModal from "@/components/ProductDetailModal";
import graniteHero from "@/assets/granite-hero.jpg";
import graniteBlack from "@/assets/granite-black.jpg";

const Granite = memo(() => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  const graniteProducts = [
    {
      id: 1,
      name: "Black Galaxy Granite",
      image: graniteBlack,
      size: "120cm x 60cm",
      thickness: "20mm",
      finish: "Polished",
      price: "$450",
      description: "Premium black granite with stunning gold speckles"
    },
    {
      id: 2,
      name: "White Ice Granite",
      image: graniteHero,
      size: "140cm x 70cm", 
      thickness: "30mm",
      finish: "Honed",
      price: "$380",
      description: "Elegant white granite perfect for modern kitchens"
    },
    {
      id: 3,
      name: "Royal Blue Granite",
      image: graniteBlack,
      size: "100cm x 50cm",
      thickness: "25mm", 
      finish: "Polished",
      price: "$520",
      description: "Rare blue granite with unique veining patterns"
    },
    {
      id: 4,
      name: "Royal Blue Granite",
      image: graniteBlack,
      size: "100cm x 50cm",
      thickness: "25mm", 
      finish: "Polished",
      price: "$520",
      description: "Rare blue granite with unique veining patterns"
    },
    {
      id: 5,
      name: "Royal Blue Granite",
      image: graniteBlack,
      size: "100cm x 50cm",
      thickness: "25mm", 
      finish: "Polished",
      price: "$520",
      description: "Rare blue granite with unique veining patterns"
    },
    {
      id: 6,
      name: "Royal Blue Granite",
      image: graniteBlack,
      size: "100cm x 50cm",
      thickness: "25mm", 
      finish: "Polished",
      price: "$520",
      description: "Rare blue granite with unique veining patterns"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={graniteHero} 
            alt="Granite Slabs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Granite Slabs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover our collection of high-quality granite slabs for your construction projects
          </p>
          <Button variant="industrial" size="lg">
            Browse Collection
          </Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Granite Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each slab is carefully selected for quality, durability, and aesthetic appeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graniteProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-glow transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {product.finish}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium">{product.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thickness:</span>
                      <span className="font-medium">{product.thickness}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="industrial" className="flex-1">
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleViewDetails(product)}
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
        isGranite={true}
      />

      <Footer />
    </div>
  );
});

export default Granite;