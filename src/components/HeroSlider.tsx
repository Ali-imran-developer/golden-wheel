import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBanners } from "@/hooks/useBanners";
import { useSelector } from "react-redux";
import { ensureArray } from "@/helper-functions/use-formater";

const banners = [
  "/banner/banner1.jpg",
  "/banner/banner2.jpg",
  "/banner/banner3.jpg",
  "/banner/banner4.jpg",
  "/banner/banner5.jpg",
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isLoading, handleGetBanners } = useBanners();
  const { bannersList } = useSelector((state: any) => state.Banners);
  const displayBanners = isLoading || !bannersList?.length ? banners : bannersList;

  useEffect(() => {
    handleGetBanners();

  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayBanners?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [displayBanners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayBanners?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayBanners?.length) % displayBanners?.length);
  };

  return (
    <div className="relative h-[300px] overflow-hidden">
      {ensureArray(displayBanners)?.map((slide: any, index: number) => {
        const imageUrl = typeof slide === 'string' ? slide : slide?.images?.[0];
        return (
          <div key={index} className={cn("absolute inset-0 transition-opacity duration-1000", index === currentSlide ? "opacity-100" : "opacity-0")}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageUrl})` }} />
          </div>
        );
      })}

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

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {ensureArray(displayBanners)?.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={cn("w-3 h-3 rounded-full casino-transition", index === currentSlide ? "bg-primary" : "bg-white/30 hover:bg-white/50")} />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;