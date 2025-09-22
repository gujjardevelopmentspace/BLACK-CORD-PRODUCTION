import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MessageCircle, 
  Lightbulb, 
  Video, 
  MessageSquare, 
  Truck, 
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Discovery Call",
      subtitle: "Understanding Your Vision",
      description: "We start with a comprehensive consultation to understand your goals, target audience, brand identity, and project requirements.",
      duration: "30-45 minutes",
      deliverables: [
        "Project scope definition",
        "Timeline establishment", 
        "Budget confirmation",
        "Success metrics alignment"
      ],
      color: "border-l-brand-red"
    },
    {
      step: "02",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Concept & Script",
      subtitle: "Creative Development",
      description: "Our creative team develops concepts, writes scripts, and creates storyboards that align perfectly with your brand and objectives.",
      duration: "2-3 days",
      deliverables: [
        "Creative concept presentation",
        "Script writing & refinement",
        "Storyboard creation",
        "Visual style guide"
      ],
      color: "border-l-cinema-red"
    },
    {
      step: "03",
      icon: <Video className="w-8 h-8" />,
      title: "Cinematic Editing",
      subtitle: "Production Excellence",
      description: "Professional editing, color grading, audio enhancement, and motion graphics to bring your story to life with cinematic quality.",
      duration: "3-5 days",
      deliverables: [
        "Professional video editing",
        "Color correction & grading",
        "Audio mixing & enhancement",
        "Motion graphics integration"
      ],
      color: "border-l-brand-red"
    },
    {
      step: "04",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Review & Feedback",
      subtitle: "Collaborative Refinement",
      description: "We present the first cut for your review and incorporate your feedback through unlimited revisions until perfect.",
      duration: "1-2 days",
      deliverables: [
        "First cut presentation",
        "Feedback collection",
        "Unlimited revisions",
        "Final approval process"
      ],
      color: "border-l-cinema-red"
    },
    {
      step: "05",
      icon: <Truck className="w-8 h-8" />,
      title: "Delivery",
      subtitle: "Multi-Format Output",
      description: "Final delivery in all required formats optimized for your specific platforms and use cases.",
      duration: "Same day",
      deliverables: [
        "Final video files",
        "Multiple format exports",
        "Platform-specific versions",
        "Source files & assets"
      ],
      color: "border-l-brand-red"
    },
    {
      step: "06",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale & Grow",
      subtitle: "Ongoing Partnership",
      description: "Post-delivery support, performance tracking, and scaling opportunities to maximize your video's impact.",
      duration: "Ongoing",
      deliverables: [
        "Performance analytics",
        "Optimization suggestions",
        "Scaling recommendations",
        "Ongoing support"
      ],
      color: "border-l-cinema-red"
    }
  ];

  const processHighlights = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Average 5-7 day completion",
      stat: "48h Rush Available"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Multiple quality checkpoints",
      stat: "100% Satisfaction"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Communication",
      description: "Regular updates & feedback loops",
      stat: "24/7 Support"
    }
  ];

  const workflowBenefits = [
    {
      title: "Transparent Process",
      description: "You know exactly what's happening at every stage of your project."
    },
    {
      title: "Collaborative Approach", 
      description: "Your input is valued and incorporated throughout the entire process."
    },
    {
      title: "Quality Checkpoints",
      description: "Multiple review stages ensure the highest quality output."
    },
    {
      title: "Flexible Timeline",
      description: "Rush delivery available for urgent projects without quality compromise."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <CheckCircle className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">Proven 6-Step Process</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Our <span className="text-brand-red">Process</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            A streamlined, transparent workflow that ensures exceptional results and an outstanding client experience from start to finish.
          </p>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center border-l-4 border-l-brand-red hover:shadow-cinema transition-all duration-300">
                <div className="text-brand-red mb-3 flex justify-center">
                  {highlight.icon}
                </div>
                <div className="text-2xl font-bold text-brand-red mb-2">{highlight.stat}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Step-by-Step <span className="text-brand-red">Workflow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures quality results and exceptional client experience.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`border-l-4 ${step.color} hover:shadow-cinema transition-all duration-300`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Step Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-brand-white font-bold text-xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-brand-red font-medium mb-3">{step.subtitle}</p>
                          <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-4">
                            <Clock className="w-4 h-4" />
                            <span>Duration: {step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Arrow between steps */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <ArrowRight className="w-8 h-8 text-brand-red" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Our <span className="text-brand-red">Process Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The benefits that make our workflow effective and client-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowBenefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-cinema transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Example */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Typical Project <span className="text-brand-red">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what you can expect for a standard video production project.
            </p>
          </div>

          <Card className="p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-brand-white text-sm font-bold">1</div>
                  <span className="font-medium text-foreground">Discovery Call</span>
                </div>
                <span className="text-muted-foreground text-sm">Day 1</span>
              </div>
              
              <div className="flex items-center justify-between py-4 border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-brand-white text-sm font-bold">2</div>
                  <span className="font-medium text-foreground">Concept & Script Development</span>
                </div>
                <span className="text-muted-foreground text-sm">Days 2-4</span>
              </div>
              
              <div className="flex items-center justify-between py-4 border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-brand-white text-sm font-bold">3</div>
                  <span className="font-medium text-foreground">Production & Editing</span>
                </div>
                <span className="text-muted-foreground text-sm">Days 5-7</span>
              </div>
              
              <div className="flex items-center justify-between py-4 border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-brand-white text-sm font-bold">4</div>
                  <span className="font-medium text-foreground">Review & Revisions</span>
                </div>
                <span className="text-muted-foreground text-sm">Days 8-9</span>
              </div>
              
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-brand-white text-sm font-bold">5</div>
                  <span className="font-medium text-foreground">Final Delivery</span>
                </div>
                <span className="text-muted-foreground text-sm">Day 10</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-center text-muted-foreground text-sm">
                <strong>Rush delivery available:</strong> Get your project completed in 48-72 hours for urgent deadlines.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Experience our proven process firsthand. Let's discuss your project and get started on creating something amazing.
          </p>
          <Link to="/contact">
            <Button variant="glass" size="xl">
              Schedule Discovery Call
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Process;