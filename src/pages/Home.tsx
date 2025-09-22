import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, Scissors, Palette, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredServices = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing & Production",
      description: "Professional post-production with color correction, audio enhancement, and seamless transitions.",
      link: "/services#video-editing"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Content Creation",
      description: "From concept to final cut, we create engaging content for your target audience.",
      link: "/services#content-creation"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Videos",
      description: "Cinematic quality videos that tell your story and connect with your audience.",
      link: "/services#brand-videos"
    }
  ];

  const trustIndicators = [
    "500+ Projects Delivered",
    "50+ Global Clients",
    "98% Client Satisfaction",
    "24/7 Support Available"
  ];

  return (
    <main className="pt-20">
      <Hero />
      
      {/* Featured Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-brand-red">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From video editing to complete brand storytelling, we deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-cinema transition-all duration-300 group border-l-4 border-l-brand-red">
                <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-brand-red font-medium hover:text-cinema-red transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="hero" size="xl">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="w-8 h-8 text-brand-red mx-auto mb-3" />
                <p className="text-foreground font-medium">{indicator}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with professional video production services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Start a Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="glass" size="xl">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;