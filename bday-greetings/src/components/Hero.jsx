import React from "react";
import { Sparkles } from "lucide-react";

const Hero = ({ currentPage }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 px-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Happy Birthday!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          {currentPage === "greetings" && "A Collection of Love & Wishes"}
          {currentPage === "cards" && "Special Messages From Your Loved Ones"}
          {currentPage === "memories" && "Our Beautiful Journey Together"}
        </p>
        <p className="text-gray-400 text-lg">
          {currentPage === "greetings" && "From everyone who adores you"}
          {currentPage === "cards" &&
            "Open each card to read heartfelt messages"}
          {currentPage === "memories" && "Every moment with you is a treasure"}
        </p>
      </div>
    </div>
  );
};

export default Hero;
