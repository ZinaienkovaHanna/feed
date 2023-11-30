import getRecipes from '../services/recipesAPI.js';
import createRecipeCard from './recipeCard.js';
import clearElementInnerHTML from './clearElementInnerHTML.js';

const recipeContainer = document.querySelector('#recipe_cards');

async function renderRecipeCards() {
    const recipes = await getRecipes();

    clearElementInnerHTML(recipeContainer);

    const cards = recipes.map((recipe) => createRecipeCard(recipe));
    recipeContainer.append(...cards);
}

renderRecipeCards();
