import getRecipe from '../services/theMealDB.js';
import createRecipeCard from './recipeCard.js';

const recipeContainer = document.querySelector('.recipe-cards');

async function renderRecipeCards() {
    const data = await getRecipe();
    const recipes = data.meals;

    recipeContainer.innerHTML = '';

    recipes.forEach((recipe) => {
        const card = createRecipeCard(recipe);
        recipeContainer.appendChild(card);
    });
}

renderRecipeCards();
