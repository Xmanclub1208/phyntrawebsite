import React from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Github,
  Twitter,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const FOOTER_LINKS = [
  {
    title: "Products",
    links: [
      { name: "Game Servers", href: "/games" },
      { name: "Web Hosting", href: "/webhosting" },
      { name: "Dedicated Servers", href: "/dedicated" },
      { name: "VPS Hosting", href: "/vps" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Support Center", href: "/support" },
      { name: "Documentation", href: "/docs" },
      { name: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Hardware", href: "/hardware" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/inferno-host",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/inferno_host",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://discord.gg/inferno-host",
    icon: FaDiscord,
    isFA: true,
    label: "Discord",
  },
];

const LEGAL_LINKS = [{ href: "/legal", text: "Legal Policies" }];

function SocialLink({ href, icon: Icon, isFA, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      aria-label={label}
    >
      <div
        className="absolute inset-0 bg-red-500/20 rounded-lg blur-lg opacity-0 
        group-hover:opacity-100 transition-all duration-300"
      />
      <div
        className="relative w-11 h-11 flex items-center justify-center rounded-lg 
        bg-black/40 backdrop-blur-sm border border-red-900/30 group-hover:border-red-500/50 
        transition-all duration-300 hover:scale-105"
      >
        {isFA ? (
          <Icon
            className="w-5 h-5 text-gray-400 group-hover:text-red-500 
            transition-colors duration-300"
          />
        ) : (
          <Icon
            className="w-5 h-5 text-gray-400 group-hover:text-red-500 
            transition-colors duration-300"
          />
        )}
      </div>
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-2 text-gray-400 hover:text-red-500 
        transition-colors duration-300"
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center 
        transition-colors duration-300 group-hover:bg-red-500/20"
      >
        <ChevronRight
          className="w-3 h-3 transition-transform duration-300
          group-hover:translate-x-0.5"
        />
      </div>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        {children}
      </span>
    </Link>
  );
}

function FooterSection({ section }) {
  return (
    <div className="space-y-6">
      <h3
        className="text-lg font-bold relative w-fit bg-clip-text text-transparent 
        bg-gradient-to-r from-red-500 to-red-600"
      >
        {section.title}
        <div
          className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r 
          from-red-500 to-transparent"
        />
      </h3>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.name}>
            <FooterLink to={link.href}>{link.name}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black border-t border-red-900/30"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 group mb-8"
              aria-label="Inferno Host"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 bg-red-500/50 rounded-lg blur-lg opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
                />
                <div
                  className="relative w-14 h-14 bg-black/40 backdrop-blur-sm rounded-lg border 
                  border-red-500/30 flex items-center justify-center transition-all duration-300 
                  group-hover:border-red-500/50"
                >
                  <Flame
                    className="w-8 h-8 text-red-500 transition-transform duration-300 
                    group-hover:scale-110 group-hover:rotate-12"
                  />
                </div>
              </div>
              <span
                className="font-bold text-2xl tracking-tight bg-clip-text text-transparent 
                bg-gradient-to-r from-red-500 to-red-600"
              >
                INFERNO HOST
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Premium game server hosting with instant deployment and unmatched
              performance. Experience gaming excellence with our cutting-edge
              infrastructure.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {FOOTER_LINKS.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        {/* Legal Section */}
        <div className="pt-8 border-t border-red-900/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm text-center lg:text-left">
              © {currentYear} Inferno Host. All rights reserved.
            </p>
            <nav
              className="flex flex-wrap justify-center gap-8"
              aria-label="Legal"
            >
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.text}
                  to={link.href}
                  className="text-gray-500 hover:text-red-500 text-sm transition-colors 
                    duration-300 flex items-center gap-2 group"
                >
                  {link.text}
                  <ExternalLink
                    className="w-4 h-4 transition-transform duration-300 
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
