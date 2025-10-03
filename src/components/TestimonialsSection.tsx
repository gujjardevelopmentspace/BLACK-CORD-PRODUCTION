import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    company: "TechTok",
    avatar: "SC",
    rating: 5,
    content: "Honestly, I was skeptical at first. But these guys? They turned my boring tech reviews into content that actually gets shared. My engagement went through the roof!",
    metrics: "2M+ subscribers gained",
    verified: true
  },
  {
    name: "Marcus Rodriguez",
    role: "Business Owner",
    company: "Magnates Media",
    avatar: "MR",
    rating: 5,
    content: "I've worked with a lot of editors, but Black Cord just gets it. They understand what makes people watch until the end. My retention rates are insane now.",
    metrics: "$500K+ revenue generated",
    verified: true
  },
  {
    name: "Emily Johnson",
    role: "Influencer",
    company: "Cash Cow Channel",
    avatar: "EJ",
    rating: 5,
    content: "We needed something that would make people care about sustainability. Black Cord delivered videos that actually moved people to action. Game changer.",
    metrics: "10M+ average views",
    verified: true
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    company: "Global Brands Inc",
    avatar: "DK",
    rating: 5,
    content: "The documentary-style video they made for our product launch was incredible. It helped us secure our Series A funding. Worth every penny.",
    metrics: "300% brand awareness increase",
    verified: true
  },
  {
    name: "Lisa Thompson",
    role: "YouTube Creator",
    company: "Lifestyle Channel",
    avatar: "LT",
    rating: 5,
    content: "My Instagram Reels were getting maybe 10K views. After working with Black Cord? We're hitting 500K+ regularly. They know what works.",
    metrics: "24h average delivery",
    verified: true
  },
  {
    name: "Alex Morgan",
    role: "Entrepreneur",
    company: "Startup Ventures",
    avatar: "AM",
    rating: 5,
    content: "Fast turnaround, incredible quality, and they actually listen to feedback. These aren't just editors - they're strategic partners.",
    metrics: "$2M funding raised",
    verified: true
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white relative overflow-hidden osmo-bg">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="osmo-floating top-16 left-12 w-10 h-10 border border-red-600/08 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-24 right-16 w-14 h-14 bg-red-600/06 rounded-lg magnetic-element"></div>
        <div className="osmo-floating bottom-20 left-1/3 w-8 h-8 border border-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-16 right-1/4 w-12 h-12 bg-red-600/08 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-1/2 left-16 w-6 h-6 border border-red-600/12 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-1/3 right-20 w-10 h-10 bg-red-600/10 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-2/3 left-1/2 w-8 h-8 border border-red-600/08 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-1/3 right-1/6 w-16 h-16 bg-red-600/04 rounded-lg magnetic-element"></div>
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '12%', animationDelay: '1s'}}></div>
        <div className="osmo-particle" style={{left: '22%', animationDelay: '3s'}}></div>
        <div className="osmo-particle" style={{left: '32%', animationDelay: '5s'}}></div>
        <div className="osmo-particle" style={{left: '42%', animationDelay: '7s'}}></div>
        <div className="osmo-particle" style={{left: '52%', animationDelay: '9s'}}></div>
        <div className="osmo-particle" style={{left: '62%', animationDelay: '11s'}}></div>
        <div className="osmo-particle" style={{left: '72%', animationDelay: '13s'}}></div>
        <div className="osmo-particle" style={{left: '82%', animationDelay: '15s'}}></div>
        <div className="osmo-particle" style={{left: '92%', animationDelay: '17s'}}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    Don't Just Take Our Word For It
                  </h2>
                  <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                    Here's what real creators are saying about working with us
                  </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  },
                },
              }}
            >
              <Card className="h-full bg-white border border-neutral-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg group interactive-glow">
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {testimonial.verified && (
                      <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <blockquote className="text-neutral-700 mb-6 flex-grow italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                      {testimonial.metrics}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-neutral-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-sm text-neutral-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-sm text-neutral-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">24h</div>
            <div className="text-sm text-neutral-600">Avg Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5★</div>
            <div className="text-sm text-neutral-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
