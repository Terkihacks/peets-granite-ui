import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-copper rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Peets Granite </h3>
                {/* <p className="text-sm text-primary-foreground/80">Emporium</p> */}
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Leading supplier of premium granite slabs and industrial machinery. 
              Excellence in quality, reliability in service.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-copper hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-copper hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-copper hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-copper hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Granite Slabs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Marble Collection</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Industrial Generators</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Heavy Machinery</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Installation Services</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Consultation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-copper transition-colors">Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-copper" />
                <span className="text-primary-foreground/80">+254115696564</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-copper" />
                <span className="text-primary-foreground/80">info@peetsgranite.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-copper mt-1" />
                <span className="text-primary-foreground/80">
                  1234 Industrial Blvd<br />
                  Manufacturing District<br />
                  City, State 12345
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper"
                />
                <Button variant="copper" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Peets Granite . All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-copper transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-copper transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-copper transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;