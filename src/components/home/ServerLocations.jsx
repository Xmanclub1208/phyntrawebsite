import React, { memo } from "react";
import { Globe, Radio, ChevronRight } from "lucide-react";

const LOCATIONS = [
  {
    region: "North America",
    cities: [
      { name: "New York City, USA", ping: "DDoS Protection Included" },
    ],
  },
];

const RegionCard = memo(({ region, cities }) => (
  <div className="bg-black/40 rounded-xl border border-red-900/20 hover:border-red-500/30 transition-all duration-150">
    <div className="p-6 border-b border-red-900/20">
      <h3 className="text-lg font-bold text-white mb-1">{region}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Radio className="w-3 h-3 text-green-500 animate-pulse" />
        <span>All Systems Operational</span>
      </div>
    </div>

    <div className="p-4">
      {cities.map((city) => (
        <div
          key={city.name}
          className="flex items-center justify-between py-3 px-2 
          hover:bg-red-500/5 rounded-lg transition-colors duration-150 group"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-gray-500 group-hover:text-red-500 transition-colors duration-150" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-150">
              {city.name}
            </span>
          </div>
          <span className="text-sm text-gray-400">{city.ping}</span>
        </div>
      ))}
    </div>

    <div className="p-4 pt-0">
      <a
        href={`/hardware`}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg 
          bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/30 
          text-red-500 hover:text-red-400 text-sm font-medium transition-all duration-150"
      >
        Learn more
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </div>
));

const ServerLocations = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container max-w-screen-xl mx-auto px-4 py-16 border-t border-red-900/20">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 
            border border-red-500/20 text-red-500 text-sm mb-6"
          >
            <Globe className="w-4 h-4" />
            <span>
              {LOCATIONS.reduce((acc, loc) => acc + loc.cities.length, 0)}{" "}
              Global Locations
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Strategically Placed{" "}
            <span className="text-red-500">Data Centers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience exceptional gaming performance with our worldwide network
            of low-latency servers, ensuring smooth gameplay for players across
            the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCATIONS.map((location) => (
            <RegionCard key={location.region} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServerLocations);
