import React, { memo, useState, useCallback, useMemo } from "react";
import {
  Cpu,
  Shield,
  Gauge,
  Clock,
  Cloud,
  Terminal,
  Wrench,
  HeartPulse,
  ChevronRight,
  Check,
} from "lucide-react";

const FEATURES = Object.freeze([
  {
    icon: Cpu,
    title: "Intel Xeon™ Processors",
    description:
      "Latest generation processors for maximum performance and reliability.",
    specs: ["Up to 3.7 GHz", "8 Threads", "4 Cores"],
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Enterprise-grade protection against attacks, keeping your server online 24/7.",
    specs: ["Layer 7 Protection", "Auto Mitigation", "Real-time Monitoring"],
  },
  {
    icon: Gauge,
    title: "NVMe SSD Storage",
    description:
      "Lightning-fast storage for instant load times and smooth gameplay.",
    specs: ["560MB/s Read", "Sub-ms Latency", "560MB/s Write"],
  },
  {
    icon: Clock,
    title: "Instant Setup",
    description:
      "Deploy your server in under 2 minutes with our automated system.",
    specs: ["Auto-Config", "Quick Restore", "Template System"],
  },
  {
    icon: Cloud,
    title: "Global Network",
    description:
      "Strategic location for optimal latency and performance.",
    specs: ["1Gbps Uplink", "Anti-lag System", "Smart Routing"],
  },
  {
    icon: Terminal,
    title: "User Friendly Panel",
    description: "Complete control over your server with a user friendly panel.",
    specs: ["Clean Layout", "Custom Modules", "SSH Support"],
  },
  {
    icon: Wrench,
    title: "Plugin Support",
    description: "Easy installation of plugins with one-click setup.",
    specs: ["Plugin Manager", "Easy Updates", "Version Control"],
  },
  {
    icon: HeartPulse,
    title: "24/7 Support",
    description: "Expert support team available around the clock to help you.",
    specs: ["< 30min Response", "Discord Support Server", "Billing Panel Tickets"],
  },
]);

const FeatureSpec = memo(({ spec }) => (
  <li className="flex items-center text-sm text-gray-400">
    <Check className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
    <span>{spec}</span>
  </li>
));

const FeatureCard = memo(({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const specsList = useMemo(
    () => (
      <ul className="space-y-2">
        {feature.specs.map((spec, i) => (
          <FeatureSpec key={i} spec={spec} />
        ))}
      </ul>
    ),
    [feature.specs]
  );
  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        className="relative h-full bg-black/40 backdrop-blur-sm rounded-xl border transition-all duration-150 
        group-hover:border-red-500/50 border-red-900/30 p-6 group-hover:-translate-y-1"
      >
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 
          group-hover:opacity-100 transition-all duration-150"
        />

        <div className="relative z-10">
          <div className="w-12 h-12 mb-6">
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-red-500/20 rounded-lg blur-md opacity-0 
                group-hover:opacity-100 transition-all duration-150"
              />
              <div
                className="relative w-full h-full bg-gradient-to-br from-red-950 to-black rounded-lg 
                flex items-center justify-center border border-red-500/20 transition-all duration-150 
                group-hover:border-red-500/50"
              >
                <Icon
                  className="w-6 h-6 text-red-500 transition-transform duration-150 
                  group-hover:scale-110 group-hover:text-red-400"
                />
              </div>
            </div>
          </div>

          <h3
            className="text-lg font-bold text-white group-hover:text-red-500 
            transition-colors duration-150 mb-3"
          >
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {feature.description}
          </p>

          <div
            className={`transform transition-all duration-150 ${
              isHovered
                ? "opacity-100 translate-y-0 mt-4"
                : "opacity-0 translate-y-4 mt-0"
            }`}
          >
            <div className="pt-4 border-t border-red-500/10">{specsList}</div>
          </div>

          <div
            className={`absolute bottom-6 left-6 transition-all duration-150 ${
              isHovered
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex items-center text-sm text-red-500 font-medium">
              <span>Learn more</span>
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
const SectionHeader = memo(() => (
  <div className="text-center mb-16 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-red-500">
      Why Choose Phyntra Hosting
    </h2>
    <p className="text-lg text-gray-400">
      Experience unmatched performance and reliability with our premium hosting
      infrastructure, backed by cutting-edge technology and dedicated support.
    </p>
  </div>
));

const FeatureGrid = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {FEATURES.map((feature, index) => (
      <FeatureCard key={index} feature={feature} index={index} />
    ))}
  </div>
));

const Features = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="relative container mx-auto max-w-screen-xl px-4">
        <SectionHeader />
        <FeatureGrid />
      </div>
    </section>
  );
};

export default memo(Features);
