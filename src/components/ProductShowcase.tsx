import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";
import { useState, memo } from "react";
import ProductDetailModal from "./ProductDetailModal";
import graniteBlack from "@/assets/granite-black.jpg";
import generatorYellow from "@/assets/generator-yellow.jpg";

const ProductShowcase = memo(() => {
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
      price: "$45.99",
      originalPrice: "$55.99",
      rating: 4.8,
      image: graniteBlack,
      specs: "24\"x24\"x0.75\" | Polished Finish",
      inStock: true
    },
    {
      id: 2,
      name: "Carrara White Marble",
      price: "$52.99",
      rating: 4.9,
      image: graniteBlack,
      specs: "36\"x24\"x1.25\" | Honed Finish",
      inStock: true
    },
    {
      id: 3,
      name: "Kashmir Gold Granite",
      price: "$38.99",
      rating: 4.7,
      image: graniteBlack,
      specs: "24\"x24\"x0.75\" | Brushed Finish",
      inStock: false
    }
  ];

  const machineryProducts = [
    {
      id: 1,
      name: "Industrial Diesel Generator 500KW",
      price: "$45,999",
      rating: 4.9,
      image: generatorYellow,
      specs: "500KW | Diesel | Auto-start",
      inStock: true
    },
    {
      id: 2,
      name: "Compact Generator 50KW",
      price: "$12,999",
      rating: 4.8,
      image: generatorYellow,
      specs: "50KW | Diesel | Silent Operation",
      inStock: true
    },
    {
      id: 3,
      name: "Heavy Duty Generator 1000KW",
      price: "$89,999",
      rating: 5.0,
      image: generatorYellow,
      specs: "1000KW | Diesel | Prime Power",
      inStock: true
    }
  ];

  const ProductCard = memo(({ product, isGranite = false }: { product: any, isGranite?: boolean }) => (
    <Card className="group overflow-hidden border-border shadow-card hover:shadow-industrial transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-copper text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-destructive text-white text-xs font-bold px-2 py-1 rounded">
            OUT OF STOCK
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="copper" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-copper text-copper" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({Math.floor(Math.random() * 200 + 50)} reviews)</span>
        </div>
        
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">{product.specs}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
            )}
          </div>
          
          <Button 
            variant={isGranite ? "granite" : "steel"} 
            size="sm"
            disabled={!product.inStock}
            onClick={() => handleViewDetails(product)}
          >
            {product.inStock ? "View Details" : "Notify Me"}
          </Button>
        </div>
      </div>
    </Card>
  ));

  return (
    <section className="py-16 bg-gradient-granite">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Granite Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Premium Granite Collection
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our carefully curated selection of natural stone slabs. Each piece is hand-selected 
                for exceptional quality, durability, and stunning aesthetics.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex group">
              View All Granite
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graniteProducts.map((product) => (
              <ProductCard key={product.id} product={product} isGranite={true} />
            ))}
          </div>
        </div>

        {/* Machinery Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industrial Machinery & Generators
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Heavy-duty equipment built to perform in the most demanding conditions. 
                Reliable power solutions for construction, mining, and industrial applications.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex group">
              View All Equipment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineryProducts.map((product) => (
              <ProductCard key={product.id} product={product} isGranite={false} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-industrial border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experts can help you find the perfect materials and equipment for your specific project requirements. 
              Get personalized recommendations and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="industrial" size="lg">
                Request Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                Speak with Expert
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isGranite={selectedProduct && graniteProducts.includes(selectedProduct)}
      />
    </section>
  );
});

export default ProductShowcase;