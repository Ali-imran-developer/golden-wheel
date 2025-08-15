import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage1 from "@/assets/casino-hero-1.jpg";
import heroImage2 from "@/assets/casino-hero-2.jpg";
import heroImage3 from "@/assets/casino-hero-3.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: "Welcome to GoldenWheel Casino",
      subtitle: "Experience the Ultimate Gaming Thrill",
      description: "Join thousands of players in the most exciting online casino experience with premium games and massive jackpots.",
    },
    {
      image: heroImage2,
      title: "Live Casino Experience",
      subtitle: "Real Dealers, Real Excitement",
      description: "Immerse yourself in authentic casino atmosphere with professional dealers streaming live 24/7.",
    },
    {
      image: heroImage3,
      title: "Spin to Win Big",
      subtitle: "Jackpots Worth Millions",
      description: "Try your luck with our progressive jackpot games and become the next millionaire winner.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 casino-hero-gradient" />
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6 animate-fade-in">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" className="animate-fade-in">
                  <Play className="mr-2 h-5 w-5" />
                  Play Now
                </Button>
                <Button variant="casino-outline" size="xl" className="animate-fade-in">
                  View Games
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full casino-transition z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full casino-transition z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full casino-transition",
              index === currentSlide
                ? "bg-primary"
                : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;