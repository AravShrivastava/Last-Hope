import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import reikywLogo from "@/assets/reikyu-logo.png";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Arjun Patel",
      role: "Team Lead & AI Developer",
      expertise: "Natural Language Processing, Machine Learning",
      avatar: "AP"
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      expertise: "React, UI/UX Design, Multilingual Interfaces",
      avatar: "PS"
    },
    {
      name: "Ravi Kumar",
      role: "Backend Developer", 
      expertise: "Python, API Development, Database Management",
      avatar: "RK"
    },
    {
      name: "Sneha Das",
      role: "Health Research Specialist",
      expertise: "Medical Information, Regional Health Policies",
      avatar: "SD"
    },
    {
      name: "Amit Singh",
      role: "DevOps & Integration",
      expertise: "Cloud Deployment, Government Systems Integration",
      avatar: "AS"
    },
    {
      name: "Kavya Nair",
      role: "Language Specialist",
      expertise: "Hindi & Odia Translation, Cultural Adaptation",
      avatar: "KN"
    }
  ];

  const problemStatement = {
    title: "SIH Problem Statement ID: 1234",
    category: "Healthcare & Medical Technology",
    organization: "Ministry of Health & Family Welfare, Government of India",
    description: "Develop an AI-driven multilingual chatbot for public health awareness and disease prevention in rural and urban communities of India"
  };

  const objectives = [
    "Break language barriers in healthcare communication",
    "Provide 24/7 accessible health information and guidance",
    "Reduce misinformation through verified health content",
    "Enable early disease detection and prevention",
    "Integrate with government health databases and systems",
    "Support vaccination campaigns and outbreak management"
  ];

  const technologies = [
    { name: "React & TypeScript", category: "Frontend" },
    { name: "Natural Language Processing", category: "AI/ML" },
    { name: "Multilingual Support", category: "Localization" },
    { name: "Government APIs", category: "Integration" },
    { name: "Real-time Messaging", category: "Communication" },
    { name: "Cloud Infrastructure", category: "Deployment" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <img 
                src={reikywLogo} 
                alt="Reikyu Logo" 
                className="h-20 w-20 object-contain mr-4"
              />
              <div>
                <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Team Reikyu
                </h1>
                <p className="text-lg text-muted-foreground">Smart India Hackathon 2024</p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging healthcare gaps through AI-powered multilingual communication
            </p>
          </div>

          {/* Problem Statement */}
          <section className="mb-16">
            <Card className="p-8 bg-gradient-card shadow-card">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-3 text-primary" />
                <h2 className="text-3xl font-bold text-primary">Problem Statement</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{problemStatement.title}</h3>
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary">{problemStatement.category}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    <strong>Organization:</strong> {problemStatement.organization}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {problemStatement.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Project Objectives</h3>
                  <ul className="space-y-2">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Team Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
              <Users className="w-8 h-8 mr-3" />
              Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name} className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-primary">{member.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                  <div className="flex space-x-2">
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Mail className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
              <Lightbulb className="w-8 h-8 mr-3" />
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <Card key={tech.name} className="p-4 bg-gradient-card shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{tech.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Project Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
              <Award className="w-8 h-8 mr-3" />
              Expected Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Social Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Improved health literacy in rural communities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Reduced healthcare misinformation spread</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Enhanced preventive healthcare adoption</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Better vaccination coverage rates</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Government Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Reduced healthcare system burden</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Enhanced disease surveillance capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Improved public health campaign effectiveness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time health data collection</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Acknowledgments */}
          <section>
            <Card className="p-8 bg-gradient-card shadow-card text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Acknowledgments</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We extend our gratitude to the <strong>Government of Odisha</strong> and the <strong>Department of Health & Family Welfare</strong> for their support and guidance in developing this healthcare solution.
                </p>
                <p className="text-muted-foreground">
                  Special thanks to <strong>Smart India Hackathon 2024</strong> for providing the platform to address critical healthcare challenges through innovative technology solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Badge variant="secondary">Smart India Hackathon 2024</Badge>
                  <Badge variant="secondary">Government of Odisha</Badge>
                  <Badge variant="secondary">Ministry of Health & Family Welfare</Badge>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;