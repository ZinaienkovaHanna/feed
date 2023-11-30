import getRecipes from '../services/recipesAPI.js';
import createRecipeCard from './recipeCard.js';

const recipeContainer = document.querySelector('#recipe-cards');

async function renderRecipeCards() {
    const recipes = await getRecipes();
    recipeContainer.innerHTML = '';

    recipes.forEach((recipe) => {
        const card = createRecipeCard(recipe);
        recipeContainer.appendChild(card);
    });
}

renderRecipeCards();
