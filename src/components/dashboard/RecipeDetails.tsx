import { useParams } from 'react-router-dom';
import recipeImage from '../../assets/pasta.jpg'; // Replace with dynamic images

const RecipeDetails = () => {
  const { id } = useParams();

  // Dummy recipe data
  const recipe = {
    id,
    title: `Recipe ${id}`,
    description: 'A delicious dish with a rich blend of flavors and easy-to-follow instructions.',
    ingredients: ['2 cups of flour', '1 tsp salt', '1 cup water', 'Fresh herbs', 'Spices'],
    instructions: [
      'Mix flour, salt, and water to form a dough.',
      'Let the dough rest for 30 minutes.',
      'Roll out the dough and cook as desired.',
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 to-orange-800 text-white font-[Poppins] p-4 py-12 md:p-12">
      <div className="max-w-5xl mx-auto bg-orange-100 text-orange-900 rounded-lg shadow-lg overflow-hidden">
        
        {/* Recipe Image */}
        <img src={recipeImage} alt="Recipe" className="w-full h-44 md:h-80 object-cover" />

        {/* Recipe Content */}
        <div className="p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">{recipe.title}</h1>
          <p className="text-md md:text-lg mb-8 text-center">{recipe.description}</p>

          {/* Ingredients Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="text-md mb-8 list-disc list-inside md:text-lg">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          {/* Instructions Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="text-md list-decimal list-inside md:text-lg space-y-3">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
