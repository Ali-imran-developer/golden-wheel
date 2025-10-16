import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Ticket } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Grand Championship Finals",
      date: "Dec 25, 2024",
      time: "20:00",
      location: "Main Arena",
      category: "Tournament",
      participants: 128,
      prizePool: "$100,000",
      status: "upcoming",
      description: "The ultimate showdown between the best players worldwide",
    },
    {
      id: 2,
      title: "Weekly Poker Night",
      date: "Dec 18, 2024",
      time: "19:00",
      location: "Poker Room",
      category: "Regular",
      participants: 64,
      prizePool: "$10,000",
      status: "registering",
      description: "Join us for our signature weekly poker tournament",
    },
    {
      id: 3,
      title: "Blackjack Blitz Marathon",
      date: "Dec 20, 2024",
      time: "15:00",
      location: "Table Games Hall",
      category: "Special",
      participants: 45,
      prizePool: "$25,000",
      status: "registering",
      description: "24-hour blackjack marathon with massive prizes",
    },
    {
      id: 4,
      title: "Slots Championship Series",
      date: "Dec 22, 2024",
      time: "18:00",
      location: "Slots Arena",
      category: "Championship",
      participants: 200,
      prizePool: "$50,000",
      status: "upcoming",
      description: "Spin your way to fortune in our slots championship",
    },
    {
      id: 5,
      title: "VIP Roulette Experience",
      date: "Dec 24, 2024",
      time: "21:00",
      location: "VIP Lounge",
      category: "VIP",
      participants: 20,
      prizePool: "$75,000",
      status: "invitation_only",
      description: "Exclusive high-stakes roulette for VIP members only",
    },
    {
      id: 6,
      title: "New Year Mega Tournament",
      date: "Dec 31, 2024",
      time: "23:00",
      location: "Grand Hall",
      category: "Special",
      participants: 500,
      prizePool: "$250,000",
      status: "upcoming",
      description: "Ring in the new year with our biggest tournament yet",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "registering":
        return "bg-green-600";
      case "upcoming":
        return "bg-blue-600";
      case "invitation_only":
        return "bg-purple-600";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    return status.split("_").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-casino-darker to-casino-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join exclusive tournaments, special events, and championship series
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["All Events", "Tournaments", "Special", "VIP", "Regular"].map((category) => (
              <Button
                key={category}
                variant={category === "All Events" ? "casino" : "casino-outline"}
                size="sm"
                className="text-xs md:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => (
              <Card key={event.id} className="game-card hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getStatusColor(event.status)}>
                      {getStatusText(event.status)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.participants} participants</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Ticket className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-semibold text-primary">{event.prizePool}</span>
                    </div>
                  </div>

                  <Button 
                    variant="casino" 
                    className="w-full mt-4"
                    disabled={event.status === "invitation_only"}
                  >
                    {event.status === "invitation_only" ? "VIP Only" : "Register Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-casino-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Don't Miss Out on Our Events
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Register early to secure your spot in our exclusive tournaments and special events
          </p>
          <Button variant="casino" size="lg" className="text-sm md:text-base">
            View All Events
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;
