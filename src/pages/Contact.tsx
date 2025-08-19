import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Baji Live Gaming Center", "123 Casino Boulevard", "Baji Live, China 100000"],
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+86 10 1234 5678", "+86 10 8765 4321", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@bajilive-casino.com", "vip@bajilive-casino.com", "Response within 2 hours"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Online Support", "Live Chat Available", "Phone: 24/7"],
    },
  ];

  const socialLinks = [
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "YouTube", url: "#", icon: "📺" },
    { name: "Telegram", url: "#", icon: "💬" },
    { name: "Discord", url: "#", icon: "🎮" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our support team. We're here to help you 24/7
          </p>
        </div>
      </section>

      {/* Quick Support Banner */}
      <section className="bg-primary/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Need Immediate Help?</h3>
                <p className="text-muted-foreground">Our live chat is the fastest way to get support</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="casino">
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat
              </Button>
              <Button variant="casino-outline">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="game-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>
                  <Button type="submit" variant="casino" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="game-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <Card className="game-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-4">
                  Stay connected for the latest updates, promotions, and gaming news
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex flex-col items-center p-4 rounded-lg border border-border hover:border-primary casino-transition text-center"
                    >
                      <span className="text-2xl mb-2">{social.icon}</span>
                      <span className="text-sm text-foreground font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="game-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find quick answers to common questions
                </p>
                <Button variant="casino-outline" asChild>
                  <a href="/faq">Visit FAQ Page</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;