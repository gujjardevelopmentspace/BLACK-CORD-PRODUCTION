import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ExternalLink, Award, TrendingUp, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "cash-cow", name: "Cash Cow Channels" },
    { id: "brand-stories", name: "Brand Stories" },
    { id: "corporate", name: "Corporate Films" },
    { id: "social", name: "TikTok/Reels" },
    { id: "events", name: "Event Videos" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Success Story",
      client: "Tech Startup",
      category: "cash-cow",
      views: "2.5M",
      engagement: "12.5%",
      roi: "300%",
      description: "Transformed a struggling e-commerce brand into a viral sensation through strategic content creation and storytelling.",
      image: "bg-gradient-to-br from-brand-red/20 to-cinema-red/30",
      tags: ["Product Launch", "Social Media", "Conversion"]
    },
    {
      id: 2,
      title: "Fortune 500 Brand Documentary",
      client: "Global Corporation",
      category: "brand-stories",
      views: "1.8M",
      engagement: "8.3%",
      roi: "250%",
      description: "Cinematic brand story highlighting company values and global impact across multiple international markets.",
      image: "bg-gradient-to-br from-cinema-black/60 to-brand-black/80",
      tags: ["Documentary", "Corporate", "Global"]
    },
    {
      id: 3,
      title: "Viral TikTok Campaign",
      client: "Fashion Brand",
      category: "social",
      views: "5.2M",
      engagement: "18.7%",
      roi: "450%",
      description: "Multi-platform viral campaign that generated millions of views and significantly increased brand awareness.",
      image: "bg-gradient-to-br from-brand-red/30 to-cinema-red/20",
      tags: ["Viral Marketing", "TikTok", "Fashion"]
    },
    {
      id: 4,
      title: "Educational Platform Growth",
      client: "EdTech Company",
      category: "cash-cow",
      views: "850K",
      engagement: "15.2%",
      roi: "180%",
      description: "Series of educational videos that improved learning outcomes and increased platform engagement by 300%.",
      image: "bg-gradient-to-br from-cinema-black/40 to-brand-red/20",
      tags: ["Education", "Growth", "Engagement"]
    },
    {
      id: 5,
      title: "Conference Highlight Reel",
      client: "Industry Conference",
      category: "events",
      views: "1.2M",
      engagement: "9.8%",
      roi: "200%",
      description: "Multi-camera event coverage with real-time editing and live streaming capabilities for maximum reach.",
      image: "bg-gradient-to-br from-brand-red/25 to-cinema-black/50",
      tags: ["Live Event", "Multi-Camera", "Streaming"]
    },
    {
      id: 6,
      title: "Customer Success Stories",
      client: "SaaS Platform",
      category: "corporate",
      views: "980K",
      engagement: "11.4%",
      roi: "320%",
      description: "Authentic testimonial series that increased trust, conversions, and customer lifetime value.",
      image: "bg-gradient-to-br from-cinema-red/20 to-brand-black/40",
      tags: ["Testimonials", "B2B", "Conversion"]
    }
  ];

  const achievements = [
    { metric: "12M+", label: "Total Views Generated", icon: <Eye className="w-6 h-6" /> },
    { metric: "350%", label: "Average ROI Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "98%", label: "Client Satisfaction Rate", icon: <Heart className="w-6 h-6" /> },
    { metric: "24h", label: "Average Turnaround", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Award className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">Award-Winning Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Our <span className="text-brand-red">Portfolio</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Explore our diverse range of successful projects that have helped brands tell their stories and achieve exceptional results.
          </p>
        </div>
      </section>

      {/* Portfolio Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-brand-red mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{achievement.metric}</div>
                <div className="text-muted-foreground text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button 
                key={category.id} 
                variant={category.id === "all" ? "hero" : "outline"} 
                size="sm"
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-cinema transition-all duration-300 group flex flex-col h-full">
                {/* Project Preview */}
                <div className={`relative h-64 ${project.image} flex items-center justify-center`}>
                  <Button 
                    variant="glass" 
                    size="icon" 
                    className="w-16 h-16 rounded-full group-hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-6 h-6 fill-current" />
                  </Button>
                  
                  {/* Metrics Overlay */}
                  <div className="absolute top-4 left-4 space-y-1">
                    <div className="bg-brand-black/80 text-brand-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.views}</span>
                    </div>
                    <div className="bg-brand-black/80 text-brand-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{project.roi} ROI</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-brand-white/80 group-hover:text-brand-white transition-colors" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-brand-red text-sm font-medium capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                      <Heart className="w-3 h-3" />
                      <span>{project.engagement}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{project.client}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-red group-hover:text-brand-white transition-colors mt-auto">
                    View Case Study
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Success <span className="text-brand-red">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real clients who trusted us with their video production needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-l-4 border-l-brand-red">
              <div className="text-4xl font-bold text-brand-red mb-2">2.5M</div>
              <div className="text-lg font-semibold text-foreground mb-2">Views Generated</div>
              <div className="text-muted-foreground text-sm">
                "Black Cord Production transformed our product launch into a viral success story."
              </div>
              <div className="text-brand-red text-xs mt-2 font-medium">- Tech Startup CEO</div>
            </Card>

            <Card className="p-8 text-center border-l-4 border-l-cinema-red">
              <div className="text-4xl font-bold text-brand-red mb-2">450%</div>
              <div className="text-lg font-semibold text-foreground mb-2">ROI Increase</div>
              <div className="text-muted-foreground text-sm">
                "The viral campaign exceeded all our expectations and drove incredible growth."
              </div>
              <div className="text-brand-red text-xs mt-2 font-medium">- Fashion Brand Director</div>
            </Card>

            <Card className="p-8 text-center border-l-4 border-l-brand-red">
              <div className="text-4xl font-bold text-brand-red mb-2">320%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Conversion Boost</div>
              <div className="text-muted-foreground text-sm">
                "Our testimonial videos significantly improved trust and customer conversions."
              </div>
              <div className="text-brand-red text-xs mt-2 font-medium">- SaaS Platform Founder</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful clients and achieve exceptional results with professional video production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Start Your Project
              </Button>
            </Link>
            <Link to="/why-choose-us">
              <Button variant="glass" size="xl">
                Why Choose Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;