import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickReplies = [
  "Internet Plans",
  "Cable TV Options",
  "Streaming Services",
  "Check Coverage",
  "Contact Support",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Net-soft Communications. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerText = messageText.toLowerCase();

      if (lowerText.includes("internet") || lowerText.includes("plan")) {
        botResponse =
          "I can help you with internet plans! We offer guidance on various high-speed internet options. Would you like to speak with a specialist? Call us at 1-800-NETSOFT or visit our Internet page for more details.";
      } else if (lowerText.includes("cable") || lowerText.includes("tv")) {
        botResponse =
          "Looking for cable TV assistance? We provide support for HD, 4K, and streaming options. Contact us at 1-800-NETSOFT or check our Cable TV page for more information.";
      } else if (lowerText.includes("streaming")) {
        botResponse =
          "We can help you with streaming services! Our team provides guidance on various streaming platforms. Call 1-800-NETSOFT or visit our Streaming page to learn more.";
      } else if (lowerText.includes("coverage") || lowerText.includes("area")) {
        botResponse =
          "To check service availability in your area, please visit our Coverage page or call us directly at 1-800-NETSOFT. We're available nationwide!";
      } else if (lowerText.includes("contact") || lowerText.includes("support")) {
        botResponse =
          "You can reach us at:\n📞 Phone: 1-800-NETSOFT\n📧 Email: support@netsoftcomm.com\n\nWe're here to help 24/7!";
      } else {
        botResponse =
          "Thank you for your message! For immediate assistance, please call us at 1-800-NETSOFT or email support@netsoftcomm.com. Our team is ready to help!";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white animate-bounce group-hover:animate-none" />
        )}
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-6 z-50 w-[90vw] sm:w-96 h-[400px] max-h-[70vh] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Net-soft Chat</h3>
                  <p className="text-xs text-white/80">We typically reply instantly</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-[10px] mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-3 bg-muted/30 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center justify-center gap-4 mt-3">
                <a
                  href="tel:1-800-638-7638"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Call Now
                </a>
                <a
                  href="mailto:support@netsoftcomm.com"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
