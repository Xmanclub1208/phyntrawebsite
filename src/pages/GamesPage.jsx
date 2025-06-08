import React, { useState } from "react";
import { Search, Server } from "lucide-react";
import { Helmet } from "react-helmet";
const games = [
  {
    id: 1,
    title: "Minecraft",
    icon: "https://minecraft.wiki/images/Grass_Block_JE7_BE6.png?424c1",
    category: "Sandbox",
    minPrice: "3.00",
    reviews: 20,
    active: 15,
    href: "https://billing.phyntra.net/products/minecraft",
  },
  {
    id: 1,
    title: "Rust",
    icon: "https://pbs.twimg.com/profile_images/1339528561129041920/ZmFfbF-T_400x400.png",
    category: "Sandbox",
    minPrice: "3.00",
    reviews: 0,
    active: 0,
    href: "https://Sorry we don't offer that yet!",
  },
  {
    id: 1,
    title: "Teamspeak",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ec/TeamSpeak_logo_renovado.png",
    category: "Voice",
    minPrice: "3.00",
    reviews: 0,
    active: 0,
    href: "https://Sorry we don't offer that yet!",
  },
];

const categories = [
  "All Games",
  "Sandbox",
  "FPS",
  "Survival",
  "Strategy",
  "RPG",
  "Voice",
];

const filters = [
  { name: "Plugin Support", count: 45 },
  { name: "Anti-Cheat", count: 28 },
  { name: "Cross-Play", count: 15 },
  { name: "Custom Domain", count: 52 },
  { name: "Backup System", count: 63 },
];

const HeroSection = () => (
  <div className="relative mt-24 mb-16">
    {" "}
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Featured Games Grid */}
        <div className="flex-1 grid grid-cols-3 gap-3 relative max-w-xl">
          {games.slice(0, 6).map((game, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg overflow-hidden ${
                index === 1
                  ? "translate-y-4"
                  : index === 4
                  ? "-translate-y-4"
                  : ""
              }`}
            >
              <img
                src={game.icon}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
            <Server className="w-4 h-4" />
            <span>{games.length} Games Available</span>
          </div>

          <h1 className="text-4xl text-white font-bold mb-4">
            Find the Perfect{" "}
            <span className="bg-clip-text text-transparent bg-red-500">
              Game Server
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Browse our collection of optimized game servers. From Minecraft to
            Rust, we've got your favorite games covered with high-performance
            hosting.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">
                {Object.keys(categories).length - 1}+
              </div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">
                {games
                  .reduce((acc, game) => acc + game.active, 0)
                  .toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Active Servers</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">
                {games
                  .reduce((acc, game) => acc + game.reviews, 0)
                  .toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GameCard = ({ game }) => {
  return (
    <a
      href={game.href}
      className="group relative bg-black/40 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer block"
    >
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={game.icon}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="transform transition-all duration-300 translate-y-8 group-hover:translate-y-0">
          {/* Title */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white truncate pr-2">
              {game.title}
            </h3>
          </div>

          {/* Category and Price */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-red-400">{game.category}</span>
            <div className="text-lg font-bold text-red-500">
              ${game.minPrice}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const SearchBar = ({ value, onChange }) => (
  <div className="relative group max-w-2xl mx-auto">
    <div
      className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 rounded-xl blur-xl"
    />
    <div className="relative">
      <input
        type="text"
        placeholder="Search games..."
        value={value}
        onChange={onChange}
        className="w-full px-6 py-4 bg-black/40 backdrop-blur-sm rounded-xl border 
          border-red-900/30 focus:border-red-500/50 outline-none transition-all duration-300 
          pl-12 text-white placeholder-gray-500"
      />
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 
        text-gray-500 group-hover:text-red-500 transition-colors duration-300"
      />
    </div>
  </div>
);

const GamesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Games");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredGames = games.filter((game) => {
    const matchesCategory =
      activeCategory === "All Games" || game.category === activeCategory;
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.every((filter) => game.features.includes(filter));

    return matchesCategory && matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <Helmet>
          <title>Games | Inferno Host</title>
        </Helmet>
        <HeroSection />

        {/* Games Section */}
        <div className="container mx-auto max-w-screen-xl px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-red-500">
              Available Game Servers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our selection of optimized game servers. Each server
              is configured for maximum performance and comes with easy-to-use
              management tools.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-red-500 text-white"
                      : "bg-black/40 text-gray-400 hover:text-red-500"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 mb-20">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="text-center pb-16">
            <p className="text-gray-500 text-sm">
              Can't find your game?{" "}
              <a
                href="https://discord.gg/WfDE4vEaQS"
                className="text-red-500 hover:text-red-400 transition-colors duration-300"
              >
                Request a listing
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
