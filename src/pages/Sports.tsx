import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, Star, Activity, BarChart3, Play } from "lucide-react";
import { useSports } from "@/hooks/useSports";
import { useSelector } from "react-redux";
import { ensureArray } from "@/helper-functions/use-formater";
import { Link } from "react-router-dom";

const Sports = () => {
  const { isLoading, handleGetSports } = useSports();
  const { sportsData } = useSelector((state: any) => state.Sports);

  useEffect(() => {
    handleGetSports();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <Badge className="bg-background text-yellow-300 border-yellow-500/50 px-4 py-1 text-sm font-semibold">
                LIVE SPORTS BETTING
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Bet on Your
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Favorite </span>
              Sports
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the excitement of live sports betting with competitive odds and instant payouts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://bj07p15aff2020.com/af/42GO1E27/join">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-xl">
                  <Play className="w-5 h-5 mr-2" />
                  Start Betting Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-8 md:py-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">Live</div>
              <div className="text-sm md:text-base text-white/80">Events Today</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">40+</div>
              <div className="text-sm md:text-base text-white/80">Sports Available</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm md:text-base text-white/80">Payout Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm md:text-base text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Matches
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Place your bets on live matches with the best odds in the market
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <Skeleton className="h-40 w-full" />
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : !ensureArray(sportsData) || ensureArray(sportsData)?.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-casino-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No Live Matches</h3>
              <p className="text-muted-foreground">Check back soon for exciting betting opportunities</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ensureArray(sportsData)?.map((sport) => (
                <Link to="https://bj07p15aff2020.com/af/42GO1E27/join" key={sport._id}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-transparent hover:border-primary/50">
                    {/* Header */}
                    <div className="bg-background p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-yellow-400" />
                            <span className="text-white/90 font-semibold text-sm">{sport?.sport}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {sport?.league}
                          </h3>
                        </div>
                        {sport?.status === 'live' && (
                          <Badge className="bg-red-500 text-white border-0 animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                            LIVE
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Match Details */}
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Teams & Odds */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 space-y-3">
                          <div className="flex items-center justify-between group/item hover:bg-green-50 dark:hover:bg-green-900/20 p-2 rounded-lg transition-colors">
                            <span className="font-semibold text-gray-900 dark:text-white">{sport?.homeTeam}</span>
                            <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform">
                              {sport?.homeOdds}
                            </span>
                          </div>

                          <div className="flex items-center justify-between group/item hover:bg-yellow-50 dark:hover:bg-yellow-900/20 p-2 rounded-lg transition-colors">
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Draw</span>
                            <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform">
                              {sport?.drawOdds}
                            </span>
                          </div>

                          <div className="flex items-center justify-between group/item hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors">
                            <span className="font-semibold text-gray-900 dark:text-white">{sport?.awayTeam}</span>
                            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform">
                              {sport?.awayOdds}
                            </span>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Activity className="w-4 h-4" />
                            <span>{sport?.betCount || 0} active bets</span>
                          </div>
                          <Button variant="casino" size="sm" className="group-hover:scale-105 transition-transform">
                            Place Bet
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-casino-accent to-casino-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Bet With Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the best sports betting platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Best Odds</h3>
              <p className="text-muted-foreground">
                Industry-leading odds across all major sports and leagues
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Live Betting</h3>
              <p className="text-muted-foreground">
                Real-time odds updates with instant bet placement
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Instant Payouts</h3>
              <p className="text-muted-foreground">
                Fast and secure withdrawals with multiple payment options
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
