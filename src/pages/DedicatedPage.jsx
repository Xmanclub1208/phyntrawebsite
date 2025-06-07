import React from "react";
import {
  Server,
  Shield,
  Cpu,
  HardDrive,
  Network,
  Building2,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Heart,
  Link,
} from "lucide-react";
import { Helmet } from "react-helmet";

const LOCATIONS = [
  {
    id: "us-east",
    name: "New York",
    region: "US East",
    details: {
      provider: "Equinix NY5",
      certification: "Tier 4",
      power: "N+2 redundancy",
      connectivity: "Major IX presence",
    },
  },
  {
    id: "us-west",
    name: "Los Angeles",
    region: "US West",
    details: {
      provider: "Equinix NY5",
      certification: "Tier 4",
      power: "N+2 redundancy",
      connectivity: "Major IX presence",
    },
  },
  {
    id: "eu-central",
    name: "Frankfurt",
    region: "EU Central",
    details: {
      provider: "Equinix NY5",
      certification: "Tier 4",
      power: "N+2 redundancy",
      connectivity: "Major IX presence",
    },
  },
  {
    id: "eu-west",
    name: "London",
    region: "EU West",
    details: {
      provider: "Equinix NY5",
      certification: "Tier 4",
      power: "N+2 redundancy",
      connectivity: "Major IX presence",
    },
  },
  {
    id: "ap-east",
    name: "Singapore",
    region: "Asia Pacific",
    details: {
      provider: "Equinix NY5",
      certification: "Tier 4",
      power: "N+2 redundancy",
      connectivity: "Major IX presence",
    },
  },
  {
    id: "ap-south",
    name: "Sydney",
    region: "Australia",
    details: {
      provider: "Equinix NY5",
      certification: "Tier 4",
      power: "N+2 redundancy",
      connectivity: "Major IX presence",
    },
  },
];

const SERVERS = [
  {
    name: "Pro-1",
    cpu: "AMD EPYC 7443P",
    cores: "24 Cores",
    ram: "64GB DDR4",
    storage: "2 × 1TB NVMe",
    bandwidth: "10TB",
    price: "199.99",
    href: "https://example.com",
  },
  {
    name: "Pro-2",
    cpu: "AMD EPYC 7443P",
    cores: "24 Cores",
    ram: "128GB DDR4",
    storage: "2 × 2TB NVMe",
    bandwidth: "20TB",
    price: "299.99",
    recommended: true,
    href: "https://example.com",
  },
  {
    name: "Pro-3",
    cpu: "AMD EPYC 7543P",
    cores: "32 Cores",
    ram: "256GB DDR4",
    storage: "2 × 4TB NVMe",
    bandwidth: "30TB",
    price: "399.99",
    href: "https://example.com",
  },
  {
    name: "Enterprise",
    cpu: "AMD EPYC 7643",
    cores: "48 Cores",
    ram: "512GB DDR4",
    storage: "4 × 4TB NVMe",
    bandwidth: "Unlimited",
    price: "699.99",
    href: "https://example.com",
  },
];

const FEATURES = [
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection up to 10Tbps",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "6 locations worldwide with < 25ms latency",
  },
  {
    icon: Heart,
    title: "99.99% Uptime",
    description: "Guaranteed by SLA with compensation",
  },
  {
    icon: Link,
    title: "40Gbps Network",
    description: "Premium tier 1 carrier network",
  },
];

const FEATURED_SPECS = [
  {
    image: "https://placehold.co/100",
    title: "AMD EPYC",
    description: "7443P Series",
  },
  {
    image: "https://placehold.co/100",
    title: "NVMe Storage",
    description: "Enterprise SSD",
  },
  {
    image: "https://placehold.co/100",
    title: "DDR4 ECC",
    description: "Server Memory",
  },
  {
    image: "https://placehold.co/100",
    title: "40Gbps",
    description: "Network",
  },
  {
    image: "https://placehold.co/100",
    title: "Tier 4",
    description: "Data Centers",
  },
  {
    image: "https://placehold.co/100",
    title: "24/7",
    description: "Support",
  },
];

