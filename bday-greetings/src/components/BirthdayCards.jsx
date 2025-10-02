import React, { useState } from "react";
import { Mail, X, Heart } from "lucide-react";

const BirthdayCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const openCard = (card) => {
    setSelectedCard(card);
    setTimeout(() => setIsCardOpen(true), 100);
  };

  const closeCard = () => {
    setIsCardOpen(false);
    setTimeout(() => setSelectedCard(null), 300);
  }

  const virtualCards = [
    {
      id: 1,
      from: "Your Bubba",
      title: "A Special Message Just For You",
      type: "letter",
      content: `Happy happy birthday loveyyyyy! Sana magustuhan mo yung flowers or if di mo man makita now, may flowers ka hehehe lam mo na saan makukuha ah as of now di pa open sila so later hihi I LOVE YOUUUUU SO MUCHHHH!!`,
      coverColor: "from-pink-100 to-orange-100",
      envelope: "bg-gray-400",
    },
    {
      id: 2,
      from: "Emma - Anti-Keira",
      title: "Galit na galit kay keira",
      type: "letter",
      content: `happiest birthday, naya!! u're one of the most creative people that i know, i really admire you for that. continue doing what u love & thank u for making me realize a lot of things. love u, girlyy!!! enjoy ur day 💘`,
      coverColor: "from-pink-100 to-purple-100",
      envelope: "bg-pink-200",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Mail className="w-10 h-10 mx-auto mb-4 text-gray-700" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Virtual Birthday Cards
        </h2>
        <p className="text-gray-600">
          Special messages from those who love you most
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {virtualCards.map((card) => (
          <div
            key={card.id}
            onClick={() => openCard(card)}
            className="cursor-pointer group perspective"
          >
            <div className="relative transform transition-all duration-300 hover:scale-105">
              <div
                className={`${card.envelope} rounded-lg shadow-lg p-6 h-48 flex flex-col items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <Mail className="w-12 h-12 text-gray-700 mb-3 transform group-hover:scale-110 transition-transform" />
                <p className="font-bold text-gray-800 text-center mb-1">
                  {card.from}
                </p>
                <p className="text-xs text-gray-600 text-center px-2">
                  {card.title}
                </p>

                <div className="mt-4 text-sm text-gray-700 font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                  Click to open →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={closeCard}
        >
          <div
            className={`relative max-w-4xl w-full transition-all duration-500 transform ${
              isCardOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Opened Card */}
              <div
                className={`bg-gradient-to-br ${selectedCard.coverColor} rounded-2xl shadow-2xl overflow-hidden`}
              >
                <div className="bg-white m-4 rounded-xl p-8 md:p-12 relative min-h-[500px]">
                  <button
                    onClick={closeCard}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                    <div className="flex justify-center mb-4">
                      <Heart className="w-10 h-10 text-red-500 animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedCard.title}
                    </h3>
                    <p className="text-gray-600 italic">
                      From: {selectedCard.from}
                    </p>
                  </div>

                  {selectedCard.type === "letter" && (
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                        {selectedCard.content}
                      </p>
                    </div>
                  )}

                  {selectedCard.type === "video" && (
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
                        <Play className="w-16 h-16 text-gray-400 mb-4" />
                        <p className="text-gray-600 text-center">
                          Video message placeholder
                          <br />
                          <span className="text-sm">
                            Add your video URL in the code
                          </span>
                        </p>
                      </div>
                      {selectedCard.content && (
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedCard.content}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-gray-200 rounded-tl-lg opacity-30"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-gray-200 rounded-br-lg opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3 className='text-xl text-center my-3 py-4'>And more birthday cards to come...</h3>
    </div>
  );
};

export default BirthdayCards;
