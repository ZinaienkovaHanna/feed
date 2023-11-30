const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

async function getRecipes() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);

        const recipes = data.meals.map(
            ({
                strMealThumb: image,
                strMeal: name,
                strInstructions: instructions,
            }) => ({
                image,
                name,
                instructions,
            })
        );

        return recipes;
    } catch (error) {
        console.error(`Download error: ${error.message}`);
        return null;
    }
}

export default getRecipes;
