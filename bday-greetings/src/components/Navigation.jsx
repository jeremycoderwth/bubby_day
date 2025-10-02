import React, {useState} from "react";
import { Menu, Mail, Camera, Heart, Gift } from "lucide-react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-400" />
            <span className="font-bold text-lg">Happy Birthday</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => navigateTo("greetings")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                currentPage === "greetings"
                  ? "bg-white bg-opacity-20 text-black"
                  : "text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Greetings</span>
            </button>
            <button
              onClick={() => navigateTo("cards")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                currentPage === "cards"
                  ? "bg-white bg-opacity-20 text-black"
                  : "text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Birthday Cards</span>
            </button>
            <button
              onClick={() => navigateTo("memories")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                currentPage === "memories"
                  ? "bg-white bg-opacity-20 text-black"
                  : "text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Our Memories</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <button
              onClick={() => navigateTo("greetings")}
              className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 mb-2 ${
                currentPage === "greetings"
                  ? "bg-white bg-opacity-20 text-black"
                  : "text-gray-300 hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Gift className="w-5 h-5" />
              <span>Birthday Greetings</span>
            </button>
            <button
              onClick={() => navigateTo("cards")}
              className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 mb-2 ${
                currentPage === "cards"
                  ? "bg-white bg-opacity-20 text-black"
                  : "text-gray-300 hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Virtual Birthday Cards</span>
            </button>
            <button
              onClick={() => navigateTo("memories")}
              className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                currentPage === "memories"
                  ? "bg-white bg-opacity-20 text-black"
                  : "text-gray-300 hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Camera className="w-5 h-5" />
              <span>Our Memory Timeline</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
