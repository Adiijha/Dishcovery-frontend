import axios from 'axios';

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
const baseUrl = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query: string) => {
  try {
    const response = await axios.get(`${baseUrl}/complexSearch`, {
      params: {
        query,
        number: 12,
        apiKey,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipeDetails = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}/information`, {
      params: { apiKey },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
};
