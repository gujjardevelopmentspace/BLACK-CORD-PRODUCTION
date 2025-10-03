import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ClientLogin = () => {
  return (
    <div className="min-h-screen bg-background osmo-bg">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh"></div>
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="osmo-floating top-20 left-10 w-12 h-12 border border-red-600/10 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-40 right-20 w-16 h-16 bg-red-600/06 rounded-lg magnetic-element"></div>
        <div className="osmo-floating bottom-32 left-1/4 w-8 h-8 border border-red-600/12 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-20 right-1/3 w-14 h-14 bg-red-600/08 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-1/2 left-8 w-10 h-10 border border-red-600/06 rounded-full magnetic-element"></div>
        <div className="osmo-floating top-1/3 right-1/4 w-12 h-12 bg-red-600/12 rounded-lg magnetic-element"></div>
        <div className="osmo-floating top-2/3 left-1/2 w-6 h-6 border border-red-600/15 rounded-full magnetic-element"></div>
        <div className="osmo-floating bottom-1/4 right-1/6 w-18 h-18 bg-red-600/04 rounded-lg magnetic-element"></div>
        
        {/* Advanced Particles */}
        <div className="osmo-particle" style={{left: '28%', animationDelay: '2.5s'}}></div>
        <div className="osmo-particle" style={{left: '38%', animationDelay: '4.5s'}}></div>
        <div className="osmo-particle" style={{left: '48%', animationDelay: '6.5s'}}></div>
        <div className="osmo-particle" style={{left: '58%', animationDelay: '8.5s'}}></div>
        <div className="osmo-particle" style={{left: '68%', animationDelay: '10.5s'}}></div>
        <div className="osmo-particle" style={{left: '78%', animationDelay: '12.5s'}}></div>
        <div className="osmo-particle" style={{left: '88%', animationDelay: '14.5s'}}></div>
        <div className="osmo-particle" style={{left: '98%', animationDelay: '16.5s'}}></div>
      </div>

      <Navigation />
      
      <main className="pt-32 lg:pt-24 relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in-up">
              <h1 className="text-4xl font-bold text-black mb-4">Client Portal</h1>
              <p className="text-muted-foreground">
                Access your projects, track progress, and download completed videos.
              </p>
            </div>

            {/* Login Form */}
            <Card className="bg-white border border-neutral-200 animate-scale-in">
              <div className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-500 transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-black font-medium">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                      className="bg-white border-neutral-300 text-black placeholder:text-neutral-500 focus:border-red-500 transition-smooth"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-neutral-600">Remember me</span>
                    </label>
                    <Button variant="link" className="text-sm p-0 text-red-600">
                      Forgot password?
                    </Button>
                  </div>

                  <Button 
                    type="submit" 
                    variant="member" 
                    size="lg" 
                    className="w-full"
                  >
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-neutral-600">
                    Don't have an account?{" "}
                    <Button variant="link" className="p-0 text-red-600">Contact us to get started</Button>
                  </p>
                </div>
              </div>
            </Card>

            {/* Features */}
            <div className="mt-12 animate-fade-in-up">
              <h2 className="text-xl font-semibold text-center text-black mb-6">
                What you get with client portal access:
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: "📊", title: "Project Dashboard", desc: "Track all your video projects in one place" },
                  { icon: "💬", title: "Direct Communication", desc: "Chat directly with your dedicated editor" },
                  { icon: "📁", title: "File Management", desc: "Upload source files and download completed videos" },
                  { icon: "🔄", title: "Revision Tracking", desc: "Request and track revisions seamlessly" },
                  { icon: "📈", title: "Performance Analytics", desc: "View video performance metrics and insights" }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="flex gap-4 p-4 bg-white rounded-lg border border-neutral-200 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-black mb-4">
                New to Black Cord Production?
              </h3>
              <Link to="http://localhost:8081/start-project">
                <Button variant="about" size="lg">
                  Start Your First Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientLogin;