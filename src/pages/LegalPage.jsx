import React, { useState } from "react";
import { Shield, Lock, FileCheck, AlertCircle, Check } from "lucide-react";
import { Helmet } from "react-helmet";

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    {
      id: "terms",
      label: "Terms of Service",
      icon: FileCheck,
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: Lock,
    },
    {
      id: "aup",
      label: "Acceptable Use Policy",
      icon: Shield,
    },
  ];

  const termsContent = {
    lastUpdated: "June 7, 2025",
    sections: [
      {
        title: "1. Agreement to Terms",
        content:
          "By accessing our game server hosting services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.",
      },
      {
        title: "2. Service Description",
        content:
          "We provide game server hosting services that allow users to host and manage gaming servers. The service includes server deployment, management tools, and technical support as described in your selected plan.",
      },
      {
        title: "3. User Responsibilities",
        content:
          "You are responsible for maintaining the security of your account, including but not limited to the protection of your password. You must notify us immediately of any unauthorized use of your account.",
      },
      {
        title: "4. Payment Terms",
        content:
          "Services are billed in advance on a monthly basis. All fees are non-refundable unless otherwise specified. We reserve the right to modify our pricing with 30 days notice.",
      },
      {
        title: "5. Service Availability",
        content:
          "While we strive for 99.5% uptime, we do not guarantee continuous, uninterrupted access to our services. We reserve the right to suspend services for maintenance or updates.",
      },
      {
        title: "6. Termination",
        content:
          "We may terminate or suspend your account and access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
      },
    ],
  };

  const privacyContent = {
    lastUpdated: "June 7, 2025",
    sections: [
      {
        title: "1. Data Collection",
        content:
          "We collect information that you provide directly to us, including but not limited to your name, email address, billing information, and server configuration preferences.",
      },
      {
        title: "2. Usage Data",
        content:
          "We automatically collect usage information, including server performance metrics, IP addresses, browser type, and interactions with our services.",
      },
      {
        title: "3. Data Protection",
        content:
          "We implement industry-standard security measures to protect your personal information. This includes encryption, firewalls, and secure server facilities.",
      },
      {
        title: "4. Data Sharing",
        content:
          "We do not sell your personal information. We may share data with third-party service providers who assist in operating our services, subject to confidentiality obligations.",
      },
      {
        title: "5. Cookie Policy",
        content:
          "We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our users come from.",
      },
      {
        title: "6. Your Rights",
        content:
          "You have the right to access, correct, or delete your personal information. Contact our support team to exercise these rights.",
      },
    ],
  };

  const aupContent = {
    lastUpdated: "June 7, 2025",
    sections: [
      {
        title: "1. Prohibited Activities",
        content:
          "Users may not use our services for any illegal activities, including but not limited to: hosting malicious content, unauthorized copying of copyrighted material, or distribution of malware.",
      },
      {
        title: "2. Server Usage",
        content:
          "Users must not exceed their allocated server resources or attempt to circumvent server limitations. Any attempt to exploit system resources will result in immediate suspension.",
      },
      {
        title: "3. Content Guidelines",
        content:
          "All content hosted on our servers must comply with applicable laws and regulations. We prohibit discriminatory, harassing, or adult content.",
      },
      {
        title: "4. Network Security",
        content:
          "Users must not engage in network abuse, including DDoS attacks, port scanning, or packet spoofing. Security breaches will result in immediate account termination.",
      },
      {
        title: "5. Fair Use",
        content:
          "Services must be used in accordance with fair use principles. Excessive bandwidth usage or server load may result in service limitations or additional charges.",
      },
      {
        title: "6. Enforcement",
        content:
          "We reserve the right to monitor service usage and take appropriate action against violations, including service suspension or termination without refund.",
      },
    ],
  };

  const renderContent = (content) => (
    <div className="space-y-8">
      <div className="flex items-center gap-2 text-gray-400 mb-8">
        <AlertCircle className="w-5 h-5" />
        <span>Last Updated: {content.lastUpdated}</span>
      </div>

      {content.sections.map((section, index) => (
        <div
          key={index}
          className="border border-red-900/30 rounded-lg p-6 backdrop-blur-sm bg-black/40"
        >
          <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
          <p className="text-gray-400 leading-relaxed">{section.content}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Legal Policies | Phyntra Hosting</title>
      </Helmet>
      {/* Header */}
      <div className="relative pt-24 pb-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Legal Information</span>
            </div>

            <h1 className="text-4xl text-white font-bold mb-6">
              Our Legal{" "}
              <span className="bg-clip-text text-transparent bg-red-500">
                Policies
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              Please review our policies carefully. These documents outline our
              commitments to you and your obligations when using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3
                  ${
                    activeTab === tab.id
                      ? "bg-red-500/10 border-red-500/50 text-white"
                      : "bg-black/40 border-red-900/30 text-gray-400 hover:border-red-500/30"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                {activeTab === tab.id && <Check className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-screen-xl mx-auto pb-20">
          {activeTab === "terms" && renderContent(termsContent)}
          {activeTab === "privacy" && renderContent(privacyContent)}
          {activeTab === "aup" && renderContent(aupContent)}

          {/* Bottom Note */}
          <div className="mt-12 p-6 border border-red-900/30 rounded-lg backdrop-blur-sm bg-black/40">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Need Clarification?
                </h3>
                <p className="text-gray-400">
                  If you have any questions about our policies, please contact
                  our support team at{" "}
                  <a
                    href="https://discord.gg/WfDE4vEaQS"
                    className="text-red-500 hover:text-red-400 transition-colors duration-300"
                  >
                    https://discord.gg/WfDE4vEaQS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
