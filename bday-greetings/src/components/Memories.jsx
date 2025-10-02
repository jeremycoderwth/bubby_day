import React, { useState } from "react";
import { Heart, Calendar, Camera, X } from 'lucide-react';
import PictureOne from '/august-pic-1.jpg?url';
import PictureTwo from '/august-pic-2.jpg?url';
import PictureThree from '/august-pic-3.jpg?url';

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const memories = [
    {
      id: 1,
      date: "August 2025",
      title: "Anniversary of Us",
      description:
        "Our most memorable celebration lalo na its our 1st anniversary, i still get the fever and andon pa rin yung vibe and namimiss ko na magsm-north w you huhu pero sana soon makapunta uli tayo there for more fun and adventure hehe",
      image: PictureOne,
      color: "from-rose-400 to-pink-500",
    },
    {
      id: 2,
      date: "August 2025",
      title: "Photobooth",
      description:
        "Mag-photobooth din tayo this month bebe, feeling ko nga ilang photobooth gusto ko AHAHAHAHAH pero i just love it and syempre core memories for me and sana more photobooth pa & kahit saan basta ikaw kasama then sakto marami tayong new poses",
      image: PictureTwo,
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 3,
      date: "August 2025",
      title: "Coffee Adventure",
      description:
        "My first treat sa'yo ng coffee and potcor, worth it naman ang napili mo na coffee shop and sobrang saya jusko kahit inuubo pa ako non pero sige ang tawa and kwentuhan. More coffee hoping pa in the future lalo na this month hehe",
      image: PictureThree,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 4,
      date: "October 2025",
      title: "New Episode...Coming Soon",
      description:
        "Blank talaga siya no kasi soon, photobooth picture natin dyan or basta picture natin once makapagdate na tayo huhu at miss ko na ikaw bubby. Enjor your very special day and sana magustuhan mo po lahat ng suprise ko hihi",
      image: "https://placehold.co/600x400?text=Coming+Soon",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Camera className="w-10 h-10 mx-auto mb-4 text-gray-700" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Memory Timeline
        </h2>
        <p className="text-gray-600">
          Every moment with you is a treasure worth remembering
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

        <div className="space-y-12">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rounded-full border-4 border-gray-100 z-10"></div>

              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  onClick={() => setSelectedMemory(memory)}
                  className="cursor-pointer group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${memory.color} opacity-40 group-hover:opacity-30 transition-opacity`}
                    ></div>

                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-700" />
                      <span className="text-sm font-semibold text-gray-800">
                        {memory.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {memory.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {memory.description}
                    </p>
                    <div className="mt-4 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                      Click to see more →
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden transform transition-all max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-96">
              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
                className="w-full h-full object-contain"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${selectedMemory.color} opacity-30`}
              ></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">
                    {selectedMemory.date}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-white">
                  {selectedMemory.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedMemory.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Memories;
