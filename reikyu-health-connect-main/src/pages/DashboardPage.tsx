import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  Calendar,
  Heart,
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Health Etiquettes Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Essential health practices for disease prevention and wellness
            </p>
          </div>

          {/* Health Etiquettes */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Hand Hygiene</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wash hands for 20 seconds with soap</li>
                  <li>• Use sanitizer when soap unavailable</li>
                  <li>• Clean hands before eating</li>
                  <li>• Avoid touching face with dirty hands</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-warning mr-3" />
                  <h3 className="text-xl font-semibold">Respiratory Etiquette</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cover cough/sneeze with elbow</li>
                  <li>• Use tissues and dispose properly</li>
                  <li>• Wear mask when sick</li>
                  <li>• Maintain 1-meter distance</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-xl font-semibold">Vaccination</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Follow vaccination schedules</li>
                  <li>• Keep vaccination records safe</li>
                  <li>• Get seasonal flu shots</li>
                  <li>• Consult doctor for travel vaccines</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold">Food Safety</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wash fruits and vegetables</li>
                  <li>• Cook food at safe temperatures</li>
                  <li>• Store food properly</li>
                  <li>• Avoid eating raw/undercooked food</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Personal Hygiene</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bathe regularly with soap</li>
                  <li>• Keep nails clean and trimmed</li>
                  <li>• Brush teeth twice daily</li>
                  <li>• Wear clean clothes</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Environmental Health</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Keep surroundings clean</li>
                  <li>• Dispose garbage properly</li>
                  <li>• Avoid stagnant water</li>
                  <li>• Ensure proper ventilation</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Mental Wellness</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Practice stress management techniques</li>
                  <li>• Maintain social connections</li>
                  <li>• Seek help when needed</li>
                  <li>• Practice mindfulness and meditation</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-xl font-semibold">Physical Activity</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exercise for 30 minutes daily</li>
                  <li>• Take stairs instead of elevators</li>
                  <li>• Stretch regularly during work</li>
                  <li>• Walk or cycle for short distances</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-warning mr-3" />
                  <h3 className="text-xl font-semibold">Sleep Hygiene</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sleep 7-8 hours daily</li>
                  <li>• Maintain consistent sleep schedule</li>
                  <li>• Avoid screens before bedtime</li>
                  <li>• Keep bedroom cool and dark</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold">Water Safety</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Drink boiled or filtered water</li>
                  <li>• Store water in clean containers</li>
                  <li>• Avoid ice from unsafe sources</li>
                  <li>• Check water quality regularly</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Sun Protection</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use sunscreen with SPF 30+</li>
                  <li>• Wear protective clothing outdoors</li>
                  <li>• Avoid peak sun hours (10am-4pm)</li>
                  <li>• Stay hydrated in hot weather</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Injury Prevention</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use safety equipment when needed</li>
                  <li>• Keep first aid kit accessible</li>
                  <li>• Follow traffic safety rules</li>
                  <li>• Maintain good posture at work</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Health Tips */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary">Quick Health Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Daily Practices</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Drink 8-10 glasses of clean water daily</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Exercise for at least 30 minutes daily</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Get 7-8 hours of quality sleep</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Eat a balanced diet with fruits and vegetables</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Emergency Contacts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-background rounded border">
                    <span className="font-medium">Emergency Helpline</span>
                    <span className="text-primary font-bold">108</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded border">
                    <span className="font-medium">COVID Helpline</span>
                    <span className="text-primary font-bold">1075</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded border">
                    <span className="font-medium">Women Helpline</span>
                    <span className="text-primary font-bold">1091</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded border">
                    <span className="font-medium">Child Helpline</span>
                    <span className="text-primary font-bold">1098</span>
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

export default DashboardPage;