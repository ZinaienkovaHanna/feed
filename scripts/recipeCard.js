import { createRecipeModal, openModal } from './recipeModal.js';

function createRecipeCard(recipe) {
    const { strMealThumb, strMeal } = recipe;

    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = strMealThumb;
    image.alt = strMeal;
    card.appendChild(image);

    card.addEventListener('click', () => {
        createRecipeModal(recipe);
        openModal();
    });

    return card;
}

export default createRecipeCard;
