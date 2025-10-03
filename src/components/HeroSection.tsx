import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-white text-black relative overflow-hidden osmo-bg">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="osmo-floating top-20 left-10 w-16 h-16 border border-red-600/15 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-40 right-20 w-12 h-12 bg-red-600/08 rounded-lg magnetic-element"></div>
        <div className="osmo-floating bottom-32 left-1/4 w-20 h-20 border border-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-20 right-1/3 w-8 h-8 bg-red-600/12 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-1/2 left-8 w-14 h-14 border border-red-600/08 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-1/3 right-1/4 w-10 h-10 bg-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-2/3 left-1/3 w-6 h-6 border border-red-600/18 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-1/3 right-1/5 w-18 h-18 bg-red-600/04 rounded-lg magnetic-element"></div>
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="osmo-particle" style={{left: '20%', animationDelay: '2s'}}></div>
        <div className="osmo-particle" style={{left: '30%', animationDelay: '4s'}}></div>
        <div className="osmo-particle" style={{left: '40%', animationDelay: '6s'}}></div>
        <div className="osmo-particle" style={{left: '50%', animationDelay: '8s'}}></div>
        <div className="osmo-particle" style={{left: '60%', animationDelay: '10s'}}></div>
        <div className="osmo-particle" style={{left: '70%', animationDelay: '12s'}}></div>
        <div className="osmo-particle" style={{left: '80%', animationDelay: '14s'}}></div>
        <div className="osmo-particle" style={{left: '90%', animationDelay: '16s'}}></div>
        <div className="osmo-particle" style={{left: '15%', animationDelay: '1s'}}></div>
        <div className="osmo-particle" style={{left: '25%', animationDelay: '3s'}}></div>
        <div className="osmo-particle" style={{left: '35%', animationDelay: '5s'}}></div>
        <div className="osmo-particle" style={{left: '45%', animationDelay: '7s'}}></div>
        <div className="osmo-particle" style={{left: '55%', animationDelay: '9s'}}></div>
        <div className="osmo-particle" style={{left: '65%', animationDelay: '11s'}}></div>
        <div className="osmo-particle" style={{left: '75%', animationDelay: '13s'}}></div>
        <div className="osmo-particle" style={{left: '85%', animationDelay: '15s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* Hero Headline */}
          <motion.div className="space-y-4 sm:space-y-6 lg:space-y-8" variants={heroVariants}>
            <h1 className="hero-text text-black max-w-6xl mx-auto relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
              <span className="block">We Make Videos That Actually</span>
              <span className="block text-red-600 mt-2 sm:mt-4">Break the Internet</span>
            </h1>
            <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 leading-relaxed" variants={heroVariants} transition={{ delay: 0.2 }}>
              Look, we've been in the trenches. We know what makes TikTok videos explode, what gets YouTube Shorts trending, 
              and how to turn your ideas into content that people can't stop watching. Professional editing starting at just $75 per video.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4 sm:px-6 lg:px-0" variants={heroVariants} transition={{ delay: 0.4 }}>
            <Link to="/start-project" className="w-full sm:w-auto">
              <Button variant="member" size="xl" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold pulse-glow interactive-glow hover:scale-105 transition-all duration-300">
                Let's Create Something Epic
              </Button>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button variant="about" size="xl" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3 interactive-glow hover:scale-105 transition-all duration-300">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 border-2 border-white"></div>
                </div>
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-2 sm:px-4 lg:px-0" variants={heroVariants} transition={{ delay: 0.6 }}>
            <div className="text-center p-2 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">500+</div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 mt-1">Videos We've Crushed</div>
              <div className="text-xs text-neutral-500 mt-1">And counting...</div>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">150M+</div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 mt-1">Views We've Generated</div>
              <div className="text-xs text-neutral-500 mt-1">For our amazing clients</div>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">50+</div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 mt-1">Creators We've Helped</div>
              <div className="text-xs text-neutral-500 mt-1">From 15+ countries</div>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">95%</div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 mt-1">Viral Success Rate</div>
              <div className="text-xs text-neutral-500 mt-1">We're pretty good at this</div>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">$50M+</div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 mt-1">Revenue Generated</div>
              <div className="text-xs text-neutral-500 mt-1">For our clients' pockets</div>
            </div>
            <div className="text-center p-2 sm:p-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">24h</div>
              <div className="text-xs sm:text-sm lg:text-base text-neutral-600 mt-1">Average Delivery</div>
              <div className="text-xs text-neutral-500 mt-1">We work fast, not slow</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
