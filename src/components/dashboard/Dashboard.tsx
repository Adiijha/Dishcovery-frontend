import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchRecipes } from '../../api/api';

type Recipe = {
  id: number;
  title: string;
  image: string;
};

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  // Fetch recipes on search
  const handleSearch = async () => {
    if (!query) return;
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 to-orange-800 text-white p-6">
      {/* Search Bar */}
      <div className="flex items-center bg-orange-700 rounded-md mb-6 px-4 py-3">
        <Search className="w-5 h-5 mr-2 text-orange-200" />
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="w-full bg-transparent placeholder-orange-200 text-white outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      {/* Recipe Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-orange-100 text-orange-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{recipe.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
