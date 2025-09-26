import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Calendar, 
  AlertTriangle, 
  Phone, 
  Database, 
  Globe,
  Stethoscope,
  MapPin,
  Clock,
  Shield,
  Users,
  Smartphone
} from "lucide-react";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: MessageSquare,
      title: "Multilingual Chat Interface",
      description: "Natural conversation in English, Hindi, and Odia with context-aware responses",
      status: "Active",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Vaccination Reminders",
      description: "Automated SMS and WhatsApp reminders for routine and emergency vaccinations",
      status: "Active", 
      color: "text-secondary"
    },
    {
      icon: AlertTriangle,
      title: "Real-time Outbreak Alerts",
      description: "Instant notifications about disease outbreaks and public health emergencies",
      status: "Active",
      color: "text-warning"
    },
    {
      icon: Phone,
      title: "SMS/WhatsApp Integration",
      description: "Reach users through popular messaging platforms for better accessibility",
      status: "Active",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Government Data Integration",
      description: "Real-time integration with health department databases and official sources",
      status: "Active",
      color: "text-success"
    },
    {
      icon: Stethoscope,
      title: "Symptom Assessment",
      description: "AI-powered preliminary health assessment with doctor referral suggestions",
      status: "Beta",
      color: "text-primary"
    }
  ];

  const technicalFeatures = [
    {
      icon: Globe,
      title: "Multi-platform Deployment",
      description: "Web, mobile, and messaging platform integration"
    },
    {
      icon: MapPin,
      title: "Location-based Services",
      description: "Nearest health center finder and local health alerts"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock health assistance and emergency guidance"
    },
    {
      icon: Shield,
      title: "Data Privacy & Security",
      description: "GDPR compliant with end-to-end encryption"
    },
    {
      icon: Users,
      title: "Community Health Tracking",
      description: "Population health monitoring and trend analysis"
    },
    {
      icon: Smartphone,
      title: "Low-bandwidth Optimization",
      description: "Works efficiently on 2G/3G networks in rural areas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Comprehensive Health Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-driven health assistant combines cutting-edge technology with government-verified information to provide comprehensive healthcare support
            </p>
          </div>

          {/* Main Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature) => (
                <Card key={feature.title} className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <div className="flex items-start justify-between mb-4">
                    <feature.icon className={`w-12 h-12 ${feature.color}`} />
                    <Badge 
                      variant={feature.status === "Active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Technical Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalFeatures.map((feature) => (
                <Card key={feature.title} className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <feature.icon className="w-10 h-10 mb-4 text-secondary" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Language Support */}
          <section className="mb-16">
            <Card className="p-8 bg-gradient-card shadow-card">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                Multilingual Support
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">EN</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">English</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete feature set with advanced medical terminology and detailed explanations
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary-light/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary">हिं</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hindi (हिंदी)</h3>
                  <p className="text-muted-foreground text-sm">
                    Native Hindi support with culturally appropriate health guidance and remedies
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-light/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">ଓଡ଼</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Odia (ଓଡ଼ିଆ)</h3>
                  <p className="text-muted-foreground text-sm">
                    Localized content for Odisha region with state-specific health programs information
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Integration Details */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary">Government Integration</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Data Sources</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ministry of Health & Family Welfare</li>
                  <li>• State Health Department, Odisha</li>
                  <li>• WHO Guidelines and Protocols</li>
                  <li>• National Health Mission Database</li>
                  <li>• ICMR Research Publications</li>
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Compliance & Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Digital India Guidelines Compliant</li>
                  <li>• Healthcare Data Privacy Standards</li>
                  <li>• Government Cloud (MeghRaj) Ready</li>
                  <li>• Accessibility Standards (WCAG 2.1)</li>
                  <li>• Regional Language Computing Standards</li>
                </ul>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;