import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section id="home" className="  min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="flex items-center space-x-2 mb-6">
            <div className="flex space-x-1">
      <Star className="h-5 w-5 text-yellow-400 fill-current" />
      <Star className="h-5 w-5 text-yellow-400 fill-current" />
      <Star className="h-5 w-5 text-yellow-400 fill-current" />
      <Star className="h-5 w-5 text-yellow-400 fill-current" />
      <Star className="h-5 w-5 text-yellow-400 fill-current" />
    </div>
              <span className="text-muted-foreground font-medium">
                Trusted by 50,000+ students worldwide
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-shadow">
              Master IELTS with{" "}
              <span className="gradient-text">AI-Powered</span> Learning
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your IELTS preparation with our cutting-edge AI technology. 
              Get personalized feedback, real-time band score predictions, and 
              achieve your dream score faster than ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-primary group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">8.5</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Band Score</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">98%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="animate-fade-in-delay">
            <div className="relative">
              {/* Main Image Container with Tailwind Glass Effect */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <img
                  src={'/hero.png'}
                  alt="Students learning IELTS with modern technology"
                  className="rounded-xl w-full h-auto shadow-strong"
                />
              </div>
              
              {/* Floating Achievement Badge with Tailwind Glass Effect */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-black/20 rounded-2xl p-4 animate-scale-in">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text  mb-1">Band 9</div>
                  <div className="text-xs text-white">Achiever</div>
                </div>
              </div>

              {/* Floating Progress Indicator with Tailwind Glass Effect */}
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-black/20 rounded-2xl p-4 animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500  flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Real-time Feedback</div>
                    <div className="text-xs text-white">Instant Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;