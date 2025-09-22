import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowRight, Play, Clock, Users, Star } from "lucide-react";
import { useState } from "react";

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const projectTypes = [
    "Cash Cow YouTube Content",
    "Brand Story & Corporate Film",
    "Viral Social Media Content",
    "Product Promotional Video",
    "Event Coverage",
    "Educational Content",
    "Testimonial Videos",
    "Animation & Motion Graphics"
  ];

  const budgetRanges = [
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+"
  ];

  const timelineOptions = [
    "Rush (24-48 hours)",
    "Standard (3-7 days)",
    "Extended (1-2 weeks)",
    "Flexible timeline"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-brand-red/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
            <span className="text-brand-red text-sm font-medium">Free Project Consultation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Start Your <span className="text-brand-red">Video Project</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us about your vision and we'll bring it to life. Get a custom quote within 24 hours.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Project Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription>
                  Share your vision with us and we'll create a custom proposal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your project goals, target audience, style preferences, and any specific requirements..."
                      className="min-h-[120px]"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Get My Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Process & Benefits */}
            <div className="space-y-8">
              {/* Our Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="w-5 h-5 text-brand-red" />
                    <span>Our Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-red font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Discovery Call</h4>
                      <p className="text-muted-foreground text-sm">We discuss your vision, goals, and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-red font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Proposal</h4>
                      <p className="text-muted-foreground text-sm">Detailed quote with timeline and deliverables</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-red font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Production</h4>
                      <p className="text-muted-foreground text-sm">We create your video with regular updates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-red font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Delivery</h4>
                      <p className="text-muted-foreground text-sm">Final video delivered with revisions included</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-brand-red" />
                    <span>Why Choose Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm">Award-winning creative team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm">Proven ROI for client content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm">24-48 hour turnaround available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm">Unlimited revisions included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm">Money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm">Global 24/7 support</span>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="border-brand-red/20 bg-gradient-to-br from-brand-red/5 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-red fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm italic mb-3">
                    "Black Cord Production delivered beyond our expectations. Our YouTube channel went from 10K to 500K views per month!"
                  </blockquote>
                  <div className="text-sm font-semibold">Michael Chen</div>
                  <div className="text-xs text-muted-foreground">CEO, TechStartup Inc.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartProject;