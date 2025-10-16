import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupModal = () => {

  return (
    <div className="py-8 md:py-12 bg-background relative">      
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
              <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`} className="cursor-pointer">
                <Button variant="casino" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-6 font-semibold">
                  Sign Up Now
                </Button>
              </Link>
              <Link to={"/"}>
                <Button variant="casino-outline" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-6">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupModal;
