import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Star, Clock } from "lucide-react";

const LiveCasino = () => {
  const liveGames = [
    {
      id: 1,
      title: "Live Blackjack Premium",
      dealer: "Sarah Williams",
      players: 8,
      maxPlayers: 8,
      minBet: "$5",
      maxBet: "$500",
      image: "/api/placeholder/400/300",
      status: "active",
      rating: 4.9,
    },
    {
      id: 2,
      title: "European Roulette",
      dealer: "Marcus Chen",
      players: 12,
      maxPlayers: 15,
      minBet: "$1",
      maxBet: "$1000",
      image: "/api/placeholder/400/300",
      status: "active",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Baccarat VIP",
      dealer: "Elena Rodriguez",
      players: 5,
      maxPlayers: 7,
      minBet: "$25",
      maxBet: "$2500",
      image: "/api/placeholder/400/300",
      status: "active",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Three Card Poker",
      dealer: "James Mitchell",
      players: 6,
      maxPlayers: 8,
      minBet: "$10",
      maxBet: "$200",
      image: "/api/placeholder/400/300",
      status: "active",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Lightning Roulette",
      dealer: "Anna Kowalski",
      players: 20,
      maxPlayers: 25,
      minBet: "$0.50",
      maxBet: "$500",
      image: "/api/placeholder/400/300",
      status: "active",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Speed Blackjack",
      dealer: "Michael Zhang",
      players: 7,
      maxPlayers: 7,
      minBet: "$2",
      maxBet: "$150",
      image: "/api/placeholder/400/300",
      status: "waiting",
      rating: 4.6,
    },
  ];

  const categories = ["All Games", "Blackjack", "Roulette", "Baccarat", "Poker"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Live Casino
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the thrill of real casino action with professional dealers in real-time
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Games" ? "casino" : "casino-outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Games Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveGames.map((game) => (
              <Card key={game.id} className="game-card overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-casino-accent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={game.status === "active" ? "default" : "secondary"}
                      className={game.status === "active" ? "bg-green-600" : "bg-orange-500"}
                    >
                      {game.status === "active" ? "Live" : "Starting Soon"}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-black/70 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-white text-sm">{game.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 rounded-lg p-3 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">{game.players}/{game.maxPlayers}</span>
                        </div>
                        <div className="text-sm">
                          {game.minBet} - {game.maxBet}
                        </div>
                      </div>
                      <div className="text-sm opacity-90">Dealer: {game.dealer}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {game.title}
                  </h3>
                  <Button 
                    variant="casino" 
                    size="lg" 
                    className="w-full"
                    disabled={game.status !== "active"}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {game.status === "active" ? "Join Game" : "Waiting..."}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-casino-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Live Casino?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Live Action</h3>
              <p className="text-muted-foreground">Round-the-clock gaming with professional dealers</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Gaming</h3>
              <p className="text-muted-foreground">Chat and interact with dealers and other players</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">HD Streaming</h3>
              <p className="text-muted-foreground">Crystal clear video quality for immersive experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveCasino;