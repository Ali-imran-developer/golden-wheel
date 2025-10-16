import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  FileText,
  Shield,
  CreditCard,
  Users,
  Search
} from "lucide-react";

const HelpCenter = () => {
  const helpCategories = [
    {
      icon: Users,
      title: "Account & Registration",
      description: "Learn how to create and manage your account",
      articles: 12,
    },
    {
      icon: CreditCard,
      title: "Deposits & Withdrawals",
      description: "Information about payment methods and transactions",
      articles: 8,
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Keep your account safe and secure",
      articles: 6,
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      description: "Understand our policies and guidelines",
      articles: 10,
    },
    {
      icon: HelpCircle,
      title: "Gaming Rules",
      description: "Rules and regulations for all our games",
      articles: 15,
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "Get help with technical issues",
      articles: 9,
    },
  ];

  const popularArticles = [
    "How to create an account?",
    "What payment methods do you accept?",
    "How to verify my identity?",
    "What are the withdrawal limits?",
    "How to enable two-factor authentication?",
    "What is responsible gaming?",
    "How to close my account?",
    "What are the bonus terms and conditions?",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            How Can We Help You?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Search our knowledge base or contact support
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help..."
              className="pl-12 pr-4 py-6 text-base md:text-lg rounded-full border-2 focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Browse Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="game-card hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {category.articles} articles
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 md:py-16 bg-casino-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Popular Articles
          </h2>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-3">
                {popularArticles.map((article, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 md:p-4 rounded-lg hover:bg-casino-accent transition-colors cursor-pointer"
                  >
                    <FileText className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{article}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Still Need Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center game-card">
              <CardContent className="p-6 md:p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team
                </p>
                <Button variant="casino" size="sm" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center game-card">
              <CardContent className="p-6 md:p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  support@beijing.com
                </p>
                <Button variant="casino-outline" size="sm" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center game-card">
              <CardContent className="p-6 md:p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  +1 (800) 123-4567
                </p>
                <Button variant="casino-outline" size="sm" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
