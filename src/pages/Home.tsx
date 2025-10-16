import HeroSlider from "@/components/HeroSlider";
import GameSlider from "@/components/GameSlider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogs } from "@/hooks/useBlogs";
import { useWelcome } from "@/hooks/useWelcome";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ensureArray, formatDate } from "@/helper-functions/use-formater";

const Home = () => {
  const { isLoading: blogsLoading, handleGetBlogs } = useBlogs();
  const { isLoading: welcomeLoading, handleGetWelcome } = useWelcome();
  const { blogsList } = useSelector((state: any) => state.Blogs);
  const { welcomeData } = useSelector((state: any) => state.Welcome);

  useEffect(() => {
    handleGetBlogs();
    handleGetWelcome();
  }, []);

  return (
    <div className="min-h-screen">

      <HeroSlider />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {welcomeLoading ? (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Skeleton className="h-10 w-3/4 md:w-1/2 mx-auto" />
                <Skeleton className="h-6 w-full md:w-3/4 mx-auto" />
                <Skeleton className="h-6 w-2/3 md:w-1/2 mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Card key={idx} className="game-card">
                    <CardContent className="p-6 space-y-4">
                      <Skeleton className="h-12 w-12 rounded-full mx-auto" />
                      <Skeleton className="h-6 w-3/4 mx-auto" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : welcomeData ? (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {welcomeData.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {welcomeData.description}
                </p>
              </div>

              {welcomeData.cards && welcomeData.cards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {welcomeData.cards.map((card: any, index: number) => (
                    <Card key={index} className="game-card text-center group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-center mb-4">
                          <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <div className="w-8 h-8 bg-primary rounded-full"></div>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {card.subTitle}
                        </h3>
                        <p className="text-muted-foreground">
                          {card.subDescription}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Welcome to Baji Live Casino
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the thrill of premium online gaming with our extensive collection of casino games,
                live dealers, and exciting tournaments.
              </p>
            </div>
          )}
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

          {blogsLoading ? (
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
                <Card key={post?._id} className="game-card overflow-hidden max-h-[600px]">
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
                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-3">
                        {post?.heading ?? ""}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 line-clamp-4">
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