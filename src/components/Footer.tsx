import { Link } from "react-router-dom";
import { Dice1, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "About", path: "/about" },
      { name: "Live Casino", path: "/live-casino" },
      { name: "Sports", path: "/sports" },
      { name: "Tournaments", path: "/tournaments" },
    ],
    "Support": [
      { name: "Contact", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "Blogs", path: "/blogs" },
      { name: "Help Center", path: "/help" },
    ],
    "Account": [
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
      { name: "My Account", path: "/account" },
      { name: "Promotions", path: "/promotions" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-casino-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Dice1 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">GoldenWheel</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Experience the thrill of premium online casino gaming with 
              secure transactions and 24/7 customer support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary casino-transition"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary casino-transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GoldenWheel Casino. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary casino-transition text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary casino-transition text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/responsible-gaming"
              className="text-muted-foreground hover:text-primary casino-transition text-sm"
            >
              Responsible Gaming
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;