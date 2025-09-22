import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@blackcord.com",
      description: "Get in touch for project inquiries",
      action: "mailto:info@blackcord.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      description: "Quick international communication",
      action: "https://wa.me/15551234567"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Telegram",
      details: "@BlackCordProduction",
      description: "Fast messaging for urgent projects",
      action: "https://t.me/BlackCordProduction"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 2 Hours",
      description: "Quick turnaround on all inquiries",
      action: null
    }
  ];

  const serviceOptions = [
    "Video Editing & Production",
    "Content Creation",
    "Brand Videos",
    "Social Media Content", 
    "Cash Cow Channel Development",
    "Corporate Films",
    "Event Videos",
    "Animation & Motion Graphics",
    "Voice-Over Services",
    "Custom Project"
  ];

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "Over $10,000",
    "Monthly Subscription",
    "Discuss Custom Pricing"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">24/7 Global Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Let's Create <span className="text-brand-red">Together</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team and let's discuss how we can help you create compelling video content that drives results.
          </p>
        </div>
      </section>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Send className="w-6 h-6 text-brand-red" />
                  <h2 className="text-3xl font-bold text-foreground">Start Your Project</h2>
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
                        placeholder="John"
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
                        placeholder="Doe"
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
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Channel Name
                      </label>
                      <Input 
                        type="text" 
                        className="border-border focus:border-brand-red transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        className="border-border focus:border-brand-red transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Needed *
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:border-brand-red transition-colors bg-background" required>
                      <option value="">Select service type</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:border-brand-red transition-colors bg-background">
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Timeline
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:border-brand-red transition-colors bg-background">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush delivery)</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      required
                      rows={6}
                      placeholder="Tell us about your project:
• What type of video do you need?
• What's the purpose/goal of this video?
• Who is your target audience?
• Do you have existing footage or need filming?
• Any specific style or reference videos?
• Key deadlines or launch dates?"
                      className="border-border focus:border-brand-red transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded border-border" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for video marketing tips and industry insights
                    </label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. We'll respond within 2 hours during business hours.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a startup looking to make your first video or an established brand wanting to refresh your content strategy, we're here to help you succeed with professional video production services.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-cinema transition-all duration-300 group">
                    <div className="text-brand-red mb-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-brand-red font-medium mb-2 block hover:text-cinema-red transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-brand-red font-medium mb-2">{info.details}</p>
                    )}
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="p-8 bg-gradient-hero">
                <h3 className="text-xl font-bold text-brand-white mb-6">Why Choose Us?</h3>
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
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                    <span className="text-brand-white">Serving 45+ countries worldwide</span>
                  </div>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-6">
                <h4 className="font-bold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-brand-red mr-2" />
                  Global Support Hours
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Americas (EST)</span>
                    <span>6 AM - 10 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Europe (CET)</span>
                    <span>8 AM - 12 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Asia Pacific (JST)</span>
                    <span>9 AM - 1 AM</span>
                  </div>
                  <div className="text-brand-red font-medium mt-3">
                    Emergency support available 24/7 for active projects
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-brand-red">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">How quickly can you start my project?</h4>
              <p className="text-muted-foreground text-sm">Most projects can begin within 24-48 hours of approval. Rush projects can start immediately.</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Do you work with international clients?</h4>
              <p className="text-muted-foreground text-sm">Yes! We serve clients in 45+ countries with 24/7 support and cultural localization.</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">What if I'm not satisfied with the result?</h4>
              <p className="text-muted-foreground text-sm">We offer unlimited revisions and a 100% satisfaction guarantee. Your success is our priority.</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Can you help with content strategy?</h4>
              <p className="text-muted-foreground text-sm">Absolutely! We provide strategic consultation to ensure your videos achieve their intended goals.</p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;