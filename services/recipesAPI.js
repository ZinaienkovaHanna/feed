const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

async function getRecipes() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const recipes = data.meals.map((recipe) => {
            const { strMealThumb, strMeal, strInstructions } = recipe;
            return {
                name: strMeal,
                image: strMealThumb,
                instructions: strInstructions,
            };
        });

        return recipes;
    } catch (error) {
        console.error(`Download error: ${error.message}`);
        return null;
    }
}

export default getRecipes;
