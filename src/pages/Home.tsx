import HeroSlider from "@/components/HeroSlider";
import GameSlider from "@/components/GameSlider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { Shield, Trophy, Clock, Headphones } from "lucide-react";
import { useBlogs } from "@/hooks/useBlogs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ensureArray, formatDate } from "@/helper-functions/use-formater";

const Home = () => {
  const { isLoading, handleGetBlogs } = useBlogs();
  const { blogsList } = useSelector((state: any) => state.Blogs);
  console.log("blogsList:", blogsList);

  useEffect(() => {
    handleGetBlogs();

  }, []);

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
      content: "Discover the complete guide to mastering blackjack with advanced strategies including card counting basics, bankroll management, and when to split, double down, or surrender.",
      image: blog1,
      date: "Dec 15, 2024",
      author: "Michael Chen",
      category: "Strategy",
      readTime: "8 min read",
      tags: ["Blackjack", "Strategy", "Card Games"],
    },
    {
      id: 2,
      title: "Top 5 Slot Games This Month",
      excerpt: "Discover the most popular and highest-paying slot games that players are loving right now.",
      content: "Our comprehensive analysis of the top-performing slot games in 2024, featuring detailed RTP percentages, volatility ratings, and bonus features.",
      image: blog2,
      date: "Dec 12, 2024",
      author: "Sarah Williams",
      category: "Games",
      readTime: "6 min read",
      tags: ["Slots", "RTP", "Analysis"],
    },
    {
      id: 3,
      title: "Live Casino vs Traditional: What's Better?",
      excerpt: "Compare the exciting world of live dealer games with classic online casino experiences.",
      content: "Explore the differences between live casino and traditional online gaming. From the social interaction with real dealers to the convenience of automated games.",
      image: blog3,
      date: "Dec 10, 2024",
      author: "Emma Rodriguez",
      category: "Live Casino",
      readTime: "10 min read",
      tags: ["Live Casino", "Comparison", "Gaming"],
    },
  ];

  return (
    <div className="min-h-screen">

      <HeroSlider />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Welcome to Baji Live Casino
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the thrill of premium online gaming with our extensive collection of casino games, 
              live dealers, and exciting tournaments. Join millions of players in the ultimate gaming destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features?.map((feature, index) => {
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

      <GameSlider />

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
            {ensureArray(blogsList)?.map((post) => (
              <Card key={post?._id} className="game-card overflow-hidden">
                <Link to={`/blogs/${post._id}`}>
                  <div className="aspect-video">
                    <img src={post?.images[0] ?? ""} alt={post?.heading ?? ""} className="w-full h-full object-cover" />
                  </div>
                </Link>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                      {post?.category ?? "Admin"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(post?.createdAt) ?? ""}
                    </span>
                  </div>
                  <Link to={`/blogs/${post._id}`}>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {post?.heading ?? ""}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-4">
                    {post?.description ?? ""}
                  </p>
                  <Link to={`/blogs/${post?._id}`}>
                    <Button variant="casino-ghost" size="sm">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blogs">
              <Button variant="casino-outline" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;