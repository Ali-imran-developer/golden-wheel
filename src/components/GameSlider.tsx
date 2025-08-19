import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import moenyComing from "/games/game1.png";
import piggyBank from "/games/game2.png";
import kingsAce from "/games/game3.png";
import superElements from "/games/game4.png";
import wildBounty from "/games/game5.png";
import moneyWheel from "/games/game6.png";
import { useNavigate } from "react-router-dom";

const GameSlider = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const games = [
    {
      id: 1,
      image: moenyComing,
      title: "Moeny Coming",
      category: "Slots",
      rating: 4.8,
      players: "2.5K",
    },
    {
      id: 2,
      image: piggyBank,
      title: "Piggy Bank",
      category: "Poker",
      rating: 4.9,
      players: "1.8K",
    },
    {
      id: 3,
      image: kingsAce,
      title: "The King's Ace",
      category: "Table Games",
      rating: 4.7,
      players: "3.2K",
    },
    {
      id: 4,
      image: superElements,
      title: "Super Elements",
      category: "Roulette",
      rating: 4.8,
      players: "2.1K",
    },
    {
      id: 5,
      image: wildBounty,
      title: "Wild Bounty ShowDown",
      category: "Slots",
      rating: 4.6,
      players: "1.9K",
    },
    {
      id: 6,
      image: moneyWheel,
      title: "Money Wheel",
      category: "Poker",
      rating: 4.7,
      players: "1.5K",
    },
  ];

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

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {games.map((game) => (
            <div
              key={game.id}
              className="flex-shrink-0 w-80 game-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="max-w-lg h-48" onClick={() => navigate("/live-casino")}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 casino-transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 casino-transition">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="hero" size="sm" className="w-full" onClick={() => navigate("/live-casino")}>
                      Play Now
                    </Button>
                  </div>
                </div>
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    {game.category}
                  </span>
                </div> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 hover:text-yellow-400" onClick={() => navigate("/live-casino")}>
                  {game.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-foreground">
                      {game.rating}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {game.players} playing
                  </div>
                </div>
              </div>
            </div>
          ))}
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