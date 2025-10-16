import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useGames } from "@/hooks/useGames";
import { useSelector } from "react-redux";
import { ensureArray } from "@/helper-functions/use-formater";

const LiveCasino = () => {
  const { isLoading, handleGetGames } = useGames();
  const { gamesList } = useSelector((state: any) => state.Games);

  useEffect(() => {
    handleGetGames();
  }, []);

  const categories = ["All Games", "Blackjack", "Roulette", "Baccarat", "Poker"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4">
            Live Casino
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Experience the thrill of real casino action with professional dealers in real-time
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Games" ? "casino" : "casino-outline"}
                size="sm"
                className="text-xs sm:text-sm px-3 sm:px-4"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Games Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="game-card">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Skeleton className="w-full h-48 sm:h-56 lg:h-60" />
                  </div>
                  <div className="p-4 sm:p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              ensureArray(gamesList)?.map((game) => (
                <div key={game?._id} className="game-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`} className="cursor-pointer">
                      <div className="w-full h-48 sm:h-56 lg:h-60">
                        <img
                          src={game?.image ?? ""}
                          alt={game?.name ?? ""}
                          className="w-full h-full object-cover group-hover:scale-110 casino-transition duration-700"
                        />
                      </div>
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 casino-transition">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`}>
                          <Button variant="hero" size="sm" className="w-full">
                            Play Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`}>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 hover:text-yellow-400 line-clamp-1">
                        {game?.name ?? ""}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-primary fill-current" />
                        <span className="text-sm font-medium text-foreground">
                          {game.rating}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{game.users}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-casino-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              Why Choose Our Live Casino?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <div className="text-center p-4">
              <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Clock className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">24/7 Live Action</h3>
              <p className="text-sm md:text-base text-muted-foreground">Round-the-clock gaming with professional dealers</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Social Gaming</h3>
              <p className="text-sm md:text-base text-muted-foreground">Chat and interact with dealers and other players</p>
            </div>
            <div className="text-center p-4 sm:col-span-2 md:col-span-1">
              <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Star className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">HD Streaming</h3>
              <p className="text-sm md:text-base text-muted-foreground">Crystal clear video quality for immersive experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveCasino;