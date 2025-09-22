import { Button } from "@/components/ui/button";
import { Play, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cinema-black text-brand-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-brand-white fill-current" />
              </div>
              <span className="text-2xl font-bold">
                Black Cord <span className="text-brand-red">Production</span>
              </span>
            </div>
            <p className="text-brand-white/80 mb-6 max-w-md leading-relaxed">
              Professional video production services that transform your vision into compelling visual stories. 
              Serving global clients with excellence and creativity.
            </p>
            <div className="flex space-x-4">
              <Button variant="glass" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-white/80 hover:text-brand-red transition-colors">Video Editing</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-red transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-red transition-colors">Brand Videos</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-red transition-colors">Social Media</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-red transition-colors">Animation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-">
                <Mail className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white/80">hello@blackcordproduction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span className="text-brand-white/80">Global Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-white/60 text-sm">
              © 2024 Black Cord Production. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-brand-white/60 hover:text-brand-red text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-red text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-red text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;