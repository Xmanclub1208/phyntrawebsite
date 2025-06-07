import React from "react";
import {
  Server,
  Cpu,
  HardDrive,
  Globe,
  Shield,
  Zap,
  Clock,
  Settings,
  ArrowRight,
  Users,
  Boxes,
  Gift,
  MemoryStick,
} from "lucide-react";
import { Helmet } from "react-helmet";

const MINECRAFT_HIGHLIGHTS = [
  {
    image: "https://placehold.co/100",
    title: "Modpacks",
    description: "One-Click",
  },
  {
    image: "https://placehold.co/100",
    title: "Versions",
    description: "All Supported",
  },
  {
    image: "https://placehold.co/100",
    title: "Plugins",
    description: "Auto-Install",
  },
  {
    image: "https://placehold.co/100",
    title: "Backups",
    description: "Automated",
  },
  {
    image: "https://placehold.co/100",
    title: "Panel",
    description: "Custom",
  },
  {
    image: "https://placehold.co/100",
    title: "Hardware",
    description: "Premium",
  },
];

const HeroSection = () => (
  <div className="relative mt-24 mb-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Featured Images Grid  */}
        <div className="flex-1 grid grid-cols-3 gap-3 relative max-w-xl">
          {MINECRAFT_HIGHLIGHTS.map((highlight, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg overflow-hidden 
                ${
                  index === 1
                    ? "translate-y-4"
                    : index === 4
                    ? "-translate-y-4"
                    : ""
                }`}
            >
              <img
                src={highlight.image}
                alt={highlight.title}
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
            <span>Premium Minecraft Hosting</span>
          </div>

          <h1 className="text-4xl text-white font-bold mb-4">
            Level Up Your{" "}
            <span className="bg-clip-text text-transparent bg-red-500">
              Minecraft Server
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Experience lightning-fast performance, instant setup, and unmatched
            reliability with our premium Minecraft server hosting solutions.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">60s</div>
              <div className="text-sm text-gray-500">Setup Time</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">10k+</div>
              <div className="text-sm text-gray-500">Active Servers</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-gray-500">Modpacks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const plans = [
  {
    name: "Starter",
    price: "14.99",
    logo: "https://placehold.co/50",
    specs: {
      ram: "4GB",
      cpu: "3.5 GHz",
      storage: "50GB NVMe",
      backups: "2",
      players: "20",
    },
    features: [
      "One-Click Modpack Installation",
      "Automated Backups",
      "DDoS Protection",
      "Free Subdomain",
      "24/7 Support",
    ],
    popular: false,
    href: "https://example.com",
  },
  {
    name: "Standard",
    price: "24.99",
    logo: "https://placehold.co/50",
    specs: {
      ram: "8GB",
      cpu: "4.0 GHz",
      storage: "100GB NVMe",
      backups: "4",
      players: "40",
    },
    features: [
      "All Starter Features",
      "Custom JAR Support",
      "Plugin Manager",
      "Database Access",
      "Priority Support",
    ],
    popular: true,
    href: "https://example.com",
  },
  {
    name: "Pro",
    price: "39.99",
    logo: "https://placehold.co/50",
    specs: {
      ram: "16GB",
      cpu: "4.5 GHz",
      storage: "250GB NVMe",
      backups: "8",
      players: "100",
    },
    features: [
      "All Standard Features",
      "Dedicated IP",
      "Premium Support",
      "Resource Pack Hosting",
      "Advanced Configuration",
    ],
    popular: false,
    href: "https://example.com",
  },
  {
    name: "Elite",
    price: "59.99",
    logo: "https://placehold.co/50",
    specs: {
      ram: "24GB",
      cpu: "4.8 GHz",
      storage: "500GB NVMe",
      backups: "12",
      players: "200",
    },
    features: [
      "All Pro Features",
      "Additional Ports",
      "Enterprise Support",
      "Multi-Server Management",
      "Custom Startup Scripts",
    ],
    popular: false,
    href: "https://example.com",
  },
  {
    name: "Ultimate",
    price: "89.99",
    logo: "https://placehold.co/50",
    specs: {
      ram: "32GB",
      cpu: "5.0 GHz",
      storage: "1TB NVMe",
      backups: "Unlimited",
      players: "300",
    },
    features: [
      "All Elite Features",
      "Load Balancing",
      "Custom Control Panel",
      "Developer API Access",
      "White-label Solutions",
    ],
    popular: false,
    href: "https://example.com",
  },
  {
    name: "Enterprise",
    price: "149.99",
    logo: "https://placehold.co/50",
    specs: {
      ram: "64GB",
      cpu: "5.2 GHz",
      storage: "2TB NVMe",
      backups: "Unlimited",
      players: "Unlimited",
    },
    features: [
      "All Ultimate Features",
      "Cluster Support",
      "Custom Architecture",
      "Dedicated Account Manager",
      "Hardware Customization",
    ],
    popular: false,
    href: "https://example.com",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Deploy your Minecraft server in under 60 seconds with our automated provisioning system.",
  },
  {
    icon: Settings,
    title: "One-Click Modpacks",
    description:
      "Install popular modpacks with a single click. FTB, Tekkit, and more available instantly.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Enterprise-grade protection against DDoS attacks with automatic mitigation.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Multiple locations worldwide ensuring low latency for players everywhere.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description:
      "High availability infrastructure with real-time monitoring and automated recovery.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description:
      "Expert support team available around the clock to help with any issues.",
  },
];

const PlanCard = ({ plan }) => {
  return (
    <div
      className={`relative bg-black/40 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105
      ${
        plan.popular
          ? "border-red-500"
          : "border-red-900/30 hover:border-red-500/50"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="px-4 py-1 bg-red-500 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-red-500/20">
            <img
              src={plan.logo}
              alt={`${plan.name} Plan`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
          <div className="flex items-center justify-center gap-1">
            <span className="text-3xl font-bold text-white">${plan.price}</span>
            <span className="text-gray-400">/mo</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <MemoryStick className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">{plan.specs.ram} RAM</span>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">{plan.specs.cpu} CPU</span>
          </div>
          <div className="flex items-center gap-3">
            <HardDrive className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">{plan.specs.storage}</span>
          </div>
          <div className="flex items-center gap-3">
            <Boxes className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">{plan.specs.backups} Backups</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">{plan.specs.players} Players</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-500/10">
                <Gift className="w-3 h-3 text-red-500" />
              </div>
              {feature}
            </div>
          ))}
        </div>

        <a
          href={plan.href}
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 border flex items-center justify-center gap-2
          ${
            plan.popular
              ? "bg-gradient-to-r from-red-600 text-white to-red-700 hover:from-red-500 hover:to-red-600 border-red-500/50"
              : "bg-black/40 text-white hover:bg-red-500/10 border-red-900/30 hover:border-red-500/50"
          }`}
        >
          Select Plan
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
const FeatureCard = ({ feature: { icon: Icon, title, description } }) => (
  <div
    className="group relative bg-black/40 backdrop-blur-sm rounded-xl border border-red-900/30 
    hover:border-red-500/50 p-6 transition-all duration-300 hover:scale-105"
  >
    <div
      className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4
      border border-red-900/30 group-hover:border-red-500/50 transition-all duration-300"
    >
      <Icon className="w-6 h-6 text-red-500" />
    </div>
    <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
const BottomCTA = () => (
  <div className="container max-w-screen-xl mx-auto px-4 pb-20">
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-red-900/30 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">
        Need a Custom Solution?
      </h2>
      <p className="text-gray-400 mb-6">
        Looking for custom configurations or dedicated hardware? We've got you
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

const MinecraftPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Minecraft Hosting | InfernoHost</title>
      </Helmet>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] 
          bg-[size:32px_32px] [animation:scroll_50s_linear_infinite]"
        />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Plans Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your needs. All plans include our
              premium features and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Premium Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every server comes packed with premium features designed to
              provide the ultimate Minecraft hosting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
};

export default MinecraftPage;
