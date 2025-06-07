import React from "react";
import {
  Cpu,
  HardDrive,
  Network,
  Clock,
  Shield,
  Zap,
  Cloud,
  Terminal,
  Server,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet";

const FEATURED_HIGHLIGHTS = [
  {
    image: "https://placehold.co/100",
    title: "vCPU",
    description: "Up to 3 cores",
  },
  {
    image: "https://placehold.co/100",
    title: "RAM",
    description: "Up to 6GB",
  },
  {
    image: "https://placehold.co/100",
    title: "SSD",
    description: "NVMe Storage",
  },
  {
    image: "https://placehold.co/100",
    title: "1TB+",
    description: "Bandwidth",
  },
  {
    image: "https://placehold.co/100",
    title: "Container",
    description: "Ready",
  },
  {
    image: "https://placehold.co/100",
    title: "Control",
    description: "Panel",
  },
];

const COMMON_FEATURES = [
  {
    icon: Terminal,
    feature: "Full Root Access",
    description: "Complete control over your server",
  },
  {
    icon: Shield,
    feature: "DDoS Protection",
    description: "Enterprise-grade security included",
  },
  {
    icon: Server,
    feature: "IPv4 Address",
    description: "Dedicated IP address",
  },
  {
    icon: Clock,
    feature: "Weekly Backups",
    description: "Automated backup system",
  },
  {
    icon: Zap,
    feature: "Instant Setup",
    description: "Deploy in minutes",
  },
  {
    icon: Network,
    feature: "24/7 Network Monitoring",
    description: "Proactive server monitoring",
  },
];

const VPS_PLANS = [
  {
    name: "VPS-1",
    ram: "1GB",
    cpu: "1 vCPU",
    storage: "25GB SSD",
    bandwidth: "1TB",
    price: "9.99",
    href: "https://example.com",
  },
  {
    name: "VPS-2",
    ram: "2GB",
    cpu: "1 vCPU",
    storage: "50GB SSD",
    bandwidth: "2TB",
    price: "19.99",
    href: "https://example.com",
  },
  {
    name: "VPS-3",
    ram: "3GB",
    cpu: "2 vCPU",
    storage: "75GB SSD",
    bandwidth: "3TB",
    price: "29.99",
    href: "https://example.com",
  },
  {
    name: "VPS-4",
    ram: "4GB",
    cpu: "2 vCPU",
    storage: "100GB SSD",
    bandwidth: "4TB",
    price: "39.99",
    recommended: true,
    href: "https://example.com",
  },
  {
    name: "VPS-5",
    ram: "5GB",
    cpu: "3 vCPU",
    storage: "125GB SSD",
    bandwidth: "5TB",
    price: "49.99",
    href: "https://example.com",
  },
  {
    name: "VPS-6",
    ram: "6GB",
    cpu: "3 vCPU",
    storage: "150GB SSD",
    bandwidth: "6TB",
    price: "59.99",
    href: "https://example.com",
  },
];

const HeroSection = () => (
  <div className="relative mt-24 mb-16">
    <Helmet>
      <title>VPS Hosting | Inferno Host</title>
    </Helmet>
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Featured Highlights Grid*/}
        <div className="flex-1 grid grid-cols-3 gap-3 relative max-w-xl">
          {FEATURED_HIGHLIGHTS.map((spec, index) => (
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
            <Cloud className="w-4 h-4" />
            <span>KVM VPS</span>
          </div>

          <h1 className="text-4xl text-white font-bold mb-4">
            High-Performance{" "}
            <span className="bg-clip-text text-transparent bg-red-500">
              Virtual Private Servers
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Instantly deploy powerful VPS instances with dedicated resources,
            full root access, and enterprise-grade infrastructure.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">5min</div>
              <div className="text-sm text-gray-500">Deploy Time</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const CommonFeatures = () => (
  <div className="container max-w-screen-xl mx-auto px-4 mb-16">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-white mb-2">All Plans Include</h2>
      <p className="text-gray-400">
        Enterprise features included with every VPS instance
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {COMMON_FEATURES.map(({ icon: Icon, feature, description }, index) => (
        <div
          key={index}
          className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/30 p-6"
        >
          <div className="rounded-full p-2 bg-red-500/10 w-fit mb-4">
            <Icon className="w-5 h-5 text-red-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      ))}
    </div>
  </div>
);
const ResourceItem = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-1 text-red-500">
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className="text-white font-bold">{value}</span>
  </div>
);

const VPSPlanCard = ({ plan }) => {
  const resources = [
    { icon: Zap, label: "RAM", value: plan.ram },
    { icon: Cpu, label: "CPU", value: plan.cpu },
    { icon: HardDrive, label: "Storage", value: plan.storage },
    { icon: Network, label: "Bandwidth", value: plan.bandwidth },
  ];

  return (
    <div
      className={`relative backdrop-blur-sm rounded-lg border transition-all duration-300
        ${
          plan.recommended
            ? "border-red-500/50 bg-red-500/10"
            : "border-red-900/30 bg-black/40 hover:border-red-500/30"
        }`}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-red-500 text-white text-sm rounded-full font-medium">
          Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Plan Name Section */}
        <div className="lg:w-48">
          <div className="flex items-center gap-2 mb-1">
            <Server className="w-5 h-5 text-red-500" />
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
            Dedicated Resources
          </div>
        </div>

        {/* Resources Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8">
          {resources.map((resource, idx) => (
            <ResourceItem key={idx} {...resource} />
          ))}
        </div>

        {/* Price and CTA Section */}
        <div className="flex items-center justify-between lg:justify-end gap-4 lg:gap-6 lg:min-w-[16rem]">
          <div className="text-right">
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-gray-400 text-sm">$</span>
              <span className="text-3xl font-bold text-white">
                {plan.price}
              </span>
            </div>
            <div className="text-gray-400 text-sm">per month</div>
          </div>
          <a
            href={plan.href}
            className={`h-11 px-4 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 group whitespace-nowrap
              ${
                plan.recommended
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
          >
            Deploy
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const BottomCTA = () => (
  <div className="container max-w-screen-xl mx-auto px-4 pb-20">
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-red-900/30 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Need More Power?</h2>
      <p className="text-gray-400 mb-6">
        Looking for custom configurations or dedicated resources? We've got you
        covered.
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
);

const VPSHostPage = () => (
  <div className="min-h-screen bg-black">
    <HeroSection />
    <CommonFeatures />
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Choose Your Plan</h2>
        <p className="text-gray-400">Flexible plans to match your needs</p>
      </div>
      <div className="space-y-4 mb-16">
        {VPS_PLANS.map((plan, index) => (
          <VPSPlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
    <BottomCTA />
  </div>
);

export default VPSHostPage;
