import React from "react";
import {
  Cpu,
  HardDrive,
  Network,
  Shield,
  Server,
  Globe,
  Wifi,
  Building2,
  Cloud,
  Gamepad2,
  ChevronRight,
  BarChart3,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet";

const dataCenters = [
  {
    location: "Frankfurt, Germany",
    provider: "Hetzner",
    features: {
      network: "1Gbps/10Gbps Unmetered",
      ddos: "Automatic DDoS Protection",
      uplink: "Multi-Carrier (Level3, Telia)",
      tier: "Tier 4 Facility",
    },
  },
  {
    location: "Helsinki, Finland",
    provider: "Hetzner",
    features: {
      network: "1Gbps/10Gbps Unmetered",
      ddos: "Automatic DDoS Protection",
      uplink: "Multi-Carrier Network",
      tier: "Tier 4 Facility",
    },
  },
  {
    location: "Ashburn, USA",
    provider: "OVH",
    features: {
      network: "1Gbps/10Gbps Unmetered",
      ddos: "VAC DDoS Protection",
      uplink: "Tier 1 Carriers",
      tier: "Tier 4 Facility",
    },
  },
  {
    location: "Singapore",
    provider: "OVH",
    features: {
      network: "1Gbps/10Gbps Unmetered",
      ddos: "VAC DDoS Protection",
      uplink: "Major APAC Carriers",
      tier: "Tier 3 Facility",
    },
  },
];

const HardwarePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Hardware | InfernoHost</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
                <Server className="w-4 h-4" />
                <span>Enterprise Hardware</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cutting-Edge{" "}
                <span className="bg-clip-text text-transparent bg-red-500">
                  Infrastructure
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-8">
                Experience unparalleled performance with our enterprise-grade
                hardware, strategically placed in tier-4 data centers worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#server-specs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors duration-300"
                >
                  View Specifications
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Cpu, label: "Latest Gen CPUs", value: "AMD & Intel" },
                  { icon: HardDrive, label: "Storage", value: "NVMe SSD" },
                  {
                    icon: Shield,
                    label: "Protection",
                    value: "DDoS Mitigation",
                  },
                  { icon: Wifi, label: "Network", value: "Up to 10Gbps" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30"
                  >
                    <stat.icon className="w-6 h-6 text-red-500 mb-2" />
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div className="text-lg font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hardware Section */}
      <div
        id="server-specs"
        className="container max-w-screen-xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-red-500">
            Enterprise-Grade Hardware
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every component is carefully selected and tested to ensure maximum
            performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Gamepad2,
              title: "Game Servers",
              description:
                "Optimized for maximum performance in gaming workloads",
              specs: [
                "AMD Ryzen 9 5950X / Intel i9-13900K",
                "Up to 128GB DDR4 RAM",
                "NVMe SSD Storage",
                "1Gbps Unmetered Network",
              ],
            },
            {
              icon: Server,
              title: "Dedicated Hardware",
              description: "Raw power for demanding applications",
              specs: [
                "AMD EPYC 7003 / Intel Xeon",
                "Up to 512GB ECC DDR4",
                "Customizable Storage",
                "Up to 10Gbps Network",
              ],
            },
            {
              icon: Cloud,
              title: "Cloud Infrastructure",
              description: "Flexible virtual environments for any workload",
              specs: [
                "Dedicated vCPU Cores",
                "Guaranteed RAM",
                "High-Performance Storage",
                "Enterprise Network",
              ],
            },
          ].map((platform, index) => (
            <div
              key={index}
              className="bg-black/40 border border-red-900/30 backdrop-blur-sm rounded-lg p-6 hover:border-red-500/50 transition-all duration-300"
            >
              <platform.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {platform.title}
              </h3>
              <p className="text-gray-400 mb-4">{platform.description}</p>
              <ul className="space-y-2">
                {platform.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <ChevronRight className="w-4 h-4 text-red-500" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Global Infrastructure Map */}
      <div className="container max-w-screen-xl mx-auto px-4 py-16 border-t border-red-900/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-red-500">
            Global Network
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategic data center locations ensuring low latency worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {dataCenters.map((center, index) => (
            <div
              key={index}
              className="bg-black/40 border border-red-900/30 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-red-500" />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {center.location}
                  </h3>
                  <p className="text-sm text-red-500">{center.provider}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {Object.values(center.features).map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-red-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Network Features */}
      <div className="container max-w-screen-xl mx-auto px-4 py-16 border-t border-red-900/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-red-500">
            Enterprise Network Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Multi-layered network infrastructure with advanced DDoS protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: "DDoS Protection",
              description:
                "Advanced mitigation systems protecting your services 24/7",
            },
            {
              icon: BarChart3,
              title: "Network Monitoring",
              description:
                "Real-time traffic analysis and automated optimization",
            },
            {
              icon: Zap,
              title: "Low Latency",
              description:
                "Direct peering with major networks for optimal routing",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 border border-red-900/30 backdrop-blur-sm rounded-lg p-6"
            >
              <feature.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container max-w-screen-xl mx-auto px-4 py-16 border-t border-red-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-red-500">
            Ready to Experience Premium Hosting?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Deploy your server on our enterprise infrastructure in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/games"
              className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors duration-300"
            >
              View Game Servers
            </a>
            <a
              href="/dedicated"
              className="px-6 py-3 rounded-lg bg-black hover:bg-gray-900 text-white font-medium border hover:bg-transparent border-red-500/30 hover:border-red-500/50 transition-colors duration-300"
            >
              Dedicated Servers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwarePage;
