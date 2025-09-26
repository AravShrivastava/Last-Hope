import { useState, useEffect } from "react";
import { ArrowDown, Stethoscope, Users, Globe, Shield } from "lucide-react";
import NavBar from "@/components/NavBar";
import ChatInterface from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-health-chatbot.jpg";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && !isScrolled) {
        setIsScrolled(true);
        setTimeout(() => setShowContent(true), 400);
      } else if (scrollY <= 100 && isScrolled) {
        setShowContent(false);
        setTimeout(() => setIsScrolled(false), 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section with Chatbot */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Hero Content */}
        <div className={`relative z-10 w-full transition-all duration-800 ${
          isScrolled ? "pt-20" : "pt-32"
        }`}>
          {/* Title Section */}
          <div className={`text-center mb-12 transition-all duration-500 ${
            isScrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-fade-in">
              AI-Driven Health Awareness Assistant
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Breaking language barriers in healthcare. Get personalized health guidance in English, Hindi, and Odia.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <Button className="bg-gradient-primary hover:shadow-floating transition-smooth">
                Start Conversation
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary-light/20">
                Learn More
              </Button>
            </div>
          </div>

          {/* Chatbot Interface */}
          <div className={`transition-all duration-800 ${
            isScrolled 
              ? "fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-40" 
              : "relative"
          }`}>
            <ChatInterface isScrolled={isScrolled} />
          </div>

          {/* Scroll Indicator */}
          {!isScrolled && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
              <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      {showContent && (
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Problem Statement */}
            <Card className="p-8 mb-12 bg-gradient-card shadow-card">
              <h2 className="text-3xl font-bold text-center mb-6 text-primary">
                Solving Healthcare Communication Barriers
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rural and urban communities in India face significant barriers in accessing accurate health information due to language constraints and misinformation spread through social media and word-of-mouth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A multilingual AI chatbot that provides verified health information, vaccination reminders, and real-time outbreak alerts in English, Hindi, and Odia, making healthcare accessible to everyone.
                  </p>
                </div>
              </div>
            </Card>

            {/* Key Features Preview */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-primary">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
                  <p className="text-muted-foreground">Communicate in English, Hindi, and Odia for better accessibility</p>
                </Card>
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <Stethoscope className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">Health Guidance</h3>
                  <p className="text-muted-foreground">Get reliable health information and symptom checking</p>
                </Card>
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">Government Verified</h3>
                  <p className="text-muted-foreground">Information sourced from official health departments</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-muted py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            Built by Team Reikyu for Smart India Hackathon 2024
          </p>
          <p className="text-sm text-muted-foreground">
            In collaboration with Government of Odisha • Department of Health & Family Welfare
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
