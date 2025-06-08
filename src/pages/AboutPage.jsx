import React from "react";
import { Server, Users, Trophy } from "lucide-react";
import { Helmet } from "react-helmet";

const stats = [
  { value: "600+", label: "Active Players" },
  { value: "99.5%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "1", label: "Location" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>About Us | Phyntra Hosting</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
              <Server className="w-4 h-4" />
              <span>Our Story</span>
            </div>

            <h1 className="text-4xl text-white font-bold mb-6">
              Powering Gaming Communities{" "}
              <span className="bg-clip-text text-transparent bg-red-500">
                Since 2025
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              From a small team of passionate gamers to a global hosting
              provider, our journey has been driven by one goal: making premium
              game hosting accessible to everyone.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-900/30"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Sections */}
      <div className="container max-w-screen-xl mx-auto px-4 py-16">
        {/* Origins */}
        <div className="max-w-screen-xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-6">
            <Server className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Our Origins</h2>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Founded by a group of competitive gamers who were frustrated with
            the lack of reliable hosting options, we started as a small hosting
            service for our local gaming community. What began in a single data
            center has grown into a global network serving thousands of
            communities worldwide.
          </p>
          <p className="text-gray-400 text-lg">
            Our founding team's experience as players and server administrators
            helped shape our approach to hosting - focusing on performance,
            reliability, and user-friendly management tools that we wished we
            had when we started.
          </p>
        </div>

        {/* Growth and Community */}
        <div className="max-w-screen-xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">
              Growing With Our Community
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            As our reputation for reliable hosting and exceptional support grew,
            so did our community. We've had the privilege of hosting everything
            from small friend groups to major gaming communities and esports
            tournaments. Each customer has helped shape our services through
            their feedback and unique needs.
          </p>
          <p className="text-gray-400 text-lg">
            We've maintained our community-first approach even as we've
            expanded. Our support team consists of experienced gamers who
            understand your needs, and we regularly engage with our community to
            guide our development roadmap.
          </p>
        </div>

        {/* Future */}
        <div className="max-w-screen-xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">
              Looking to the Future
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-6">
            Today, we're at the forefront of game server hosting technology,
            continuously investing in cutting-edge infrastructure and developing
            new features to enhance your hosting experience. We're expanding our
            global network while maintaining the personal touch that made us
            successful.
          </p>
          <p className="text-gray-400 text-lg">
            Our commitment to the gaming community remains unchanged. Whether
            you're hosting your first server or managing a large gaming network,
            we're here to provide the infrastructure, tools, and support you
            need to succeed.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center pb-16">
          <a
            href="https://discord.gg/WfDE4vEaQS"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors duration-300 mb-8"
          >
            Join Our Journey
            <Server className="w-5 h-5" />
          </a>
          <p className="text-gray-500 text-sm">
            Want to learn more?{" "}
            <a
              href="https://discord.gg/WfDE4vEaQS"
              className="text-red-500 hover:text-red-400 transition-colors duration-300"
            >
              Get in touch with our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
