import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users, Star } from "lucide-react";

const Sports = () => {
  const sportsEvents = [
    {
      id: 1,
      sport: "Football",
      league: "Premier League",
      homeTeam: "Manchester United",
      awayTeam: "Chelsea",
      homeOdds: 2.1,
      drawOdds: 3.2,
      awayOdds: 3.8,
      date: "Dec 16, 2024",
      time: "15:30",
      status: "upcoming",
      betCount: 2847,
    },
    {
      id: 2,
      sport: "Basketball",
      league: "NBA",
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      homeOdds: 1.95,
      drawOdds: null,
      awayOdds: 1.85,
      date: "Dec 16, 2024",
      time: "20:00",
      status: "live",
      betCount: 5692,
    },
    {
      id: 3,
      sport: "Tennis",
      league: "ATP Masters",
      homeTeam: "Novak Djokovic",
      awayTeam: "Rafael Nadal",
      homeOdds: 1.75,
      drawOdds: null,
      awayOdds: 2.05,
      date: "Dec 17, 2024",
      time: "14:00",
      status: "upcoming",
      betCount: 1834,
    },
    {
      id: 4,
      sport: "Football",
      league: "La Liga",
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      homeOdds: 2.3,
      drawOdds: 3.1,
      awayOdds: 3.2,
      date: "Dec 18, 2024",
      time: "21:00",
      status: "upcoming",
      betCount: 8394,
    },
    {
      id: 5,
      sport: "Boxing",
      league: "Heavyweight",
      homeTeam: "Anthony Joshua",
      awayTeam: "Tyson Fury",
      homeOdds: 2.8,
      drawOdds: 15.0,
      awayOdds: 1.4,
      date: "Dec 20, 2024",
      time: "22:00",
      status: "upcoming",
      betCount: 12847,
    },
    {
      id: 6,
      sport: "Ice Hockey",
      league: "NHL",
      homeTeam: "Rangers",
      awayTeam: "Bruins",
      homeOdds: 2.1,
      drawOdds: 3.8,
      awayOdds: 3.1,
      date: "Dec 16, 2024",
      time: "19:30",
      status: "live",
      betCount: 743,
    },
  ];

  const sportsCategories = ["All Sports", "Football", "Basketball", "Tennis", "Boxing", "Ice Hockey"];
  const betTypes = ["Match Winner", "Over/Under", "Handicap", "Both Teams to Score"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Sports Betting
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bet on your favorite sports with competitive odds and live betting
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sportsCategories.map((category) => (
              <Button
                key={category}
                variant={category === "All Sports" ? "casino" : "casino-outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {betTypes.map((type) => (
              <Badge key={type} variant="secondary" className="px-3 py-1">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Live Events Banner */}
      <section className="bg-primary/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-foreground font-semibold">
              2 Live Events • Place your bets now!
            </span>
            <Button variant="casino" size="sm">
              View Live
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sportsEvents.map((event) => (
              <Card key={event.id} className="game-card">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* Event Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge 
                          variant={event.status === "live" ? "default" : "secondary"}
                          className={event.status === "live" ? "bg-red-600" : "bg-blue-600"}
                        >
                          {event.status === "live" ? "LIVE" : "UPCOMING"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{event.sport}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{event.league}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="text-right">
                          <h3 className="text-lg font-semibold text-foreground">
                            {event.homeTeam}
                          </h3>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">VS</div>
                          <div className="flex items-center justify-center space-x-2 mt-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {event.date} {event.time}
                            </span>
                          </div>
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-foreground">
                            {event.awayTeam}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Betting Odds */}
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                      <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-2">
                        <Button variant="casino-outline" size="sm" className="flex flex-col h-auto py-2">
                          <span className="text-xs opacity-70">Home</span>
                          <span className="font-bold">{event.homeOdds}</span>
                        </Button>
                        {event.drawOdds && (
                          <Button variant="casino-outline" size="sm" className="flex flex-col h-auto py-2">
                            <span className="text-xs opacity-70">Draw</span>
                            <span className="font-bold">{event.drawOdds}</span>
                          </Button>
                        )}
                        <Button variant="casino-outline" size="sm" className="flex flex-col h-auto py-2">
                          <span className="text-xs opacity-70">Away</span>
                          <span className="font-bold">{event.awayOdds}</span>
                        </Button>
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{event.betCount} bets</span>
                        </div>
                        <Button variant="casino" size="sm" className="mt-2 w-full lg:w-auto">
                          More Markets
                        </Button>
                      </div>
                    </div>
                  </div>
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
              Why Bet With Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Best Odds</h3>
              <p className="text-muted-foreground">Competitive odds across all major sports</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Live Betting</h3>
              <p className="text-muted-foreground">Place bets while the action unfolds</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Analysis</h3>
              <p className="text-muted-foreground">Get insights from sports betting experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;