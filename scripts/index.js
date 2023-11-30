import getRecipes from '../services/recipesAPI.js';
import createRecipeCard from './recipeCard.js';
import clearElementInnerHTML from './clearElementInnerHTML.js';

const recipeContainer = document.querySelector('#recipe-cards');

async function renderRecipeCards() {
    const recipes = await getRecipes();

    clearElementInnerHTML(recipeContainer);

    recipes.forEach((recipe) => {
        const card = createRecipeCard(recipe);
        recipeContainer.appendChild(card);
    });
}

renderRecipeCards();
