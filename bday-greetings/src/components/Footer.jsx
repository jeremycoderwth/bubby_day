import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 mt-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Heart className="w-10 h-10 mx-auto mb-4 text-red-400 animate-pulse" />
        <p className="text-xl mb-2">Made with endless love</p>
        <p className="text-gray-300">
          Wishing you the happiest birthday, my love and a month full of joy! Barang ka ate, barang ka 🪬🧿
        </p>
      </div>
    </div>
  );
};

export default Footer;
