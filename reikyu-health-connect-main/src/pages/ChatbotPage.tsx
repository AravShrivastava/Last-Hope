import NavBar from "@/components/NavBar";
import ChatInterface from "@/components/ChatInterface";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Globe, Zap, Shield } from "lucide-react";

const ChatbotPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Chat naturally about your health concerns in your preferred language"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in English, Hindi, and Odia for better accessibility"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get immediate health guidance and information 24/7"
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "All responses based on government-approved health guidelines"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Health Chatbot Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Get personalized health guidance, vaccination reminders, and outbreak alerts in your preferred language
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">English</Badge>
              <Badge variant="secondary" className="text-sm">हिंदी</Badge>
              <Badge variant="secondary" className="text-sm">ଓଡ଼ିଆ</Badge>
            </div>
          </div>

          {/* Chatbot Interface */}
          <div className="mb-16">
            <ChatInterface className="animate-fade-in" />
          </div>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Chatbot Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Example Conversations */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Example Conversations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-lg font-semibold mb-4 text-secondary">Symptom Checking</h3>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm"><strong>User:</strong> I have fever and headache</p>
                  </div>
                  <div className="bg-primary-light/20 p-3 rounded-lg">
                    <p className="text-sm"><strong>Bot:</strong> For fever management: Rest, drink plenty of fluids, and take paracetamol if needed. If fever persists above 102°F for more than 3 days, consult a doctor.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-lg font-semibold mb-4 text-secondary">Vaccination Inquiry</h3>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm"><strong>User:</strong> When should I get my next COVID vaccine?</p>
                  </div>
                  <div className="bg-primary-light/20 p-3 rounded-lg">
                    <p className="text-sm"><strong>Bot:</strong> Based on current guidelines, booster shots are recommended every 6-12 months. Visit your nearest health center for personalized vaccination schedule.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChatbotPage;