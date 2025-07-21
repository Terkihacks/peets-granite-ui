import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, Award } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  specs: string;
  inStock: boolean;
  description?: string;
  features?: string[];
  warranty?: string;
  shipping?: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isGranite?: boolean;
}

const ProductDetailModal = ({ product, isOpen, onClose, isGranite = false }: ProductDetailModalProps) => {
  if (!product) return null;

  const features = product.features || [
    "Premium quality construction",
    "Certified by industry standards",
    "Professional installation support",
    "Extended warranty coverage"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-copper text-white">
                  SALE
                </Badge>
              )}
              {!product.inStock && (
                <Badge className="absolute top-4 right-4 bg-destructive text-white">
                  OUT OF STOCK
                </Badge>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-copper text-copper" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({Math.floor(Math.random() * 200 + 50)} reviews)
              </span>
              <Badge variant="outline" className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-green-600 font-medium">
                  Save {Math.round((1 - parseFloat(product.price.replace('$', '').replace(',', '')) / parseFloat(product.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                </p>
              )}
            </div>

            {/* Specifications */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Specifications</h3>
              <p className="text-muted-foreground">{product.specs}</p>
              {product.description && (
                <p className="text-sm">{product.description}</p>
              )}
            </div>

            <Separator />

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Service Information */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free shipping on orders over $500</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>2-year warranty included</span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button 
                variant={isGranite ? "granite" : "industrial"} 
                className="w-full"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Notify When Available"}
              </Button>
              <Button variant="outline" className="w-full">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;