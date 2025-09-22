import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, Scissors, Palette, Zap, Globe, Crown } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Professional post-production services including color correction, audio enhancement, and seamless transitions.",
      features: ["Color Grading", "Audio Mixing", "Motion Graphics", "VFX Integration"]
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Content Creation",
      description: "From concept to final cut, we create engaging content tailored for your target audience and platform.",
      features: ["Script Writing", "Storyboarding", "Animation", "Social Media Cuts"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Videos",
      description: "Elevate your brand with cinematic quality videos that tell your story and connect with your audience.",
      features: ["Brand Films", "Product Videos", "Testimonials", "Corporate Content"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality. Perfect for time-sensitive campaigns and content schedules.",
      features: ["24-48h Delivery", "Rush Orders", "Multiple Revisions", "Real-time Updates"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized content and culturally relevant storytelling approaches.",
      features: ["Multi-language", "Cultural Adaptation", "Time Zone Coverage", "International Standards"]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Hollywood-grade production values with attention to detail that sets your content apart from the competition.",
      features: ["4K/8K Support", "Cinema Standards", "Professional Tools", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-brand-red">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video production services designed to elevate your brand and engage your audience across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-cinema transition-all duration-300 group border-l-4 border-l-brand-red hover:border-l-cinema-red">
              <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-brand-white mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can bring your vision to life with our professional video production services.
          </p>
          <Button variant="glass" size="xl">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;