import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, DollarSign, Clock } from "lucide-react";

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      name: "Weekly Poker Championship",
      game: "Texas Hold'em",
      prizePool: "$50,000",
      buyIn: "$100",
      players: 127,
      maxPlayers: 200,
      startDate: "Dec 18, 2024",
      startTime: "20:00",
      status: "registering",
      image: "/api/placeholder/400/250",
      type: "Poker",
      duration: "3 hours",
    },
    {
      id: 2,
      name: "Blackjack Blitz Tournament",
      game: "Blackjack",
      prizePool: "$25,000",
      buyIn: "$50",
      players: 89,
      maxPlayers: 150,
      startDate: "Dec 17, 2024",
      startTime: "19:00",
      status: "starting_soon",
      image: "/api/placeholder/400/250",
      type: "Blackjack",
      duration: "2 hours",
    },
    {
      id: 3,
      name: "Slots Mega Spin Challenge",
      game: "Slot Machines",
      prizePool: "$100,000",
      buyIn: "$25",
      players: 543,
      maxPlayers: 1000,
      startDate: "Dec 20, 2024",
      startTime: "15:00",
      status: "registering",
      image: "/api/placeholder/400/250",
      type: "Slots",
      duration: "4 hours",
    },
    {
      id: 4,
      name: "Roulette Royale",
      game: "European Roulette",
      prizePool: "$30,000",
      buyIn: "$75",
      players: 67,
      maxPlayers: 100,
      startDate: "Dec 19, 2024",
      startTime: "21:30",
      status: "registering",
      image: "/api/placeholder/400/250",
      type: "Roulette",
      duration: "2.5 hours",
    },
    {
      id: 5,
      name: "High Roller Baccarat",
      game: "Baccarat",
      prizePool: "$200,000",
      buyIn: "$500",
      players: 23,
      maxPlayers: 50,
      startDate: "Dec 22, 2024",
      startTime: "22:00",
      status: "registering",
      image: "/api/placeholder/400/250",
      type: "Baccarat",
      duration: "3 hours",
    },
    {
      id: 6,
      name: "Speed Blackjack Sprint",
      game: "Speed Blackjack",
      prizePool: "$15,000",
      buyIn: "$30",
      players: 145,
      maxPlayers: 200,
      startDate: "Dec 16, 2024",
      startTime: "18:00",
      status: "live",
      image: "/api/placeholder/400/250",
      type: "Blackjack",
      duration: "1.5 hours",
    },
  ];

  const gameTypes = ["All Games", "Poker", "Blackjack", "Slots", "Roulette", "Baccarat"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-600";
      case "starting_soon":
        return "bg-orange-500";
      case "registering":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "LIVE";
      case "starting_soon":
        return "Starting Soon";
      case "registering":
        return "Registration Open";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Elite Tournaments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Compete with the best players worldwide for massive prize pools
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {gameTypes.map((type) => (
              <Button
                key={type}
                variant={type === "All Games" ? "casino" : "casino-outline"}
                size="sm"
                className="text-xs md:text-sm"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 py-6 md:py-10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="space-y-1">
              <div className="text-2xl md:text-4xl font-bold text-primary">$525K</div>
              <div className="text-xs md:text-sm text-muted-foreground">Total Prize Pool</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-4xl font-bold text-primary">6</div>
              <div className="text-xs md:text-sm text-muted-foreground">Active Tournaments</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-4xl font-bold text-primary">994</div>
              <div className="text-xs md:text-sm text-muted-foreground">Players Registered</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-4xl font-bold text-primary">1</div>
              <div className="text-xs md:text-sm text-muted-foreground">Live Now</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Featured Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="game-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-casino-darker via-casino-dark to-casino-accent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(tournament.status)}>
                      {getStatusText(tournament.status)}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      {tournament.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 rounded-lg p-3 text-white">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1 text-yellow-400" />
                          <span>{tournament.prizePool}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-green-400" />
                          <span>{tournament.buyIn}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {tournament.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tournament.game}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Players</span>
                      </div>
                      <span className="text-foreground">
                        {tournament.players}/{tournament.maxPlayers}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Start</span>
                      </div>
                      <span className="text-foreground">
                        {tournament.startDate} {tournament.startTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Duration</span>
                      </div>
                      <span className="text-foreground">
                        {tournament.duration}
                      </span>
                    </div>
                  </div>

                  <Button 
                    variant="casino" 
                    size="lg" 
                    className="w-full"
                    disabled={tournament.status === "live"}
                  >
                    {tournament.status === "live" 
                      ? "In Progress" 
                      : tournament.status === "starting_soon"
                      ? "Register Now"
                      : "Register"
                    }
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-casino-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tournament Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Big Prizes</h3>
              <p className="text-muted-foreground">Massive prize pools up to $200,000</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Competition</h3>
              <p className="text-muted-foreground">Compete with players from around the world</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Daily Events</h3>
              <p className="text-muted-foreground">New tournaments starting every day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;