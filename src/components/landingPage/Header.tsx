import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 font-[Poppins] bg-orange-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ChefHat className="w-6 h-6 text-orange-300" />
          <Link to="/">
          <span className="text-xl md:text-2xl font-bold">Dishcovery</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-md">
          <a href="#" className="hover:text-orange-300">Home</a>
          <a href="#how-it-works" className="hover:text-orange-300">How It Works</a>
          <a href="#recipes" className="hover:text-orange-300">Recipes</a>
        </nav>

        {/* CTA Button */}
        <Link to="/recipes">
        <button className="bg-orange-600 hover:bg-orange-500 cursor-pointer px-4 py-2 text-md font-semibold rounded-md">Get Started</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
