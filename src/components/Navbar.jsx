import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Flame, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "https://discord.gg/WfDE4vEaQS", label: "Support" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Navbar Background */}
        <div
          className={`absolute inset-0 transition-colors duration-200
            before:absolute before:inset-0 before:bg-black
            after:absolute after:inset-0
            ${
              isScrolled
                ? "after:bg-black/80 after:backdrop-blur-md"
                : "after:bg-transparent"
            }`}
        />

        {/* Navbar Content */}
        <nav className="relative h-20">
          <div className="container mx-auto px-6 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-lg bg-red-500/50 blur-md opacity-0
                    group-hover:opacity-100 duration-300"
                  />
                  <div
                    className="relative flex items-center justify-center w-10 h-10 rounded-lg
                    bg-black/20 border border-red-500/20 group-hover:border-red-500/40 duration-300"
                  >
                    <img
                      src="https://images-ext-1.discordapp.net/external/qiOzzaB380XJPl7BodELiO5A1w2mCS_FK-fuutXyxzI/https/i.postimg.cc/FzwHGZ8s/redphyntra.png?format=webp&quality=lossless&width=549&height=561"
                      className="w-auto h-auto text-red-500 group-hover:scale-110 duration-300"
                      alt="logo"
                    />
                  </div>
                </div>
                <span
                  className="font-bold text-xl bg-clip-text text-transparent
                  bg-gradient-to-r from-red-500 to-red-600"
                >
                  PHYNTRA HOSTING
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {links.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `text-md hover:text-red-500 duration-200 ${
                        isActive ? "text-red-500" : "text-gray-300"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link
                  to="https://billing.phyntra.net/login"
                  className="px-6 py-2 text-sm font-medium text-white rounded-lg
                    bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500
                    hover:to-red-600 border border-red-500/30 hover:border-red-500/50
                    duration-200 hover:scale-105"
                >
                  Login
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 hover:bg-white/5 rounded-lg duration-200"
              >
                <Menu className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </nav>

        {/* Border Line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-200
            bg-gradient-to-r from-transparent via-red-950/50 to-transparent
            ${isScrolled ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-red-950/50">
              <div className="flex items-center gap-3">
                <Flame className="w-8 h-8 text-red-500" />
                <span className="text-xl font-bold text-red-500">Menu</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-lg duration-200"
              >
                <X className="w-8 h-8 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="container mx-auto px-6 py-8">
                {links.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 text-lg text-center duration-200 ${
                        isActive
                          ? "text-red-500"
                          : "text-gray-300 hover:text-red-500"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-red-950/50">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block py-4 text-lg text-center font-medium text-white rounded-lg
                  bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500
                  hover:to-red-600 border border-red-500/30 hover:border-red-500/50
                  duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-14" />
    </>
  );
}
