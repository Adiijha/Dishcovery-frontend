import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipeDetails } from '../../api/api'; // Adjust the path if needed
import recipeImage from '../../assets/pasta.jpg';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getRecipeDetails(Number(id));
      setRecipe(data);
    };
    fetchDetails();
  }, [id]);

  if (!recipe) return <div className="text-center text-white mt-10">Loading recipe details...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 to-orange-800 text-white font-[Poppins] p-4 py-12 md:p-12">
      <div className="max-w-5xl mx-auto bg-orange-100 text-orange-900 rounded-lg shadow-lg overflow-hidden">
        
        {/* Recipe Image */}
        <img src={recipe.image || recipeImage} alt={recipe.title} className="w-full h-44 md:h-80 object-cover" />

        {/* Recipe Content */}
        <div className="p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">{recipe.title}</h1>
          <p className="text-md md:text-lg mb-8 text-center">{recipe.summary?.replace(/<\/?[^>]+(>|$)/g, '')}</p>

          {/* Ingredients Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="text-md mb-8 list-disc list-inside md:text-lg">
            {recipe.extendedIngredients?.length ? (
              recipe.extendedIngredients.map((ing: any, index: number) => (
                <li key={index}>{`${ing.amount} ${ing.unit} ${ing.name}`}</li>
              ))
            ) : (
              <li>No ingredients available</li>
            )}
          </ul>

          {/* Instructions Section */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 md:text-lg">
            {recipe.analyzedInstructions?.[0]?.steps?.length ? (
              recipe.analyzedInstructions[0].steps.map((step: any, index: number) => (
                <li key={index}>{step.step}</li>
              ))
            ) : (
              <li>No instructions available</li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
