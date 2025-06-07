import React from "react";
import {
  Check,
  X,
  Globe,
  Shield,
  Rocket,
  Layers,
  HardDrive,
  Code,
  Clock,
  Database,
  Lock,
} from "lucide-react";
import { Helmet } from "react-helmet";
const FEATURED_HIGHLIGHTS = [
  {
    image: "https://placehold.co/100",
    title: "WordPress",
    description: "Optimized",
  },
  {
    image: "https://placehold.co/100",
    title: "cPanel",
    description: "Included",
  },
  {
    image: "https://placehold.co/100",
    title: "SSL",
    description: "Free",
  },
  {
    image: "https://placehold.co/100",
    title: "PHP 8.2",
    description: "Support",
  },
  {
    image: "https://placehold.co/100",
    title: "MySQL",
    description: "Databases",
  },
  {
    image: "https://placehold.co/100",
    title: "Business",
    description: "Email",
  },
];

const HeroSection = () => (
  <div className="relative mt-24 mb-16">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Featured Highlights Grid */}
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
            <Globe className="w-4 h-4" />
            <span>Website Hosting</span>
          </div>

          <h1 className="text-4xl text-white font-bold mb-4">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-red-500">
              Web Hosting
            </span>{" "}
            Platform
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Lightning-fast web hosting with one-click WordPress installation,
            free SSL certificates, and enterprise-grade security. Perfect for
            websites of any size.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">1-Click</div>
              <div className="text-sm text-gray-500">App Install</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30">
              <div className="text-2xl font-bold text-white mb-1">Free</div>
              <div className="text-sm text-gray-500">Migration</div>
            </div>
          </div>

          {/* Quick Features */}
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { icon: Shield, text: "DDoS Protection" },
              { icon: Lock, text: "Free SSL" },
              { icon: Layers, text: "Daily Backups" },
              { icon: Code, text: "Multiple PHP" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400"
              >
                <feature.icon className="w-4 h-4 text-red-500" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WebHostPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "4.99",
      billing: "monthly",
      description: "Perfect for personal websites",
      storage: "10GB SSD",
      bandwidth: "100GB",
      domains: "1 Domain",
      recommended: false,
      features: {
        "Free Domain": true,
        "SSL Certificate": true,
        "cPanel Access": true,
        "Daily Backups": true,
        "Web Application Firewall": true,
        "Email Accounts": "5 Accounts",
        "PHP Versions": "7.4, 8.0, 8.1",
        "WordPress Optimized": true,
        Subdomains: "5",
        "MySQL Databases": "2 DBs",
        Bandwidth: "100GB",
        "DDoS Protection": true,
        "Git Integration": false,
        "Node.js Support": false,
        "Python Support": false,
        "SSH Access": false,
        "Dedicated IP": false,
        "Priority Support": false,
      },
      href: "https://example.com",
    },
    {
      name: "Business",
      price: "9.99",
      billing: "monthly",
      description: "Ideal for small businesses",
      storage: "25GB SSD",
      bandwidth: "500GB",
      domains: "5 Domains",
      recommended: true,
      features: {
        "Free Domain": true,
        "SSL Certificate": true,
        "cPanel Access": true,
        "Daily Backups": true,
        "Web Application Firewall": true,
        "Email Accounts": "20 Accounts",
        "PHP Versions": "All Versions",
        "WordPress Optimized": true,
        Subdomains: "20",
        "MySQL Databases": "10 DBs",
        Bandwidth: "500GB",
        "DDoS Protection": true,
        "Git Integration": true,
        "Node.js Support": true,
        "Python Support": true,
        "SSH Access": true,
        "Dedicated IP": false,
        "Priority Support": false,
      },
      href: "https://example.com",
    },
    {
      name: "Professional",
      price: "19.99",
      billing: "monthly",
      description: "For high-traffic websites",
      storage: "100GB SSD",
      bandwidth: "Unlimited",
      domains: "Unlimited",
      recommended: false,
      features: {
        "Free Domain": true,
        "SSL Certificate": true,
        "cPanel Access": true,
        "Daily Backups": true,
        "Web Application Firewall": true,
        "Email Accounts": "Unlimited",
        "PHP Versions": "All Versions",
        "WordPress Optimized": true,
        Subdomains: "Unlimited",
        "MySQL Databases": "Unlimited",
        Bandwidth: "Unlimited",
        "DDoS Protection": true,
        "Git Integration": true,
        "Node.js Support": true,
        "Python Support": true,
        "SSH Access": true,
        "Dedicated IP": true,
        "Priority Support": true,
      },
      href: "https://example.com",
    },
  ];

  const featureCategories = {
    "Core Features": [
      "Free Domain",
      "SSL Certificate",
      "cPanel Access",
      "Daily Backups",
      "Web Application Firewall",
    ],
    "Email & Domains": ["Email Accounts", "Subdomains", "Dedicated IP"],
    "Development Tools": [
      "PHP Versions",
      "MySQL Databases",
      "Git Integration",
      "Node.js Support",
      "Python Support",
      "SSH Access",
    ],
    "Performance & Security": [
      "Bandwidth",
      "WordPress Optimized",
      "DDoS Protection",
      "Priority Support",
    ],
  };

  const renderFeatureValue = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <X className="w-5 h-5 text-gray-500" />
      );
    }
    return <span className="text-white">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Web Hosting | Inferno Host</title>
      </Helmet>
      <HeroSection />
      {/* Plans Grid */}
      <div className="container max-w-screen-xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden
                ${
                  plan.recommended
                    ? "border-red-500/50 bg-red-500/10"
                    : "border-red-900/30 bg-black/40 hover:border-red-500/30"
                }`}
            >
              {plan.recommended && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                  Recommended
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400">/mo</span>
                  </div>
                </div>

                {/* Resource Specs */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <HardDrive className="w-4 h-4" />
                    <span>
                      Storage:{" "}
                      <span className="text-white">{plan.storage}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Globe className="w-4 h-4" />
                    <span>
                      Bandwidth:{" "}
                      <span className="text-white">{plan.bandwidth}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Database className="w-4 h-4" />
                    <span>
                      Domains:{" "}
                      <span className="text-white">{plan.domains}</span>
                    </span>
                  </div>
                </div>

                <a
                  href={plan.href}
                  className={`w-full py-3 px-4 rounded-lg transition-colors duration-300 font-medium
                  ${
                    plan.recommended
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-red-900/30 overflow-hidden">
          <div className="p-6 border-b border-red-900/30">
            <h2 className="text-2xl font-bold text-white">
              Feature Comparison
            </h2>
            <p className="text-gray-400">
              Detailed comparison of features across all plans
            </p>
          </div>

          <div className="divide-y divide-red-900/30">
            {Object.entries(featureCategories).map(([category, features]) => (
              <div key={category}>
                <div className="p-4 bg-black/40">
                  <h3 className="font-bold text-white">{category}</h3>
                </div>
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="grid grid-cols-4 p-4 hover:bg-red-500/5"
                  >
                    <div className="text-gray-400">{feature}</div>
                    {plans.map((plan, index) => (
                      <div key={index} className="flex justify-center">
                        {renderFeatureValue(plan.features[feature])}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/30">
            <Lock className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Security First
            </h3>
            <p className="text-gray-400">
              Free SSL certificates, DDoS protection, and daily backups included
              with all plans.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/30">
            <Clock className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-400">
              Our expert support team is available around the clock to help you
              with any issues.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/30">
            <Rocket className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              High Performance
            </h3>
            <p className="text-gray-400">
              SSD storage, optimized servers, and global CDN for maximum speed.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            All plans include 30-day money-back guarantee. Need a custom plan?
          </p>
          <a
            href="/contact"
            className="text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            Contact our sales team
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebHostPage;
