import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const SignupModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="py-8 md:py-12 bg-gradient-to-r from-primary/20 to-primary/10 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 p-2 hover:bg-background/20 rounded-full transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-foreground" />
      </button>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="game-card border-2 border-primary/50">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Ready to Start Winning?
            </CardTitle>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Join thousands of players and claim your welcome bonus today!
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="casino"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-6 font-semibold"
                onClick={() => window.location.href = "/register"}
              >
                Sign Up Now
              </Button>
              <Button
                variant="casino-outline"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-6"
                onClick={() => window.location.href = "https://dashboard.beijing.com"}
              >
                Go to Dashboard
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:underline font-semibold">
                Login here
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupModal;
