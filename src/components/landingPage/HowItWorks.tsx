import { Utensils, ChefHat, Soup, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    { icon: <Utensils className="w-10 h-10 text-orange-500" />, title: 'Explore Recipes', desc: 'Browse through thousands of delicious recipes from around the world.' },
    { icon: <ChefHat className="w-10 h-10 text-orange-500" />, title: 'Follow Easy Steps', desc: 'Get simple, step-by-step instructions for perfect results every time.' },
    { icon: <Soup className="w-10 h-10 text-orange-500" />, title: 'Enjoy & Share', desc: 'Savor your dish and share your delicious experience with others.' },
    { icon: <BookOpen className="w-10 h-10 text-orange-500" />, title: 'Learn New Skills', desc: 'Discover cooking tips and techniques to become a pro.' },
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-gradient-to-b from-orange-100 to-orange-200 font-[Poppins] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-orange-900">How Dishcovery Works</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center transform hover:-translate-y-2 transition">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-lg md:text-xl text-orange-900 mb-4">Ready to Discover Your Next Favorite Recipe?</h3>
          <Link to="/recipes">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 cursor-pointer text-white font-semibold rounded-full shadow-lg">
            Get Started Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
