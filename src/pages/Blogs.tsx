import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Blackjack: Advanced Strategy Guide",
      excerpt: "Learn professional blackjack strategies used by experts to maximize your winning potential and minimize house edge.",
      content: "Discover the complete guide to mastering blackjack with advanced strategies including card counting basics, bankroll management, and when to split, double down, or surrender. This comprehensive guide covers everything from basic strategy charts to advanced techniques used by professional players.",
      image: blog1,
      date: "Dec 15, 2024",
      author: "Michael Chen",
      category: "Strategy",
      readTime: "8 min read",
      tags: ["Blackjack", "Strategy", "Card Games"],
    },
    {
      id: 2,
      title: "Live Casino vs Traditional Online: Complete Comparison",
      excerpt: "Compare the exciting world of live dealer games with classic online casino experiences to find what suits you best.",
      content: "Explore the differences between live casino and traditional online gaming. From the social interaction with real dealers to the convenience of automated games, we break down the pros and cons of each gaming style to help you choose the perfect experience.",
      image: blog2,
      date: "Dec 12, 2024",
      author: "Sarah Williams",
      category: "Live Casino",
      readTime: "6 min read",
      tags: ["Live Casino", "Comparison", "Gaming"],
    },
    {
      id: 3,
      title: "Top 10 Slot Games with Highest RTP in 2024",
      excerpt: "Discover the most profitable slot games this year with detailed RTP analysis and winning strategies.",
      content: "Our comprehensive analysis of the top-performing slot games in 2024, featuring detailed RTP percentages, volatility ratings, and bonus features. Learn which slots offer the best value and how to maximize your gaming sessions.",
      image: blog3,
      date: "Dec 10, 2024",
      author: "Emma Rodriguez",
      category: "Slots",
      readTime: "10 min read",
      tags: ["Slots", "RTP", "Analysis"],
    },
    {
      id: 4,
      title: "Roulette Betting Systems: What Really Works?",
      excerpt: "Analyze popular roulette betting systems and discover which strategies have mathematical merit.",
      content: "An in-depth examination of popular roulette betting systems including Martingale, Fibonacci, and D'Alembert. We analyze the mathematics behind each system and provide honest assessments of their effectiveness in real-world gaming scenarios.",
      image: blog4,
      date: "Dec 8, 2024",
      author: "David Kim",
      category: "Roulette",
      readTime: "7 min read",
      tags: ["Roulette", "Betting Systems", "Mathematics"],
    },
    {
      id: 5,
      title: "Poker Tournament Strategy: From Beginner to Pro",
      excerpt: "Master tournament poker with advanced strategies for each stage of play and bankroll management tips.",
      content: "Complete guide to poker tournament strategy covering early, middle, and late stage play. Learn about ICM considerations, bubble play, heads-up strategy, and proper bankroll management for tournament success.",
      image: blog5,
      date: "Dec 5, 2024",
      author: "Alex Thompson",
      category: "Poker",
      readTime: "12 min read",
      tags: ["Poker", "Tournaments", "Strategy"],
    },
    {
      id: 6,
      title: "Baccarat: The High Roller's Guide to Success",
      excerpt: "Understand the elegance of baccarat with strategies used by high-stakes players worldwide.",
      content: "Delve into the sophisticated world of baccarat with strategies favored by high rollers. Learn about pattern recognition, money management, and the psychological aspects of this classic casino game.",
      image: blog6,
      date: "Dec 3, 2024",
      author: "Isabella Chang",
      category: "Baccarat",
      readTime: "9 min read",
      tags: ["Baccarat", "High Stakes", "VIP"],
    },
  ];

  const categories = ["All Posts", "Strategy", "Live Casino", "Slots", "Roulette", "Poker", "Baccarat"];
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Gaming Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, strategies, and the latest news from the world of online gaming
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-casino-accent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "casino" : "casino-outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
          <Card className="game-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    state={{ post: featuredPost }}
                  >
                    <Button variant="casino">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Regular Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="game-card overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {post.date}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    state={{ post }}
                    className="block mt-4"
                  >
                    <Button variant="casino-ghost" size="sm" className="w-full">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16">
          <Card className="game-card bg-gradient-to-r from-casino-dark to-casino-accent">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Gaming Insights
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest strategies, game reviews, and exclusive tips from gaming experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-background border border-border text-foreground"
                />
                <Button variant="casino">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blogs;