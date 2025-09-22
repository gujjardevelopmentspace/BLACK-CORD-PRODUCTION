import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Star, Award, Globe, Clock, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const comparison = [
    {
      feature: "Turnaround Time",
      us: "24-48 hours",
      others: "5-7 days",
      usIcon: <Check className="w-5 h-5 text-green-600" />,
      othersIcon: <X className="w-5 h-5 text-red-500" />
    },
    {
      feature: "Revisions Included",
      us: "Unlimited",
      others: "2-3 revisions max",
      usIcon: <Check className="w-5 h-5 text-green-600" />,
      othersIcon: <X className="w-5 h-5 text-red-500" />
    },
    {
      feature: "Global Support",
      us: "24/7 across all time zones",
      others: "Business hours only",
      usIcon: <Check className="w-5 h-5 text-green-600" />,
      othersIcon: <X className="w-5 h-5 text-red-500" />
    },
    {
      feature: "Quality Standard",
      us: "Hollywood-grade production",
      others: "Standard quality",
      usIcon: <Check className="w-5 h-5 text-green-600" />,
      othersIcon: <X className="w-5 h-5 text-red-500" />
    },
    {
      feature: "Cultural Adaptation",
      us: "45+ countries experience",
      others: "Limited international experience",
      usIcon: <Check className="w-5 h-5 text-green-600" />,
      othersIcon: <X className="w-5 h-5 text-red-500" />
    },
    {
      feature: "Project Management",
      us: "Dedicated project manager",
      others: "Generic support",
      usIcon: <Check className="w-5 h-5 text-green-600" />,
      othersIcon: <X className="w-5 h-5 text-red-500" />
    }
  ];

  const differentiators = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Clients",
      description: "Serving 45+ countries with localized content and cultural understanding",
      stat: "45+ Countries"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cinematic Storytelling",
      description: "Hollywood-grade production values that make your content stand out",
      stat: "Award-Winning"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Affordable Scaling",
      description: "Enterprise-quality results at competitive prices with flexible packages",
      stat: "Cost Effective"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "ROI-Driven",
      description: "Focused on results that matter - engagement, conversions, and growth",
      stat: "350% Avg ROI"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "Black Cord Production transformed our brand story into a compelling visual narrative that resonated with our global audience. The attention to detail and cultural sensitivity was exceptional.",
      rating: 5,
      result: "300% increase in engagement"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthHub Media",
      content: "The team's expertise in creating viral content is unmatched. They turned our product launch into a social media phenomenon that exceeded all our expectations.",
      rating: 5,
      result: "2.5M views generated"
    },
    {
      name: "Emily Watson",
      role: "Brand Manager",
      company: "Luxe Fashion Co.",
      content: "Working with Black Cord Production was seamless. Their global perspective and local understanding helped us connect with diverse markets effectively.",
      rating: 5,
      result: "450% ROI increase"
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction or your money back"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "Guaranteed delivery within agreed timeframes"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Unlimited Support",
      description: "Ongoing support even after project completion"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">98% Client Satisfaction Rate</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Why Choose <span className="text-brand-red">Black Cord Production</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Discover what sets us apart in the competitive video production landscape and why global brands trust us with their most important projects.
          </p>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Core <span className="text-brand-red">Differentiators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The unique advantages that make us the preferred choice for video production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-cinema transition-all duration-300 group border-l-4 border-l-brand-red">
                <div className="text-brand-red mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-brand-red mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Us vs <span className="text-brand-red">Others</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we compare to other video production agencies in key areas that matter most to your success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-gradient-hero p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="text-brand-white font-bold text-lg">Feature</div>
                  <div className="text-brand-white font-bold text-lg">Black Cord Production</div>
                  <div className="text-brand-white font-bold text-lg">Others</div>
                </div>
              </div>

              <div className="divide-y divide-border">
                {comparison.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-6 items-center">
                    <div className="font-medium text-foreground">{item.feature}</div>
                    <div className="flex items-center space-x-2">
                      {item.usIcon}
                      <span className="text-foreground">{item.us}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.othersIcon}
                      <span className="text-muted-foreground">{item.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our <span className="text-brand-red">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real testimonials from satisfied clients who have experienced the Black Cord Production difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-cinema transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-brand-red text-sm">{testimonial.role}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                  <div className="text-green-600 text-sm font-medium mt-2">{testimonial.result}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-brand-red">Guarantees</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand behind our work with concrete commitments that give you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-cinema transition-all duration-300 group">
                <div className="text-brand-red mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{guarantee.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results That Speak */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Results That <span className="text-brand-red">Speak</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers don't lie. Here's the measurable impact we've created for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">12M+</div>
              <div className="text-muted-foreground">Total Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">350%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-red mb-2">24h</div>
              <div className="text-muted-foreground">Average Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who chose Black Cord Production for their video production needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="glass" size="xl">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUs;