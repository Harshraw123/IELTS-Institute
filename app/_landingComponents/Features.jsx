import { 
    Brain, 
    MessageCircle, 
    FileText, 
    Video, 
    BarChart, 
    Clock, 
    CheckCircle, 
    Zap 
  } from "lucide-react";
  import { features } from "@/lib/features";
  
  const Features = () => {
   
  
    const stats = [
      { icon: BarChart, value: "15+", label: "Practice Modules" },
      { icon: Clock, value: "24/7", label: "AI Support" },
      { icon: CheckCircle, value: "1000+", label: "Practice Questions" },
      { icon: Zap, value: "Instant", label: "Feedback" },
    ];
  
    return (
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-shadow">
              Revolutionize Your{" "}
              <span className="gradient-text">IELTS Preparation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of language learning with our AI-powered
              platform designed to maximize your IELTS success rate.
            </p>
          </div>
  
          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-lg transition duration-300 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6`}
                >
                  <feature.icon className={`h-8 w-8 text-blue-500 text-shadow`} />
                </div>
  
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
  
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
  
                {/* Hover Animation Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                  <div className="flex items-center text-primary font-semibold">
                    Learn More
                    <Zap className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Stats Section */}
          <div className="p-8 rounded-3xl bg-card/70 border border-border backdrop-blur-md shadow-md animate-scale-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <stat.icon className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    );
  };
  
  export default Features;
  