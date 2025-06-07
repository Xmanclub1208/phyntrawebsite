import React, { memo } from "react";
import { motion } from "framer-motion";
import { Quote, Users, Trophy, Gamepad } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Minecraft Server Owner",
    avatar: "https://placehold.co/75",
    content:
      "Switching to Inferno Host was the best decision. Our server performance improved dramatically and the support team is incredible.",
    rating: 5,
    game: "Minecraft",
    stats: {
      players: "500+",
      since: "6 months",
    },
  },
  {
    name: "Sarah Chen",
    role: "Community Manager",
    avatar: "https://placehold.co/75",
    content:
      "The control panel makes server management a breeze. We can focus on our community instead of technical issues.",
    rating: 5,
    game: "CS:GO",
    stats: {
      players: "1000+",
      since: "1 year",
    },
  },
  {
    name: "Sarah Chen",
    role: "Gaming Community Leader",
    avatar: "https://placehold.co/75",
    content:
      "Unmatched performance and reliability. Our players noticed the difference immediately after switching.",
    rating: 5,
    game: "ARK",
    stats: {
      players: "300+",
      since: "3 months",
    },
  },
];

const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

const StatBox = memo(({ Icon, value, label }) => (
  <div className="flex flex-col items-center p-2 bg-black/20 rounded-lg">
    <Icon className="w-4 h-4 text-red-500 mb-1" />
    <span className="text-sm font-medium text-white">{value}</span>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
));

const GameBadge = memo(({ game }) => (
  <div className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white border border-red-500/30">
    <Gamepad className="w-3 h-3" />
    <span>{game}</span>
  </div>
));

const TestimonialCard = memo(({ testimonial }) => (
  <div className="flex-shrink-0 w-[400px]">
    <div className="h-full p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-red-900/30">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border border-red-900/30"
          loading="lazy"
        />
        <div>
          <h3 className="font-bold text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
        <div className="ml-auto">
          <GameBadge game={testimonial.game} />
        </div>
      </div>

      <div className="relative mb-6">
        <Quote className="absolute -left-1 -top-1 w-6 h-6 text-red-500/20 -scale-x-100" />
        <p className="pl-6 text-sm text-gray-300 leading-relaxed">
          {testimonial.content}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <StatBox
          Icon={Users}
          value={testimonial.stats.players}
          label="Players"
        />
        <StatBox
          Icon={Trophy}
          value={testimonial.stats.since}
          label="Customer"
        />
      </div>
    </div>
  </div>
));

const ScrollingRow = memo(({ testimonials, direction = "left" }) => (
  <motion.div
    className="flex gap-6"
    animate={{
      x:
        direction === "left"
          ? [0, -100 * testimonials.length]
          : [-100 * testimonials.length, 0],
    }}
    transition={{
      duration: 50,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {testimonials.map((testimonial, index) => (
      <TestimonialCard
        key={`${direction}-${index}`}
        testimonial={testimonial}
      />
    ))}
  </motion.div>
));

const SectionHeader = memo(() => (
  <div className="container max-w-screen-xl mx-auto px-4 mb-16 text-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-6">
      <Users className="w-4 h-4" />
      <span>Customer Stories</span>
    </div>
    <h2 className="text-4xl text-white font-bold mb-4">
      Trusted by{" "}
      <span className="bg-clip-text text-transparent bg-red-500">
        Gaming Communities
      </span>
    </h2>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
      Join thousands of satisfied customers who have chosen us for their game
      hosting needs. Here's what they have to say about their experience.
    </p>
  </div>
));

const TestimonialBanner = () => {
  return (
    <section className="py-24 bg-black">
      <SectionHeader />

      <div className="relative max-w-screen-xl mx-auto overflow-hidden">
        <div className="mb-6">
          <ScrollingRow testimonials={EXTENDED_TESTIMONIALS} direction="left" />
        </div>
        <div>
          <ScrollingRow
            testimonials={EXTENDED_TESTIMONIALS}
            direction="right"
          />
        </div>

        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default memo(TestimonialBanner);
