import { React, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Github,
  Twitter,
  Facebook,
  BarChart,
  Shield,
  Linkedin,
  Clock,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  FileQuestion,
  Headphones,
  Users,
} from "lucide-react";

const SUPPORT_HIGHLIGHTS = [
  {
    image: "https://placehold.co/100",
    title: "Live Chat",
    description: "Instant",
    stats: "< 2min response",
  },
  {
    image: "https://placehold.co/100",
    title: "Tickets",
    description: "Tracked",
    stats: "24/7 Support",
  },
  {
    image: "https://placehold.co/100",
    title: "Discord",
    description: "Community",
    stats: "10k+ members",
  },
  {
    image: "https://placehold.co/100",
    title: "Phone",
    description: "Priority",
    stats: "Premium only",
  },
  {
    image: "https://placehold.co/100",
    title: "Guides",
    description: "Resources",
    stats: "500+ articles",
  },
  {
    image: "https://placehold.co/100",
    title: "Forum",
    description: "Community",
    stats: "Active daily",
  },
];

const SUPPORT_STATS = [
  {
    icon: Clock,
    label: "Response Time",
    value: "< 15min",
    description: "Average first reply",
  },
  {
    icon: ShieldCheck,
    label: "Resolution Rate",
    value: "99%",
    description: "First contact resolution",
  },
  {
    icon: BarChart,
    label: "Satisfaction",
    value: "4.9/5",
    description: "Customer rating",
  },
  {
    icon: Users,
    label: "Support Team",
    value: "24/7",
    description: "Global coverage",
  },
];
const SupportStat = ({
  stat,
  index,
  isVisible,
  hoveredIndex,
  setHoveredIndex,
}) => (
  <div
    className={`relative overflow-hidden bg-black/40 backdrop-blur-sm p-6 rounded-xl border 
      transition-all duration-500 transform
      ${
        hoveredIndex === index
          ? "border-red-500 scale-105 shadow-lg shadow-red-500/20"
          : "border-red-900/30"
      }
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent transition-opacity duration-300
      ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
    />

    <div className="relative z-10">
      <div
        className={`w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-red-950 to-black 
        flex items-center justify-center border transition-all duration-300
        ${hoveredIndex === index ? "border-red-500/50" : "border-red-900/30"}`}
      >
        <stat.icon
          className={`w-5 h-5 transition-all duration-300 
          ${
            hoveredIndex === index ? "text-red-500 scale-110" : "text-red-700"
          }`}
        />
      </div>
      <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
      <div
        className={`text-2xl font-bold transition-colors duration-300 
        ${hoveredIndex === index ? "text-red-500" : "text-white"}`}
      >
        {stat.value}
      </div>
      <div className="text-xs text-gray-500">{stat.description}</div>
    </div>
  </div>
);
const SupportPage = () => {
  const primaryContactMethods = [
    {
      icon: MessageSquare,
      title: "Discord Community",
      description:
        "Join our Discord server for instant support and community discussions",
      action: "Join Discord",
      link: "https://discord.gg/infernohost",
      badge: "Recommended",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your inquiry",
      action: "support@infernohost.com",
      link: "mailto:support@infernohost.com",
    },
    {
      icon: Headphones,
      title: "Support Portal",
      description: "Create a ticket in our support system for tracking",
      action: "Open Ticket",
      link: "https://support.infernohost.com",
    },
  ];

  const additionalSupport = [
    {
      icon: Phone,
      title: "Priority Phone Support",
      description: "24/7 phone support for urgent issues",
      details: "+1 (555) 123-4567",
      badge: "Premium",
    },
    {
      icon: FileQuestion,
      title: "Knowledge Base",
      description: "Find answers in our documentation",
      link: "/kb",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other server owners",
      link: "/forum",
    },
  ];

  const socialLinks = [
    { icon: Twitter, link: "#", label: "Twitter - @infernohost" },
    { icon: Facebook, link: "#", label: "Facebook Community" },
    { icon: Github, link: "#", label: "Github Page" },
    { icon: Linkedin, link: "#", label: "LinkedIn Updates" },
  ];

  const HeroSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    return (
      <div className="relative mt-24 mb-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Support Options Grid  */}
            <div className="flex-1 grid grid-cols-3 gap-3 relative max-w-xl">
              {SUPPORT_HIGHLIGHTS.map((support, index) => (
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
                    src={support.image}
                    alt={support.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm hidden group-hover:block transition-all duration-300">
                    <div className="font-bold">{support.title}</div>
                    <div className="text-red-400 text-xs">{support.stats}</div>
                  </div>
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
                <Headphones className="w-4 h-4" />
                <span>24/7 Expert Support</span>
              </div>

              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                We're Here to
                <br />
                <span className="bg-clip-text text-transparent bg-red-500">
                  Help You Succeed
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8">
                Get instant support through multiple channels. Our expert team
                is available 24/7 to help you with any questions or technical
                issues.
              </p>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: MessageSquare, text: "Live Chat Available" },
                  { icon: Globe, text: "Global Support Team" },
                  { icon: Shield, text: "Premium Support" },
                  { icon: Clock, text: "Fast Response Time" },
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

          {/* Support Stats */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUPPORT_STATS.map((stat, index) => (
                <SupportStat
                  key={index}
                  stat={stat}
                  index={index}
                  isVisible={isVisible}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Support Portal | Inferno Host</title>
      </Helmet>
      <HeroSection />

      {/* Primary Contact Methods */}
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {primaryContactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/30 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <Icon className="w-8 h-8 text-red-500" />
                  {method.badge && (
                    <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-500">
                      {method.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <span className="inline-flex items-center gap-2 text-red-500 group-hover:text-red-400 transition-colors duration-300">
                  {method.action} <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>

        {/* Additional Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {additionalSupport.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <Icon className="w-8 h-8 text-red-500" />
                  {method.badge && (
                    <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-500">
                      {method.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                {method.details && (
                  <div className="text-red-500">{method.details}</div>
                )}
                {method.link && (
                  <a
                    href={method.link}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors duration-300"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/30 mb-16">
          <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300 group"
                >
                  <Icon className="w-6 h-6" />
                  <span>{social.label}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Emergency Support Banner */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 flex items-center gap-4">
          <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Premium Support Available
            </h3>
            <p className="text-gray-400">
              For priority support and faster response times, upgrade to our
              premium support plan or call our dedicated support line at{" "}
              <a
                href="tel:+18001234567"
                className="text-red-500 hover:text-red-400 transition-colors duration-300"
              >
                +1 (800) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
