import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dice1, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-casino-darker via-background to-casino-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 md:mb-12">
          <div className="relative inline-block">
            <Dice1 className="h-16 w-16 md:h-24 md:w-24 text-primary mx-auto mb-6 animate-bounce" />
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4 md:mb-6 tracking-tight">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Oops! Lost in the Casino?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed">
            Looks like this page took a gamble and lost. The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-3 md:space-y-4 max-w-md mx-auto">
          <Link to="/">
            <Button variant="casino" size="lg" className="w-full text-base md:text-lg py-6">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
          <Button 
            variant="casino-outline" 
            size="lg" 
            className="w-full text-base md:text-lg py-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sports">
              <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                Sports
              </Button>
            </Link>
            <Link to="/live-casino">
              <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                Live Casino
              </Button>
            </Link>
            <Link to="/promotions">
              <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                Promotions
              </Button>
            </Link>
            <Link to="/tournaments">
              <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                Tournaments
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;