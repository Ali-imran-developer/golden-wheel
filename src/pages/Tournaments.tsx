import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Trophy, Users, DollarSign, Clock, Sparkles, Target, Award } from "lucide-react";
import { useTournaments } from "@/hooks/useTournaments";
import { useSelector } from "react-redux";
import { ensureArray } from "@/helper-functions/use-formater";
import { Link } from "react-router-dom";

const Tournaments = () => {
  const { isLoading, handleGetTournaments } = useTournaments();
  const { tournamentsData } = useSelector((state: any) => state.Tournaments);

  useEffect(() => {
    handleGetTournaments();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "live":
        return "bg-red-600 animate-pulse";
      case "starting_soon":
      case "starting soon":
        return "bg-orange-500";
      case "registering":
      case "registration open":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status?.toLowerCase()) {
      case "live":
        return "LIVE NOW";
      case "starting_soon":
      case "starting soon":
        return "Starting Soon";
      case "registering":
      case "registration open":
        return "Registration Open";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-purple-900/10">
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50 px-6 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 inline mr-2" />
                ELITE TOURNAMENTS
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Compete for
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent"> Massive </span>
              Prizes
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of players competing in high-stakes tournaments with life-changing prize pools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="https://bj07p15aff2020.com/af/42GO1E27/join">
                <Button size="lg" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50 hover:text-white px-10 py-6 text-lg font-semibold shadow-2xl">
                  <Trophy className="w-5 h-5 mr-2" />
                  Join Tournament
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Banner */}
      <section className="bg-background border-t border-b border-gray-600 py-10 md:py-14 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Trophy className="w-8 h-8 text-yellow-300" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">$2.5M+</div>
              <div className="text-sm md:text-base text-white/90">Total Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Target className="w-8 h-8 text-green-300" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24</div>
              <div className="text-sm md:text-base text-white/90">Active Tournaments</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Users className="w-8 h-8 text-blue-300" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15K+</div>
              <div className="text-sm md:text-base text-white/90">Players Competing</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Award className="w-8 h-8 text-orange-300" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">Daily</div>
              <div className="text-sm md:text-base text-white/90">New Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Tournaments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Register now and compete for massive cash prizes and exclusive rewards
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <Skeleton className="h-56 w-full" />
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-5 w-2/3" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : !ensureArray(tournamentsData) || ensureArray(tournamentsData)?.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No Active Tournaments</h3>
              <p className="text-muted-foreground">New tournaments coming soon. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ensureArray(tournamentsData)?.map((tournament) => (
                <Link to="https://bj07p15aff2020.com/af/42GO1E27/join" key={tournament._id}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-transparent hover:border-purple-500/50">
                    {/* Tournament Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={tournament?.image}
                        alt={tournament?.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getStatusColor(tournament?.status)} text-white border-0 px-3 py-1 shadow-lg`}>
                          {tournament?.status?.toLowerCase() === 'live' && (
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                              {getStatusText(tournament?.status)}
                            </span>
                          )}
                          {tournament?.status?.toLowerCase() !== 'live' && getStatusText(tournament?.status)}
                        </Badge>
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-black/70 text-white border-white/20 backdrop-blur-sm">
                          {tournament?.type}
                        </Badge>
                      </div>

                      {/* Prize Pool & Buy-in */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/90 to-orange-600/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl">
                            <Trophy className="h-5 w-5 text-white" />
                            <span className="font-bold text-white text-lg">{tournament?.prizePool}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl">
                            <DollarSign className="h-5 w-5 text-white" />
                            <span className="font-bold text-white">{tournament?.buyIn}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tournament Details */}
                    <CardContent className="p-6 space-y-5">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                          {tournament?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {tournament?.game}
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <Users className="h-3 w-3" />
                            <span>Players</span>
                          </div>
                          <div className="text-base font-bold text-foreground">
                            {tournament?.players || 0}/{tournament?.maxPlayers}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-3 rounded-lg">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <Clock className="h-3 w-3" />
                            <span>Duration</span>
                          </div>
                          <div className="text-base font-bold text-foreground">
                            {tournament?.duration}
                          </div>
                        </div>
                      </div>

                      {/* Start Time */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">
                          {tournament?.startDate} at {tournament?.startTime}
                        </span>
                      </div>

                      {/* Register Button */}
                      <Button
                        variant="casino"
                        size="lg"
                        className="w-full group-hover:scale-105 transition-transform font-semibold shadow-lg"
                        disabled={tournament?.status?.toLowerCase() === "live"}
                      >
                        {tournament?.status?.toLowerCase() === "live" ? (
                          <>
                            <Clock className="w-4 h-4 mr-2" />
                            In Progress
                          </>
                        ) : (
                          <>
                            <Trophy className="w-4 h-4 mr-2" />
                            Register Now
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background border-t border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tournament Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Why compete in our tournaments?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Massive Prizes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compete for prize pools up to $200,000 and exclusive rewards
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Global Competition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compete against thousands of players from around the world
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Daily Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                New tournaments start every day with various buy-in levels
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;
