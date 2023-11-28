// scripts/recipeCards.js

import getRecipe from '../services/theMealDB.js';

function createRecipeCards(recipe) {
    const card = document.createElement('article');
    card.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = recipe.strMealThumb;
    image.alt = recipe.strMeal;

    card.appendChild(image);
    return card;
}

async function renderRecipeCards() {
    const data = await getRecipe();
    const recipes = data.meals;

    const recipeContainer = document.querySelector('.recipe-cards-container');

    recipeContainer.innerHTML = '';

    recipes.forEach((recipe) => {
        const card = createRecipeCards(recipe);
        recipeContainer.appendChild(card);
    });
}

export default renderRecipeCards;

// async function renderRecipeCards() {
//     const data = await getRecipe();
//     const recipes = data.meals;
//     const recipeContainer = document.querySelector('.recipe-cards-container');

//     recipeContainer.innerHTML = '';

//     recipes.forEach((recipe) => {
//         recipeContainer.innerHTML += `
//         <article class="recipe-card">
//             <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
//         </article>
//         `;
//     });
// }

// export default renderRecipeCards;
