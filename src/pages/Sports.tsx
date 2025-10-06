import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users, Star } from "lucide-react";

const Sports = () => {
  const sportsCategories = [
    {
      id: 1,
      name: "Football",
      description: "Bet on top leagues worldwide",
      events: 847,
      image: "⚽",
      popular: true,
    },
    {
      id: 2,
      name: "Basketball",
      description: "NBA, EuroLeague & more",
      events: 352,
      image: "🏀",
      popular: true,
    },
    {
      id: 3,
      name: "Tennis",
      description: "Grand Slams & ATP tours",
      events: 234,
      image: "🎾",
      popular: true,
    },
    {
      id: 4,
      name: "Ice Hockey",
      description: "NHL and international games",
      events: 156,
      image: "🏒",
      popular: false,
    },
    {
      id: 5,
      name: "Baseball",
      description: "MLB & World Series",
      events: 189,
      image: "⚾",
      popular: false,
    },
    {
      id: 6,
      name: "Boxing",
      description: "Championship fights",
      events: 42,
      image: "🥊",
      popular: false,
    },
    {
      id: 7,
      name: "American Football",
      description: "NFL & College Football",
      events: 98,
      image: "🏈",
      popular: true,
    },
    {
      id: 8,
      name: "Cricket",
      description: "IPL, World Cup & Tests",
      events: 267,
      image: "🏏",
      popular: true,
    },
    {
      id: 9,
      name: "Golf",
      description: "PGA Tour & Majors",
      events: 73,
      image: "⛳",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Sports Betting
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bet on your favorite sports with competitive odds and live betting
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary/10 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">2,358</div>
              <div className="text-xs md:text-sm text-muted-foreground">Live Events</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">40+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Sports Available</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Average Payout</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Live Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Choose Your Sport
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sportsCategories.map((sport) => (
              <Card 
                key={sport.id} 
                className="game-card hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl md:text-5xl">{sport.image}</div>
                    {sport.popular && (
                      <Badge variant="default" className="bg-primary">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {sport.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {sport.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {sport.events} events
                    </span>
                    <Button variant="casino" size="sm">
                      Bet Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-casino-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Why Bet With Beijing?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Best Odds</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Competitive odds across all major sports
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Live Betting</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Place bets while the action unfolds
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Expert Analysis</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Get insights from sports betting experts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;