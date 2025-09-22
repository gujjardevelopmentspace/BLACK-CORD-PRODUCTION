import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, Scissors, Palette, Zap, Volume2, Crown, Play, Edit, Camera, Megaphone, Mic, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      id: "video-editing",
      icon: <Video className="w-10 h-10" />,
      title: "🎬 Video Editing & Production",
      description: "Professional post-production services with Hollywood-grade quality",
      services: [
        { name: "Color Correction & Grading", description: "Professional color enhancement and cinematic looks" },
        { name: "Audio Enhancement", description: "Crystal clear audio mixing and mastering" },
        { name: "Motion Graphics", description: "Eye-catching animations and visual effects" },
        { name: "Multi-Camera Editing", description: "Seamless editing for complex productions" }
      ]
    },
    {
      id: "visual-design",
      icon: <Palette className="w-10 h-10" />,
      title: "🎨 Visual Design & Motion",
      description: "Creative visual storytelling through design and animation",
      services: [
        { name: "2D/3D Animation", description: "Stunning animations that bring ideas to life" },
        { name: "Logo Animation", description: "Dynamic brand identity animations" },
        { name: "Infographic Videos", description: "Data visualization through engaging motion graphics" },
        { name: "Title Sequences", description: "Professional opening and closing sequences" }
      ]
    },
    {
      id: "marketing-branding",
      icon: <Megaphone className="w-10 h-10" />,
      title: "📈 Marketing & Branding",
      description: "Strategic video content that drives conversions and builds brands",
      services: [
        { name: "Brand Videos", description: "Compelling brand stories that resonate with audiences" },
        { name: "Product Demos", description: "Showcase your products with professional presentations" },
        { name: "Social Media Content", description: "Platform-optimized content for maximum engagement" },
        { name: "Testimonial Videos", description: "Authentic customer stories that build trust" }
      ]
    },
    {
      id: "audio-voice",
      icon: <Volume2 className="w-10 h-10" />,
      title: "🔊 Audio & Voice Services",
      description: "Professional audio production and voice-over services",
      services: [
        { name: "Voice-Over Production", description: "Professional narration in multiple languages" },
        { name: "Sound Design", description: "Custom audio environments and effects" },
        { name: "Music Composition", description: "Original music and audio branding" },
        { name: "Podcast Editing", description: "Complete podcast production and post-production" }
      ]
    },
    {
      id: "advanced-premium",
      icon: <Crown className="w-10 h-10" />,
      title: "📹 Advanced & Premium Services",
      description: "Enterprise-level video production for demanding projects",
      services: [
        { name: "Live Streaming", description: "Professional live event broadcasting and streaming" },
        { name: "Virtual Reality Content", description: "Immersive VR experiences and 360° videos" },
        { name: "Documentary Production", description: "Full-service documentary filmmaking" },
        { name: "Training Videos", description: "Educational content for corporate and institutional use" }
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "We understand your vision and requirements" },
    { step: "02", title: "Planning", description: "Strategic planning and resource allocation" },
    { step: "03", title: "Production", description: "Professional editing and post-production" },
    { step: "04", title: "Review", description: "Client feedback and revisions" },
    { step: "05", title: "Delivery", description: "Final delivery in your preferred formats" }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Award className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">Award-Winning Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Our <span className="text-brand-red">Services</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Comprehensive video production services designed to elevate your brand and engage your audience across all platforms.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {serviceCategories.map((category, index) => (
            <div key={category.id} id={category.id} className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-brand-red mb-4">
                    {category.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">{category.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Get Quote
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="p-6 hover:shadow-cinema transition-all duration-300 group">
                        <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand-red transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-brand-red">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined workflow that ensures quality results and exceptional client experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 flex items-center justify-center text-brand-white font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brand-red/20 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-brand-red">Black Cord Production</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The advantages that set us apart in the competitive video production landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-cinema transition-all duration-300 group">
              <Zap className="w-8 h-8 text-brand-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-foreground mb-2">Fast Turnaround</h4>
              <p className="text-muted-foreground text-sm">24-48 hour delivery on most projects</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-cinema transition-all duration-300 group">
              <Crown className="w-8 h-8 text-brand-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-foreground mb-2">Premium Quality</h4>
              <p className="text-muted-foreground text-sm">Hollywood-grade production values</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-cinema transition-all duration-300 group">
              <Award className="w-8 h-8 text-brand-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-foreground mb-2">Global Experience</h4>
              <p className="text-muted-foreground text-sm">Serving 45+ countries worldwide</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-cinema transition-all duration-300 group">
              <Scissors className="w-8 h-8 text-brand-red mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-foreground mb-2">Unlimited Revisions</h4>
              <p className="text-muted-foreground text-sm">Until you're completely satisfied</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your video production needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="glass" size="xl">
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;