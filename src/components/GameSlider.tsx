import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useGames } from "@/hooks/useGames";
import { useSelector } from "react-redux";
import { ensureArray } from "@/helper-functions/use-formater";

const GameSlider = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isLoading, handleGetGames } = useGames();
  const { gamesList } = useSelector((state: any) => state.Games);

  useEffect(() => {
    handleGetGames();

  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-casino-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Popular Games
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our most loved casino games
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button
              variant="casino-outline"
              size="icon"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="casino-outline"
              size="icon"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {isLoading ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 game-card">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Skeleton className="w-full h-48" />
                </div>
                <div className="p-6 space-y-3">
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
              <div key={game?._id} className="flex-shrink-0 w-80 game-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`} className="cursor-pointer">
                    <div className="max-w-lg h-60">
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
                
                <div className="p-6">
                  <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`}>
                    <h3 className="text-xl font-bold text-foreground mb-2 hover:text-yellow-400" onClick={() => navigate("/live-casino")}>
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
                    <div className="text-sm text-muted-foreground">
                      {game.users} playing
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Button variant="casino" size="lg" onClick={() => navigate("/live-casino")}>
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameSlider;