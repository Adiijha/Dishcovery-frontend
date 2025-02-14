import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRecipeClick = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-orange-900 to-orange-800 text-white font-[Poppins]">

      {/* Main Content */}
      <main className="flex-1 p-16 px-4 md:px-24">
        {/* Search Bar */}
        <div className="flex items-center bg-orange-700 rounded-md mb-6 px-4 py-3">
          <Search className="w-5 h-5 mr-2 text-orange-200" />
          <input
            type="text"
            placeholder="Search for a recipe..."
            className="w-full bg-transparent placeholder-orange-200 text-white outline-none"
          />
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleRecipeClick(i + 1)}
              className="bg-orange-100 text-orange-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <div className="h-40 bg-orange-400"></div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Recipe {i + 1}</h3>
                <p className="text-sm text-gray-700">A delicious dish to explore.</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
