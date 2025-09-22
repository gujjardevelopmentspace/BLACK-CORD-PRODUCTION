import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Clock, Trophy, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      description: "Every frame matters. We deliver pixel-perfect results with meticulous attention to detail."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Efficiency",
      description: "Fast turnaround times without compromising quality. Your deadlines are our priority."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We work closely with clients, ensuring your vision is perfectly translated into visual stories."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excellence",
      description: "Award-winning quality that sets your content apart in today's competitive digital landscape."
    }
  ];

  const industries = [
    "E-commerce & Retail",
    "Technology & SaaS",
    "Education & Training",
    "Healthcare & Wellness",
    "Finance & Banking",
    "Entertainment & Media",
    "Real Estate",
    "Non-Profit Organizations"
  ];

  const team = [
    {
      name: "Creative Director",
      role: "Vision & Strategy",
      experience: "12+ years",
      speciality: "Brand Storytelling"
    },
    {
      name: "Lead Editor",
      role: "Post-Production",
      experience: "10+ years",
      speciality: "Color & Audio"
    },
    {
      name: "Motion Designer",
      role: "Animation & VFX",
      experience: "8+ years",
      speciality: "3D & Motion Graphics"
    },
    {
      name: "Project Manager",
      role: "Client Success",
      experience: "6+ years",
      speciality: "Global Coordination"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Globe className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">Serving 45+ Countries Worldwide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            About <span className="text-brand-red">Black Cord Production</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            We're a passionate team of video production specialists dedicated to creating compelling visual content that drives results for brands worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between creative storytelling and technical excellence, Black Cord Production has grown from a small team of passionate filmmakers to a globally recognized video production agency.
                </p>
                <p>
                  Our journey began with a simple belief: every brand has a unique story worth telling. Over the years, we've perfected our craft, working with diverse clients from startups to Fortune 500 companies, helping them connect with their audiences through powerful visual narratives.
                </p>
                <p>
                  Today, we're proud to serve clients across 45+ countries, delivering high-quality video content that not only looks stunning but drives measurable results for businesses worldwide.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="hero" className="mt-8">
                  Work With Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-12 text-center">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-brand-white mb-2">5+</div>
                    <div className="text-brand-white/80">Years Excellence</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-white mb-2">500+</div>
                    <div className="text-brand-white/80">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-white mb-2">50+</div>
                    <div className="text-brand-white/80">Global Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-white mb-2">98%</div>
                    <div className="text-brand-white/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-brand-red">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower brands worldwide with exceptional video content that tells their story, engages their audience, and drives meaningful business results through creative excellence and technical innovation.
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-cinema-red">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted video production partner, setting the standard for quality, creativity, and client satisfaction in the digital content industry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-cinema transition-all duration-300 group">
                <div className="text-brand-red mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach & Industries */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Global Reach</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We serve clients across 45+ countries, providing localized content and culturally relevant storytelling that resonates with diverse audiences worldwide.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-brand-red mb-1">45+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-red mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Time Zones</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-red mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of creative professionals brings years of experience and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-cinema transition-all duration-300 group">
                <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-brand-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-brand-red text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-1">{member.experience}</p>
                <p className="text-muted-foreground text-xs">{member.speciality}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who trust us with their video production needs.
          </p>
          <Link to="/contact">
            <Button variant="glass" size="xl">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;