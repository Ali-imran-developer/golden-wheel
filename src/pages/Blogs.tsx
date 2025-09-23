import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useBlogs } from "@/hooks/useBlogs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ensureArray, formatDate } from "@/helper-functions/use-formater";

const Blogs = () => {
  const { isLoading, handleGetBlogs } = useBlogs();
  const { blogsList } = useSelector((state: any) => state.Blogs);

  useEffect(() => {
    handleGetBlogs();

  }, []);

  const categories = ["All Posts", "Strategy", "Live Casino", "Slots", "Roulette", "Poker", "Baccarat"];
  const featuredPost = ensureArray(blogsList)?.[0];
  const regularPosts = ensureArray(blogsList)?.slice(1);

  const calculateReadTime = (content: any) => {
    const wordsPerMinute = 200;
    let wordCount = content?.description?.split(' ')?.length;
    content?.detail?.forEach((section: any) => {
      wordCount += section?.subParagraph?.split(' ')?.length;
      wordCount += section?.points?.join(' ')?.split(' ')?.length;
    });
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-background">
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
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
          {isLoading ? (
            <Card className="game-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <Skeleton className="w-full h-[400px]" />
                <CardContent className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ) : (
            <Card className="game-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <Link to={`/blogs/${featuredPost?._id}`}>
                  <div className="w-full max-w-full max-h-[400px]">
                    <img src={featuredPost?.images[0] ?? ""}  alt={featuredPost?.heading ?? ""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {featuredPost?.category ?? "Casino"}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost?.createdAt) ?? ""}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {calculateReadTime(featuredPost)} min read
                    </div>
                  </div>
                  <Link to={`/blogs/${featuredPost?._id}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {featuredPost?.heading ?? ""}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost?.description ?? ""}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost?.author ?? "Admin"}
                    </div>
                    <Link to={`/blogs/${featuredPost?._id}`}>
                      <Button variant="casino">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Card key={idx} className="game-card overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-8 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ensureArray(regularPosts)?.map((post) => (
                <Card key={post?._id} className="game-card overflow-hidden">
                  <Link to={`/blogs/${featuredPost?._id}`}>
                    <div className="aspect-video">
                      <img 
                        src={post?.images[0] ?? ""} 
                        alt={post?.heading ?? ""}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {post?.category ?? "Casino"}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {calculateReadTime(post)} min read
                      </div>
                    </div>
                    <Link to={`/blogs/${featuredPost?._id}`}>
                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post?.heading ?? ""}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post?.description ?? ""}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {post?.author ?? "Admin"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(post?.createdAt) ?? ""}
                      </div>
                    </div>
                    <Link to={`/blogs/${post?._id}`} className="block mt-4">
                      <Button variant="casino-ghost" size="sm" className="w-full">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

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