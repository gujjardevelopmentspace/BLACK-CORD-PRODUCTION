import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ExternalLink, Award } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Product Launch",
      client: "Tech Startup",
      category: "Product Video",
      views: "2.5M",
      description: "Dynamic product showcase with 3D animations and lifestyle integration that drove 300% increase in conversions.",
      image: "bg-gradient-to-br from-brand-red/20 to-cinema-red/30"
    },
    {
      title: "Brand Documentary",
      client: "Fortune 500 Company",
      category: "Corporate Film",
      views: "1.8M",
      description: "Cinematic brand story highlighting company values and global impact across multiple markets.",
      image: "bg-gradient-to-br from-cinema-black/60 to-brand-black/80"
    },
    {
      title: "Social Media Campaign",
      client: "Fashion Brand",
      category: "Content Series",
      views: "5.2M",
      description: "Multi-platform content series with consistent branding and optimized for various social media formats.",
      image: "bg-gradient-to-br from-brand-red/30 to-cinema-red/20"
    },
    {
      title: "Training & Education",
      client: "EdTech Platform",
      category: "Educational Content",
      views: "850K",
      description: "Engaging educational videos with motion graphics and interactive elements for improved learning outcomes.",
      image: "bg-gradient-to-br from-cinema-black/40 to-brand-red/20"
    },
    {
      title: "Event Highlights",
      client: "Conference Organizer",
      category: "Event Coverage",
      views: "1.2M",
      description: "Multi-camera event coverage with real-time editing and live streaming capabilities.",
      image: "bg-gradient-to-br from-brand-red/25 to-cinema-black/50"
    },
    {
      title: "Testimonial Series",
      client: "SaaS Company",
      category: "Customer Stories",
      views: "980K",
      description: "Authentic customer testimonials with professional production values that increased trust and conversions.",
      image: "bg-gradient-to-br from-cinema-red/20 to-brand-black/40"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-brand-red" />
            <span className="text-brand-red text-sm font-medium">Award-Winning Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-brand-red">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of successful projects that have helped brands tell their stories and achieve their goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-cinema transition-all duration-300 group">
              {/* Project Image/Preview */}
              <div className={`relative h-48 ${project.image} flex items-center justify-center`}>
                <Button 
                  variant="glass" 
                  size="icon" 
                  className="w-16 h-16 rounded-full group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-6 h-6 fill-current" />
                </Button>
                <div className="absolute top-4 right-4 bg-brand-black/80 text-brand-white text-xs px-2 py-1 rounded">
                  {project.views} views
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-brand-red text-sm font-medium">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-brand-red transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.client}</p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">12M+</div>
            <div className="text-muted-foreground">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">45</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-red mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;