const HeroSection = () => (
  <div className="relative mt-24 mb-16">
    <Helmet>
      <title>Dedicated Servers | Inferno Host</title>
    </Helmet>
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Featured Specs Grid */}
        <div className="flex-1 grid grid-cols-3 gap-3 relative max-w-xl">
          {FEATURED_SPECS.map((spec, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg overflow-hidden group
                  ${
                    index === 1
                      ? "translate-y-4"
                      : index === 4
                      ? "-translate-y-4"
                      : ""
                  }`}
            >
              <img
                src={spec.image}
                alt={spec.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="font-bold">{spec.title}</div>
                <div className="text-red-400 text-xs">{spec.description}</div>
              </div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
            <Server className="w-4 h-4" />
            <span>Enterprise Hardware</span>
          </div>

          <h1 className="text-4xl text-white font-bold mb-4">
            Pure{" "}
            <span className="bg-clip-text text-transparent bg-red-500">
              Bare Metal
            </span>{" "}
            Performance
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Dedicated servers powered by latest gen AMD EPYC processors. Deploy
            high-performance infrastructure with full hardware access and no
            virtualization overhead.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-500">Dedicated Resources</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-sm text-gray-500">Global Locations</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">1hr</div>
              <div className="text-sm text-gray-500">Hardware Replace</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServerLocation = ({ location }) => (
  <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/30 p-6">
    <div className="flex items-start gap-4 mb-4">
      <div className="rounded-full p-2 bg-red-500/10">
        <Building2 className="w-5 h-5 text-red-500" />
      </div>
      <div>
        <h3 className="font-medium text-white text-lg">{location.name}</h3>
        <p className="text-sm text-gray-400">{location.region}</p>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 w-24">Facility:</span>
        <span className="text-sm text-white">{location.details.provider}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 w-24">Tier Rating:</span>
        <span className="text-sm text-white">
          {location.details.certification}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 w-24">Power:</span>
        <span className="text-sm text-white">{location.details.power}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 w-24">Network:</span>
        <span className="text-sm text-white">
          {location.details.connectivity}
        </span>
      </div>
    </div>
  </div>
);

const ServerCard = ({ server }) => (
  <div
    className={`relative backdrop-blur-sm rounded-lg border transition-all duration-300
    ${
      server.recommended
        ? "border-red-500/50 bg-red-500/10"
        : "border-red-900/30 bg-black/40 hover:border-red-500/30"
    }`}
  >
    {server.recommended && (
      <div className="absolute -top-3 left-6 px-3 py-1 bg-red-500 text-white text-sm rounded-full font-medium">
        Most Popular
      </div>
    )}

    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Server className="w-5 h-5 text-red-500" />
        <h3 className="text-xl font-bold text-white">{server.name}</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2 text-gray-400">
          <Cpu className="w-4 h-4" />
          <div>
            <div className="text-white">{server.cpu}</div>
            <div className="text-sm">{server.cores}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <HardDrive className="w-4 h-4" />
          <div>
            <div className="text-white">{server.storage}</div>
            <div className="text-sm">NVMe SSD</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Zap className="w-4 h-4" />
          <div>
            <div className="text-white">{server.ram}</div>
            <div className="text-sm">ECC Memory</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Network className="w-4 h-4" />
          <div>
            <div className="text-white">{server.bandwidth}</div>
            <div className="text-sm">40Gbps Network</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-gray-400 text-sm">$</span>
            <span className="text-3xl font-bold text-white">
              {server.price}
            </span>
          </div>
          <div className="text-sm text-gray-400">per month</div>
        </div>
        <a
          href={server.href}
          className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 group
          ${
            server.recommended
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          Configure
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="border-t border-red-900/30 pt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Full Root Access</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>DDoS Protection Included</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>1-Hour Hardware Replacement</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DedicatedPage = () => (
  <div className="min-h-screen bg-black">
    <HeroSection />

    {/* Features Grid */}
    <div className="container max-w-screen-xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/30 p-6"
          >
            <div className="rounded-full p-2 bg-red-500/10 w-fit mb-4">
              <feature.icon className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Server Plans */}
    <div className="container max-w-screen-xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVERS.map((server, index) => (
          <ServerCard key={index} server={server} />
        ))}
      </div>
    </div>

    {/*  Locations Grid */}
    <div className="container max-w-screen-xl mx-auto px-4 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Data Center Locations
        </h2>
        <p className="text-gray-400">
          Enterprise-grade facilities with redundant power and premium
          connectivity
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS.map((location) => (
          <ServerLocation key={location.id} location={location} />
        ))}
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="container max-w-screen-xl mx-auto px-4 pb-20">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-red-900/30 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Need a Custom Configuration?
        </h2>
        <p className="text-gray-400 mb-6">
          Looking for specific hardware or custom configurations? Our team can
          help build the perfect solution for your needs.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-300"
        >
          Contact Sales
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

export default DedicatedPage;
