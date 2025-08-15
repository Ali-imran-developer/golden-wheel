import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Globe, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Players", value: "2.5M+" },
    { icon: Trophy, label: "Games Available", value: "1000+" },
    { icon: Globe, label: "Countries", value: "150+" },
    { icon: Star, label: "Player Rating", value: "4.8/5" },
  ];

  const ambassadors = [
    {
      name: "Sarah Johnson",
      title: "Poker Champion",
      achievements: "World Series Winner 2023",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Mike Chen",
      title: "Slots Expert",
      achievements: "Million Dollar Jackpot Winner",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Elena Rodriguez",
      title: "Blackjack Pro",
      achievements: "International Tournament Champion",
      image: "/api/placeholder/150/150",
    },
  ];

  const liveGames = [
    { name: "Live Blackjack Pro", players: 234, status: "Hot" },
    { name: "VIP Roulette", players: 156, status: "New" },
    { name: "Speed Baccarat", players: 89, status: "Popular" },
    { name: "Dream Catcher", players: 312, status: "Trending" },
    { name: "Mega Ball", players: 178, status: "Hot" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-casino-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About GoldenWheel Casino
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Since 2020, GoldenWheel Casino has been the premier destination for online gaming enthusiasts. 
            We combine cutting-edge technology with classic casino excitement to deliver an unparalleled 
            gaming experience to players worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the Game Section */}
      <section className="py-16 bg-casino-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    1. Create Your Account
                  </h3>
                  <p className="text-muted-foreground">
                    Quick and secure registration process with instant account verification.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    2. Make Your Deposit
                  </h3>
                  <p className="text-muted-foreground">
                    Choose from multiple secure payment methods with instant deposits and fast withdrawals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    3. Start Playing
                  </h3>
                  <p className="text-muted-foreground">
                    Access over 1000 games including slots, table games, and live dealer experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    4. Win & Withdraw
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy your winnings with our fast and secure withdrawal process.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-casino-accent p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Licensed and regulated gaming platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  SSL encryption for secure transactions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  24/7 customer support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Regular promotions and bonuses
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Mobile-optimized gaming experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassadors Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Gaming Ambassadors
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the champions who represent the GoldenWheel community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ambassadors.map((ambassador, index) => (
              <Card key={index} className="game-card text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-casino-accent rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {ambassador.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {ambassador.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {ambassador.achievements}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Casino Data Section */}
      <section className="py-16 bg-casino-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Live Casino Stats
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time data from our bustling live casino floors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveGames.map((game, index) => (
              <Card key={index} className="game-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {game.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      game.status === 'Hot' ? 'bg-red-500/20 text-red-400' :
                      game.status === 'New' ? 'bg-green-500/20 text-green-400' :
                      game.status === 'Popular' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Players online
                    </span>
                    <span className="text-primary font-bold">
                      {game.players}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Join Live Games
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;