import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks';
import pizza from  '../../assets/pizza.jpg';
import indian from  '../../assets/indian.jpg';
import pasta from  '../../assets/pasta.jpg';
import dessert from  '../../assets/dessert.jpg';

const Hero = () => {
  return (
    <>
    <section className="relative min-h-screen flex py-10 pt-20 items-center font-[Poppins] justify-center bg-gradient-to-b from-orange-900 to-orange-800 text-white px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">Find Recipes, Inspire Your Cooking</h1>
          <p className="text-lg text-orange-200">Discover mouthwatering recipes from around the world and make every meal special with Dishcovery.</p>
          <Link to="/recipes">
          <button className="bg-orange-500 hover:bg-orange-400 px-6 py-3 cursor-pointer text-lg font-semibold rounded-full flex items-center mx-auto md:mx-0">
            <PlayCircle className="w-5 h-5 mr-2" />
            Explore Recipes
          </button>
          </Link>
        </div>

        {/* Image Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-2 md:gap-4">
          {[pasta, indian, pizza, dessert].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Dish ${idx + 1}`}
              className="w-88 h-40 md:w-96 md:h-48 rounded-xl shadow-md hover:scale-105 transition object-cover"
            />
          ))}
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-500 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-500 opacity-20 rounded-full blur-2xl"></div>
    </section>
    <HowItWorks/>
    </>
  );
};

export default Hero;
