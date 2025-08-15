import HeroSlider from "@/components/HeroSlider";
import GameSlider from "@/components/GameSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trophy, Clock, Headphones } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Licensed",
      description: "100% secure transactions with advanced encryption technology",
    },
    {
      icon: Trophy,
      title: "Premium Games",
      description: "Over 1000+ games from top providers worldwide",
    },
    {
      icon: Clock,
      title: "24/7 Gaming",
      description: "Play anytime, anywhere with our mobile-optimized platform",
    },
    {
      icon: Headphones,
      title: "Live Support",
      description: "Expert customer support available round the clock",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Mastering Blackjack: Basic Strategy Guide",
      excerpt: "Learn the fundamental strategies to improve your blackjack game and increase your winning chances.",
      image: "/api/placeholder/400/250",
      date: "Dec 15, 2024",
      category: "Strategy",
    },
    {
      id: 2,
      title: "Top 5 Slot Games This Month",
      excerpt: "Discover the most popular and highest-paying slot games that players are loving right now.",
      image: "/api/placeholder/400/250",
      date: "Dec 12, 2024",
      category: "Games",
    },
    {
      id: 3,
      title: "Live Casino vs Traditional: What's Better?",
      excerpt: "Compare the exciting world of live dealer games with classic online casino experiences.",
      image: "/api/placeholder/400/250",
      date: "Dec 10, 2024",
      category: "Live Casino",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Welcome to GoldenWheel Casino
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the thrill of premium online gaming with our extensive collection of casino games, 
              live dealers, and exciting tournaments. Join millions of players in the ultimate gaming destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="game-card text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <GameSlider />

      {/* Blog Preview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Gaming Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, strategies, and news
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="game-card overflow-hidden">
                <div className="aspect-video bg-casino-accent"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="casino-ghost" size="sm">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="casino-outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;