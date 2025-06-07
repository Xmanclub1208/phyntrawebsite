import React, { useState, useEffect, memo } from "react";
import {
  Server,
  Shield,
  Globe,
  Zap,
  ChevronRight,
  Gamepad2,
} from "lucide-react";

const GAMES = [
  {
    id: 1,
    title: "Minecraft",
    icon: "https://placehold.co/75",
    slug: "minecraft",
  },
  {
    id: 2,
    title: "CS:GO",
    icon: "https://placehold.co/75",
    slug: "cs-go",
  },
  {
    id: 3,
    title: "Palworld",
    icon: "https://placehold.co/75",
    slug: "palworld",
  },
];

const SERVER_STATS = [
  {
    icon: Server,
    label: "Server Uptime",
    value: "99.99%",
    description: "Industry-leading reliability",
  },
  {
    icon: Shield,
    label: "DDoS Protection",
    value: "24/7/365",
    description: "Advanced mitigation",
  },
  {
    icon: Globe,
    label: "Global Locations",
    value: "25+",
    description: "Worldwide coverage",
  },
  {
    icon: Zap,
    label: "Power Usage",
    value: "Green",
    description: "Eco-friendly hosting",
  },
];

const GridBackground = memo(() => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
    <div className="relative h-full">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [animation:scroll_50s_linear_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-70%  to-black" />
    </div>
  </div>
));

const GameCard = memo(({ game }) => (
  <a
    href={`/${game.slug}`}
    className="group flex items-center gap-4 p-3 bg-black/40 rounded-xl border border-red-900/30 
      transition-all duration-150 hover:border-red-500/50 hover:scale-105"
  >
    <img
      src={game.icon}
      alt={game.title}
      loading="lazy"
      className="w-12 h-12 rounded-lg object-cover"
    />
    <div className="flex-1">
      <div className="font-medium text-white group-hover:text-red-500 transition-colors duration-150">
        {game.title}
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-150" />
  </a>
));

const PopularGames = memo(() => (
  <div className="flex flex-col gap-3 w-full max-w-sm">
    <div className="text-sm text-gray-400 mb-2">Popular Games</div>
    {GAMES.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
));

const ServerStat = memo(
  ({ stat, index, isVisible, hoveredIndex, setHoveredIndex }) => {
    const Icon = stat.icon;

    return (
      <div
        className={`relative overflow-hidden bg-black/40 backdrop-blur-sm p-6 rounded-xl border 
        transition-all duration-150 transform
        ${
          hoveredIndex === index
            ? "border-red-500 scale-105 shadow-lg shadow-red-500/20"
            : "border-red-900/30"
        }
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent transition-opacity duration-150
          ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
        />

        <div className="relative z-10">
          <div
            className={`w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-red-950 to-black 
          flex items-center justify-center border transition-all duration-150
          ${
            hoveredIndex === index ? "border-red-500/50" : "border-red-900/30"
          }`}
          >
            <Icon
              className={`w-5 h-5 transition-all duration-150 
            ${
              hoveredIndex === index ? "text-red-500 scale-110" : "text-red-700"
            }`}
            />
          </div>
          <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
          <div
            className={`text-2xl font-bold transition-colors duration-150 
          ${hoveredIndex === index ? "text-red-500" : "text-white"}`}
          >
            {stat.value}
          </div>
          <div className="text-xs text-gray-500">{stat.description}</div>
        </div>
      </div>
    );
  }
);

const ServerStats = memo(({ isVisible }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVER_STATS.slice(0, 4).map((stat, index) => (
        <ServerStat
          key={index}
          stat={stat}
          index={index}
          isVisible={isVisible}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
});

const GlowingButton = memo(({ primary, children, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden px-8 py-4 rounded-lg font-medium 
        transition-all duration-150 transform
        ${
          primary
            ? "bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500/30"
            : "bg-black/40 border border-red-500/30 text-gray-200"
        }
        ${isHovered ? "scale-105 shadow-lg shadow-red-500/20" : "scale-100"}
        hover:border-red-500/50
      `}
    >
      <div
        className={`
          absolute inset-0 transition-all duration-150
          ${
            primary
              ? "bg-gradient-to-r from-red-500 to-red-600 opacity-0 hover:opacity-100"
              : "bg-gradient-to-r from-red-500/10 to-transparent opacity-0 hover:opacity-100"
          }
        `}
      />
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </a>
  );
});

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div
          className={`transition-all duration-500 transform
          ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl lg:text-7xl font-semibold mb-8 leading-tight">
            <div className="mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-500">
                Level Up Your
              </span>
            </div>
            <div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                Gaming Empire
              </span>
            </div>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Experience next-generation game server hosting with instant
            deployment, military-grade protection, and performance that defies
            expectations
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <GlowingButton primary={true} href="/games">
              Browse Games
              <Gamepad2 className="w-5 h-5" />
            </GlowingButton>
            <GlowingButton primary={false} href="/dedicated">
              Dedicated Servers
              <ChevronRight className="w-5 h-5" />
            </GlowingButton>
          </div>
        </div>

        <div
          className={`transition-all duration-500 delay-150 transform
          ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <PopularGames />
        </div>
      </div>

      <div className="mt-24">
        <ServerStats isVisible={isVisible} />
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="relative min-h-screen bg-black overflow-hidden">
    <GridBackground />
    <div className="container mx-auto py-16">
      <HeroContent />
    </div>
  </section>
);

export default Hero;
