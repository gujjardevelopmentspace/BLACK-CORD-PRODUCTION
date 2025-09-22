import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter Pack",
      price: "$299",
      originalPrice: "$399",
      period: "per project",
      description: "Perfect for small businesses and startups looking to create their first professional video content.",
      features: [
        "Up to 2 minutes video length",
        "Basic color correction",
        "Standard audio enhancement",
        "2 revisions included",
        "3-5 day turnaround",
        "HD 1080p export",
        "Email support"
      ],
      notIncluded: [
        "Motion graphics",
        "Custom animations",
        "Rush delivery"
      ],
      cta: "Choose Starter",
      popular: false,
      color: "border-muted-foreground"
    },
    {
      name: "Growth Pack",
      price: "$599",
      originalPrice: "$799", 
      period: "per project",
      description: "Ideal for growing businesses that need high-quality content to scale their marketing efforts.",
      features: [
        "Up to 5 minutes video length",
        "Professional color grading",
        "Premium audio mixing",
        "Basic motion graphics",
        "5 revisions included",
        "2-3 day turnaround",
        "4K export available",
        "Priority support",
        "Multiple format exports"
      ],
      notIncluded: [
        "Complex animations",
        "Voice-over services"
      ],
      cta: "Choose Growth",
      popular: true,
      color: "border-brand-red"
    },
    {
      name: "Premium Pack",
      price: "$1,299",
      originalPrice: "$1,699",
      period: "per project", 
      description: "For established brands requiring cinematic quality and comprehensive video production services.",
      features: [
        "Up to 10 minutes video length",
        "Hollywood-grade color grading",
        "Professional audio mastering",
        "Advanced motion graphics",
        "Custom animations",
        "Unlimited revisions",
        "24-48 hour turnaround",
        "8K export capability",
        "Dedicated project manager",
        "All platform formats",
        "Source files included"
      ],
      notIncluded: [],
      cta: "Choose Premium",
      popular: false,
      color: "border-cinema-red"
    },
    {
      name: "Enterprise Pack",
      price: "Custom",
      originalPrice: null,
      period: "contact us",
      description: "Tailored solutions for large organizations with complex video production needs and ongoing requirements.",
      features: [
        "Unlimited video length",
        "Cinema-grade production",
        "Custom brand integration",
        "Advanced VFX & 3D",
        "Voice-over in multiple languages",
        "Unlimited revisions",
        "Same-day rush delivery",
        "White-label solutions",
        "24/7 dedicated support",
        "Monthly retainer options",
        "Complete source materials",
        "Performance analytics"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
      color: "border-cinema-black"
    }
  ];

  const subscriptionOptions = [
    {
      name: "Monthly Subscription",
      price: "$1,499",
      period: "per month",
      description: "Ongoing video production support with priority handling and volume discounts.",
      features: [
        "3 videos per month included",
        "20% discount on additional videos",
        "Priority queue placement",
        "Dedicated account manager",
        "Brand asset library",
        "Monthly strategy calls"
      ]
    },
    {
      name: "Quarterly Package",
      price: "$3,999",
      period: "per quarter",
      description: "Best value for consistent content creation with significant savings and premium benefits.",
      features: [
        "10 videos per quarter included",
        "30% discount on additional videos",
        "Expedited turnaround",
        "Creative consultation included",
        "Performance reporting",
        "Flexible video distribution"
      ],
      savings: "Save $500+"
    }
  ];

  const addOnServices = [
    { name: "Rush Delivery (24h)", price: "$299" },
    { name: "Professional Voice-Over", price: "$199" },
    { name: "Custom Animation Package", price: "$399" },
    { name: "Multi-Language Subtitles", price: "$99" },
    { name: "Social Media Cuts (5 versions)", price: "$149" },
    { name: "Advanced VFX Package", price: "$599" }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-brand-white" />
            <span className="text-brand-white text-sm font-medium">Transparent Pricing, No Hidden Fees</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Our <span className="text-brand-red">Pricing</span>
          </h1>
          <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
            Choose the perfect package for your video production needs. From startups to enterprises, we have solutions that deliver exceptional value.
          </p>
        </div>
      </section>

      {/* Project-Based Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Project-Based <span className="text-brand-red">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One-time project pricing with everything you need to create professional video content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative p-8 hover:shadow-cinema transition-all duration-300 border-l-4 ${plan.color} ${plan.popular ? 'ring-2 ring-brand-red ring-opacity-50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-red text-brand-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-brand-red">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm">{plan.period}</div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Add-ons available:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-4 h-4 border border-muted-foreground rounded flex-shrink-0 mt-0.5"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Subscription <span className="text-brand-red">Options</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For businesses with ongoing video content needs. Save money and get priority service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subscriptionOptions.map((option, index) => (
              <Card key={index} className="p-8 hover:shadow-cinema transition-all duration-300 border-l-4 border-l-brand-red">
                {option.savings && (
                  <div className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Crown className="w-4 h-4" />
                    <span>{option.savings}</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{option.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-brand-red">{option.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{option.period}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{option.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Add-on <span className="text-brand-red">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your video with additional services and premium features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOnServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-cinema transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground group-hover:text-brand-red transition-colors">
                    {service.name}
                  </h4>
                  <div className="text-brand-red font-bold">{service.price}</div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Project
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pricing <span className="text-brand-red">FAQ</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">What's included in the base price?</h4>
              <p className="text-muted-foreground text-sm">Each package includes professional editing, color correction, audio enhancement, and the specified number of revisions. All source materials and project files are provided.</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Do you offer payment plans?</h4>
              <p className="text-muted-foreground text-sm">Yes, we offer flexible payment options including 50% upfront and 50% on delivery for projects over $500. Enterprise clients can discuss custom payment terms.</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">What if I need rush delivery?</h4>
              <p className="text-muted-foreground text-sm">Rush delivery is available for an additional $299. This guarantees your project will be completed within 24-48 hours without compromising quality.</p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Can I upgrade my package after starting?</h4>
              <p className="text-muted-foreground text-sm">Absolutely! You can upgrade your package at any time during the project. We'll adjust the pricing and deliverables accordingly.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-white/80 mb-8 max-w-2xl mx-auto">
            Choose your package and let's create something amazing together. Custom quotes available for unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glass" size="xl">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;