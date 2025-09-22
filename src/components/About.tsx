import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Clock, Trophy } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-brand-red">Black Cord Production</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of video production specialists dedicated to creating compelling visual content that drives results for brands worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <Button variant="hero" className="mt-8">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-brand-white mb-4">5+</div>
                <div className="text-brand-white/80 text-lg">Years of Excellence</div>
                <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h3>
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

        {/* Team */}
        <div className="bg-muted/50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-brand-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-brand-red text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-1">{member.experience}</p>
                <p className="text-muted-foreground text-xs">{member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;