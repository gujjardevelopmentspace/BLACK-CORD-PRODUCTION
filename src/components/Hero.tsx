import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-video-production.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional video production setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-black/90 via-cinema-black/70 to-cinema-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-3 mb-8 sm:mb-10 max-w-[95%] sm:max-w-none mx-auto">
            <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
            <span className="text-brand-white text-sm sm:text-base font-medium text-center leading-tight">
              <span className="block sm:hidden">Award-Winning Video Production</span>
              <span className="hidden sm:block">Award-Winning Professional Video Production</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white mb-6 sm:mb-8 leading-tight px-2">
            Crafting Visual 
            <span className="text-brand-red block">Stories That Convert</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            We deliver premium video editing services to international clients, transforming raw footage into compelling content that drives results for brands worldwide.
          </p>

          {/* Key Services Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 max-w-4xl mx-auto px-2">
            <div className="bg-brand-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-white/20">
              <div className="text-brand-red text-xl sm:text-2xl md:text-3xl font-bold mb-2">Cash Cow</div>
              <div className="text-brand-white text-sm sm:text-base">YouTube Channel Growth</div>
            </div>
            <div className="bg-brand-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-white/20">
              <div className="text-brand-red text-xl sm:text-2xl md:text-3xl font-bold mb-2">Brand Stories</div>
              <div className="text-brand-white text-sm sm:text-base">Cinematic Corporate Films</div>
            </div>
            <div className="bg-brand-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-brand-white/20 sm:col-span-2 md:col-span-1">
              <div className="text-brand-red text-xl sm:text-2xl md:text-3xl font-bold mb-2">Viral Content</div>
              <div className="text-brand-white text-sm sm:text-base">TikTok & Social Media</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-6">
            <Link to="/start-project">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="glass" size="xl" className="group w-full sm:w-auto">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Reel
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-3xl mx-auto px-2">
            <div className="bg-brand-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-brand-white/10">
              <div className="text-brand-white text-xs sm:text-sm mb-1">Since 2019</div>
              <div className="text-brand-red font-bold text-base sm:text-lg">5+ Years</div>
            </div>
            <div className="bg-brand-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-brand-white/10">
              <div className="text-brand-white text-xs sm:text-sm mb-1">Global Reach</div>
              <div className="text-brand-red font-bold text-base sm:text-lg">25+ Countries</div>
            </div>
            <div className="bg-brand-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-brand-white/10">
              <div className="text-brand-white text-xs sm:text-sm mb-1">Fast Delivery</div>
              <div className="text-brand-red font-bold text-base sm:text-lg">24-48h</div>
            </div>
            <div className="bg-brand-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-brand-white/10">
              <div className="text-brand-white text-xs sm:text-sm mb-1">Money Back</div>
              <div className="text-brand-red font-bold text-base sm:text-lg">Guarantee</div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 max-w-4xl mx-auto px-2">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-2 sm:mb-3">500+</div>
              <div className="text-brand-white/70 text-sm sm:text-base">Projects Delivered</div>
              <div className="text-brand-white/50 text-xs sm:text-sm mt-1 hidden sm:block">Across All Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-2 sm:mb-3">50+</div>
              <div className="text-brand-white/70 text-sm sm:text-base">Global Clients</div>
              <div className="text-brand-white/50 text-xs sm:text-sm mt-1 hidden sm:block">From Startups to Fortune 500</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-2 sm:mb-3">12M+</div>
              <div className="text-brand-white/70 text-sm sm:text-base">Views Generated</div>
              <div className="text-brand-white/50 text-xs sm:text-sm mt-1 hidden sm:block">For Client Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-2 sm:mb-3">98%</div>
              <div className="text-brand-white/70 text-sm sm:text-base">Client Satisfaction</div>
              <div className="text-brand-white/50 text-xs sm:text-sm mt-1 hidden sm:block">5-Star Average Rating</div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-brand-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-brand-white/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red">★</div>
                ))}
              </div>
            </div>
            <blockquote className="text-brand-white/90 text-base sm:text-lg md:text-xl lg:text-2xl italic mb-4 sm:mb-6 leading-relaxed">
              "Black Cord Production transformed our struggling YouTube channel into a million-view success story. Their expertise in cash cow content creation is unmatched."
            </blockquote>
            <div className="text-brand-white font-semibold text-base sm:text-lg">Sarah Johnson</div>
            <div className="text-brand-white/70 text-sm sm:text-base">CEO, Digital Marketing Agency</div>
            <div className="text-brand-red text-sm sm:text-base mt-2">2.5M+ Views Generated • 450% ROI Increase</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;