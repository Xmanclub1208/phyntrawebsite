import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame } from "lucide-react";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Helmet>
        <title>Oh No! | Phyntra Hosting</title>
      </Helmet>
      <div className="text-center max-w-lg">
        {/* Logo Container */}
        <div className="inline-flex flex-col items-center gap-3 mb-12">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-lg bg-red-500/50 blur-md opacity-0 
                group-hover:opacity-100 duration-300"
            />
            <div
              className="relative flex items-center justify-center w-16 h-16 rounded-lg 
                bg-black/20 border border-red-500/20 group-hover:border-red-500/40 duration-300"
            >
              <Flame className="w-10 h-10 text-red-500 group-hover:scale-110 duration-300" />
            </div>
          </div>
          <span
            className="font-bold text-2xl bg-clip-text text-transparent 
              bg-gradient-to-r from-red-500 to-red-600"
          >
            PHYNTRA HOSTING
          </span>
        </div>
        <h1
          className="text-4xl font-bold mb-6 bg-clip-text text-transparent
            bg-gradient-to-r from-red-500 to-red-600"
        >
          Page Not Found
        </h1>
        <p
          className="text-gray-400 mb-12 leading-relaxed mx-auto max-w-md
            text-lg opacity-90"
        >
          The page you're looking for doesn't exist, has been moved, or is still in the works. Please
          check the URL or return to the homepage.
        </p>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate("/")}
          className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-lg
            font-medium overflow-hidden transition-all duration-300
            hover:scale-105"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700
              transition-transform duration-500 ease-out group-hover:translate-x-[-8px]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600
              transition-transform duration-500 ease-out translate-x-[-100%] 
              group-hover:translate-x-0"
          />
          <div
            className="absolute inset-0 rounded-lg border border-red-500/30
              group-hover:border-red-500/50 transition-colors duration-300"
          />
          <ArrowLeft
            className={`relative w-5 h-5 transition-transform duration-300
              ${isHovered ? "-translate-x-1" : ""} text-white`}
          />
          <span className="relative text-white">Return Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
