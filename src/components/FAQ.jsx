import React, { memo, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Search,
  HelpCircle,
  MessageCircle,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  LifeBuoy,
} from "lucide-react";

const FAQ_CATEGORIES = Object.freeze([
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "technical", label: "Technical", icon: ShieldCheck },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "support", label: "Support", icon: LifeBuoy },
]);

const FAQ_ITEMS = [
  {
    question: "How quickly can I deploy a server?",
    answer:
      "Servers are deployed instantly after purchase. You'll receive login credentials within minutes of completing your order. Our automated provisioning system ensures your server is ready to use with all selected features and configurations.",
    category: "technical",
    relatedLinks: ["Discord Support"],
  },
  {
    question: "Do you offer DDoS protection?",
    answer:
      "Yes, all our servers include enterprise-grade DDoS protection at no additional cost. Our protection system can mitigate attacks up to 1Tbps with automatic detection and filtering. We utilize a multi-layered approach combining hardware and software solutions for comprehensive protection.",
    category: "technical",
    relatedLinks: ["Discord Support"],
  },
  {
    question: "Can I modify server settings and add mods?",
    answer:
      "Absolutely! You have full access to configure your server settings and install mods through our control panel. We support one-click plugin installations and custom configurations. Our system maintains automatic backups of your configurations for safety.",
    category: "technical",
    relatedLinks: ["Discord Support"],
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for maximum flexibility. All payments are processed securely through encrypted channels with 3D-secure verification where applicable.",
    category: "billing",
    relatedLinks: ["Discord Support"],
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 24-hour money-back guarantee if you're not satisfied with our service. No questions asked, simply contact our support team. If you cancel within the first 24 hours of your purchase, we'll process a full refund to your original payment method.",
    category: "billing",
    relatedLinks: ["Discord Support"],
  },
  {
    question: "How does the support system work?",
    answer:
      "24/7 support is available through our Billing Panel ticket system and Discord Support Server. Our support team is composed of experienced server administrators who can assist with technical issues, configurations, and general inquiries.",
    category: "support",
    relatedLinks: ["Discord Support"],
  },
];

const SearchInput = memo(({ value, onChange }) => (
  <div className="relative max-w-xl mx-auto">
    <input
      type="text"
      placeholder="Search questions..."
      value={value}
      onChange={onChange}
      className="w-full px-12 py-4 bg-black/40 rounded-xl border border-red-900/30 focus:border-red-500/50 outline-none text-white placeholder-gray-500 transition-colors duration-150"
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
  </div>
));

const CategoryButton = memo(({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-150
      ${
        isActive
          ? "bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500/50"
          : "bg-black/40 text-gray-400 border-red-900/30 hover:text-red-500 hover:border-red-500/30"
      }
    `}
  >
    <category.icon className="w-4 h-4" />
    {category.label}
  </button>
));

const RelatedLinks = memo(({ links }) => (
  <div className="space-y-2">
    <div className="text-sm font-medium text-gray-500">Related Resources:</div>
    {links.map((link, i) => (
      <a
        key={i}
        href="https://discord.gg/WfDE4vEaQS"
        className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-colors duration-150"
      >
        <ChevronRight className="w-3 h-3" />
        <span>{link}</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    ))}
  </div>
));

const FAQItem = memo(({ item, isOpen, onToggle, index }) => {
  const [voted, setVoted] = useState(false);
  const [helpful, setHelpful] = useState(item.helpful);

  const handleVote = useCallback(() => {
    if (!voted) {
      setHelpful((prev) => prev + 1);
      setVoted(true);
    }
  }, [voted]);

  return (
    <div className="bg-black/40 rounded-xl border border-red-900/30 overflow-hidden">
      <button
        className="w-full px-8 py-6 flex items-center justify-between"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3 text-left">
          <span className="text-sm font-mono text-red-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-medium text-white">{item.question}</span>
        </div>
        <div
          className={`
          flex items-center justify-center w-8 h-8 rounded-lg border transition-colors duration-150
          ${
            isOpen
              ? "bg-red-500 border-red-400/50"
              : "bg-black/40 border-red-900/30"
          }
        `}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-red-500" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-8 pb-6">
              <p className="text-gray-400 leading-relaxed mb-6">
                {item.answer}
              </p>
              <RelatedLinks links={item.relatedLinks} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((e) => setSearchQuery(e.target.value), []);
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    setOpenIndex(0);
  }, []);

  const filteredItems = useMemo(
    () =>
      FAQ_ITEMS.filter(
        (item) =>
          (activeCategory === "all" || item.category === activeCategory) &&
          (item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    [activeCategory, searchQuery]
  );

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-red-500">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Find quick answers to common questions about our services.
          </p>

          <SearchInput value={searchQuery} onChange={handleSearch} />

          <div className="flex flex-wrap justify-center gap-4 my-12">
            {FAQ_CATEGORIES.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => handleCategoryChange(category.id)}
              />
            ))}
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto space-y-4">
          {filteredItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-red-500/50 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white">
                No results found
              </h3>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          )}
        </div>

        <div className="text-center mt-20">
          <HelpCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl text-white font-bold mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Our support team is here to help 24/7
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 
            rounded-lg text-white hover:from-red-500 hover:to-red-600 transition-colors duration-150"
          >
            <MessageCircle className="w-5 h-5" />
            <a href={"https://discord.gg/WfDE4vEaQS"}> Contact Support</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);
