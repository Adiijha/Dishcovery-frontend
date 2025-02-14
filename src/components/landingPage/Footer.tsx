import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-400" />
          Made with love by Dishcovery
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Instagram className="w-5 h-5 hover:text-orange-300 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:text-orange-300 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-orange-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
