import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@blackcordproduction.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Available 24/7 for urgent projects"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Global Reach",
      details: "Worldwide Service",
      description: "Serving clients in 45+ countries"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 2 Hours",
      description: "Quick turnaround on all inquiries"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create <span className="text-brand-red">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team and let's discuss how we can help you create compelling video content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8">
            <div className="flex items-center space-x-2 mb-6">
              <MessageCircle className="w-6 h-6 text-brand-red" />
              <h3 className="text-2xl font-bold text-foreground">Start Your Project</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="border-border focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="border-border focus:border-brand-red transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input 
                  type="email" 
                  required 
                  className="border-border focus:border-brand-red transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company/Organization
                </label>
                <Input 
                  type="text" 
                  className="border-border focus:border-brand-red transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-md focus:border-brand-red transition-colors bg-background">
                  <option value="">Select project type</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="brand-video">Brand Video</option>
                  <option value="social-media">Social Media Content</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea 
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  className="border-border focus:border-brand-red transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're a startup looking to make your first video or an established brand wanting to refresh your content strategy, we're here to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-cinema transition-all duration-300 group">
                  <div className="text-brand-red mb-3 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                  <p className="text-brand-red font-medium mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="p-8 bg-gradient-hero">
              <h4 className="text-xl font-bold text-brand-white mb-6">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span className="text-brand-white">Average 48-hour turnaround</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span className="text-brand-white">98% client satisfaction rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span className="text-brand-white">Global team, local understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span className="text-brand-white">Unlimited revisions included</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;