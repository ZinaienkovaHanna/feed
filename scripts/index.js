import getRecipe from '../services/theMealDB.js';
import createRecipeCards from './recipeCards.js';

const recipeContainer = document.querySelector('.recipe-cards');

async function renderRecipeCards() {
    const data = await getRecipe();
    const recipes = data.meals;

    recipeContainer.innerHTML = '';

    recipes.forEach((recipe) => {
        const card = createRecipeCards(recipe);
        recipeContainer.appendChild(card);
    });
}

renderRecipeCards();
