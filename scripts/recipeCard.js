import { createRecipeModal, openModal } from './recipeModal.js';

function createRecipeCard(recipe) {
    const { image, name } = recipe;

    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    card.appendChild(img);

    card.addEventListener('click', () => {
        createRecipeModal(recipe);
        openModal();
    });

    return card;
}

export default createRecipeCard;
