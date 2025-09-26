import React, { useState, useRef, useEffect } from "react";
import { Send, Mic, Loader2, Heart, Thermometer, Calendar, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import HealthNotificationBanner from "@/components/HealthNotificationBanner"; // <-- MAKE SURE this path is correct

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  isScrolled?: boolean;
  className?: string;
}

const ChatInterface = ({ isScrolled = false, className = "" }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto?.randomUUID?.() ?? String(Date.now()),
      text: "Hello! I'm your multilingual health assistant. How can I help you today? मैं आपकी स्वास्थ्य सहायता कैसे कर सकता हूं?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickActions = [
    { text: "Check Symptoms", icon: Thermometer, color: "text-accent" },
    { text: "Vaccination Reminder", icon: Calendar, color: "text-secondary" },
    { text: "Outbreak Alerts", icon: AlertTriangle, color: "text-warning" },
    { text: "Health Tips", icon: Heart, color: "text-success" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Robust TTS that waits for voices if necessary
  const speakText = (textToSpeak: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.warn("Speech synthesis not supported in this environment.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1.0;

    const applyVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices() || [];
      const hindiVoice = voices.find((v) => v.lang === "hi-IN");
      const enVoice = voices.find((v) => v.lang.startsWith("en-IN") || v.lang.startsWith("en-US"));

      const hasHindi = /[ऀ-ॿ]|बुखार|टीका|कोविड|हिंदी|ओड़िया/.test(textToSpeak);

      if (hasHindi) {
        utterance.voice = hindiVoice ?? enVoice ?? undefined;
        utterance.lang = "hi-IN";
      } else {
        utterance.voice = enVoice ?? hindiVoice ?? undefined;
        utterance.lang = enVoice?.lang ?? "en-US";
      }

      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      applyVoiceAndSpeak();
    } else {
      const onVoicesChanged = () => {
        applyVoiceAndSpeak();
        window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
      };
      window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
      // fallback attempt
      setTimeout(() => {
        if (window.speechSynthesis.getVoices().length > 0) {
          applyVoiceAndSpeak();
          window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
        }
      }, 500);
    }
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    if (input.includes("fever") || input.includes("बुखार")) {
      return "For fever management: Rest, drink plenty of fluids, and take paracetamol if needed. If fever persists above 102°F for more than 3 days, consult a doctor. बुखार के लिए: आराम करें, तरल पदार्थ पिएं।";
    }
    if (input.includes("vaccine") || input.includes("टीका")) {
      return "Vaccination is crucial for disease prevention. Based on your age group, you may need routine immunizations. Visit your nearest health center for the vaccination schedule. टीकाकरण रोग की रोकथाम के लिए महत्वपूर्ण है।";
    }
    if (input.includes("covid") || input.includes("कोविड")) {
      return "COVID-19 precautions: Wear masks, maintain social distance, wash hands frequently, and get vaccinated. If symptoms appear, isolate and consult healthcare provider. कोविड-19 से बचाव: मास्क पहनें।";
    }
    return "Thank you for your question. For personalized medical advice, please consult with a healthcare professional. I can provide general health information and guide you to appropriate resources. क्या मैं आपकी और कोई सहायता कर सकता हूं?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    const userMessage: Message = {
      id: crypto?.randomUUID?.() ?? String(Date.now()),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Simulate backend latency
    setTimeout(() => {
      const responseText = getBotResponse(inputText);
      const botResponse: Message = {
        id: crypto?.randomUUID?.() ?? String(Date.now() + 1),
        text: responseText,
        isBot: true,
        timestamp: new Date(),
      };
      speakText(responseText);
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => setInputText(action);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <HealthNotificationBanner />

      {messages.length > 1 && (
        <Card className={`mb-6 transition-all duration-500 ${isScrolled ? "max-h-96 overflow-y-auto" : "max-h-[60vh] overflow-y-auto"} bg-gradient-card shadow-card border-border/50`}>
          <div className="p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-fade-in`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${message.isBot ? "bg-muted text-muted-foreground" : "bg-gradient-primary text-primary-foreground"} shadow-sm`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">{message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-muted p-3 rounded-2xl">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </Card>
      )}

      {!isScrolled && messages.length === 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 animate-slide-up">
          {quickActions.map((action) => (
            <Button
              key={action.text}
              variant="outline"
              className="flex flex-col items-center p-4 h-auto space-y-2 bg-gradient-card hover:shadow-floating transition-smooth border-border/50"
              onClick={() => handleQuickAction(action.text)}
            >
              <action.icon className={`w-6 h-6 ${action.color}`} />
              <span className="text-xs font-medium text-center">{action.text}</span>
            </Button>
          ))}
        </div>
      )}

      <Card className={`p-4 bg-gradient-card shadow-floating border-border/50 ${isScrolled ? "shadow-hero" : ""}`}>
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your health question... / अपना स्वास्थ्य प्रश्न लिखें..."
              className="w-full pr-12 bg-background border-border/50 focus:border-primary focus:ring-primary/20"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              onClick={() => window.speechSynthesis.cancel()}
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>

          <Button onClick={handleSendMessage} disabled={!inputText.trim() || isLoading} className="bg-gradient-primary hover:shadow-floating transition-smooth">
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <div className="mt-2 text-xs text-muted-foreground text-center">Available in English, Hindi (हिंदी), and Odia (ଓଡ଼ିଆ)</div>
      </Card>
    </div>
  );
};

export default ChatInterface;
