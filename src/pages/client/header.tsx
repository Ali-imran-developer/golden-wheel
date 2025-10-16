import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Live Casino", path: "/live-casino" },
    { name: "Sports", path: "/sports" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "FAQ", path: "/faq" },
  ];

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Live Casino", path: "/live-casino" },
    { name: "Sports", path: "/sports" },
  ];

  const mobileNavItems = navItems;
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-casino-darker/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="max-w-[75px] h-full">
              <img src="/logo-2.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems?.map((item) => (
              <Link key={item?.name} to={item?.path} className={cn("text-sm font-medium casino-transition hover:text-primary",
                  isActive(item?.path) ? "text-primary" : "text-muted-foreground")}>
                {item?.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-4">
              <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`} className="cursor-pointer">
                <Button variant="casino-outline" size="lg">
                  Login
                </Button>
              </Link>
              <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`} className="cursor-pointer">
                <Button variant="casino" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold animate-bounce">
                  Sign Up
                </Button>
              </Link>
            </div>

            <Link to={`https://bj07p15aff2020.com/af/42GO1E27/join`} className="cursor-pointer md:hidden">
              <Button variant="casino" size="lg" className="w-full animate-bounce bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Sign Up
              </Button>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-foreground hover:text-primary casino-transition">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-casino-dark rounded-none mt-2 mb-4">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-none text-base font-medium casino-transition",
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;