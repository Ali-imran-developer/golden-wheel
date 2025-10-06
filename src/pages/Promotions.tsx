import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Percent, Star, Trophy, Clock, TrendingUp } from "lucide-react";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Welcome Bonus",
      subtitle: "100% Match up to $1,000",
      description: "Get a 100% match on your first deposit plus 50 free spins",
      banner: "bg-gradient-to-r from-purple-600 to-blue-600",
      icon: Gift,
      code: "WELCOME100",
      validUntil: "Dec 31, 2024",
      terms: "T&C Apply",
    },
    {
      id: 2,
      title: "Reload Bonus",
      subtitle: "50% up to $500",
      description: "Boost your deposits every Monday with our reload bonus",
      banner: "bg-gradient-to-r from-orange-500 to-red-600",
      icon: Percent,
      code: "RELOAD50",
      validUntil: "Every Monday",
      terms: "Min deposit $50",
    },
    {
      id: 3,
      title: "VIP Cashback",
      subtitle: "Up to 20% Weekly",
      description: "Exclusive cashback rewards for our VIP members",
      banner: "bg-gradient-to-r from-yellow-500 to-orange-500",
      icon: Star,
      code: "VIPCASH",
      validUntil: "Ongoing",
      terms: "VIP Only",
    },
    {
      id: 4,
      title: "Tournament Special",
      subtitle: "$50,000 Prize Pool",
      description: "Join our mega tournament series and win big prizes",
      banner: "bg-gradient-to-r from-green-500 to-teal-600",
      icon: Trophy,
      code: "TOURNEY",
      validUntil: "Dec 25, 2024",
      terms: "Buy-in required",
    },
    {
      id: 5,
      title: "Happy Hour",
      subtitle: "Double Points",
      description: "Earn 2x loyalty points during happy hour every day",
      banner: "bg-gradient-to-r from-pink-500 to-purple-600",
      icon: Clock,
      code: "HAPPYHOUR",
      validUntil: "Daily 6-8 PM",
      terms: "All games eligible",
    },
    {
      id: 6,
      title: "High Roller Bonus",
      subtitle: "$5,000 Package",
      description: "Special bonus package for high-stakes players",
      banner: "bg-gradient-to-r from-indigo-600 to-blue-700",
      icon: TrendingUp,
      code: "HIGHROLLER",
      validUntil: "Limited Time",
      terms: "Min deposit $1,000",
    },
  ];

  const banners = [
    {
      id: 1,
      title: "Mega Christmas Giveaway",
      subtitle: "Win up to $100,000 in prizes",
      gradient: "from-red-600 via-green-600 to-red-600",
    },
    {
      id: 2,
      title: "New Year Special",
      subtitle: "Start 2025 with 200% Bonus",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Weekend Warriors",
      subtitle: "50% Reload Every Weekend",
      gradient: "from-orange-500 via-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Promotions & Bonuses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Boost your gaming experience with our exclusive offers and promotions
          </p>
        </div>
      </section>

      {/* Featured Banners */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Featured Offers</h2>
          <div className="space-y-6">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`bg-gradient-to-r ${banner.gradient} rounded-lg p-8 md:p-12 text-white relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2">{banner.title}</h3>
                  <p className="text-lg md:text-xl mb-6">{banner.subtitle}</p>
                  <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100">
                    Claim Now
                  </Button>
                </div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute right-20 bottom-0 w-48 h-48 bg-white/10 rounded-full -mb-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-12 md:py-16 bg-casino-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">All Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {promotions.map((promo) => {
              const Icon = promo.icon;
              return (
                <Card key={promo.id} className="game-card overflow-hidden">
                  <div className={`${promo.banner} p-6 md:p-8 text-white relative`}>
                    <div className="absolute top-4 right-4">
                      <Icon className="h-12 w-12 opacity-50" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{promo.title}</h3>
                    <p className="text-lg md:text-xl font-semibold">{promo.subtitle}</p>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {promo.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Promo Code:</span>
                        <Badge variant="secondary" className="font-mono">
                          {promo.code}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Valid Until:</span>
                        <span className="font-semibold">{promo.validUntil}</span>
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        {promo.terms}
                      </div>
                    </div>

                    <Button variant="casino" className="w-full">
                      Claim Bonus
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Terms & Conditions</h2>
          <Card>
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• All bonuses are subject to wagering requirements</li>
                <li>• Minimum deposit amounts apply unless stated otherwise</li>
                <li>• Bonuses must be claimed within the promotional period</li>
                <li>• Maximum bet limits apply when playing with bonus funds</li>
                <li>• Some games may contribute differently to wagering requirements</li>
                <li>• Beijing reserves the right to modify or cancel promotions</li>
                <li>• Only one bonus per player/household/IP address</li>
                <li>• Full terms and conditions available on request</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
