import HeroSlider from "@/components/HeroSlider";
import GameSlider from "@/components/GameSlider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Card key={idx} className="game-card overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-8 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
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
          )}

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