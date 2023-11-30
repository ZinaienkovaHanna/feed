const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

async function getRecipes() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const recipes = data.meals.map(
            ({
                strMealThumb: image,
                strMeal: name,
                strInstructions: instructions,
                strArea: country,
            }) => ({
                image,
                name,
                instructions,
                country,
            })
        );

        return recipes;
    } catch (error) {
        console.error(`Download error: ${error.message}`);
        return null;
    }
}

export default getRecipes;
