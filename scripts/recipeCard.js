import { createRecipeModal, openModal } from './recipeModal.js';
import createElementImg from './createElementImg.js';

function createRecipeCard(recipe) {
    const { image, name } = recipe;

    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const img = createElementImg(image, name);
    card.appendChild(img);

    card.addEventListener('click', () => {
        createRecipeModal(recipe);
        openModal();
    });

    return card;
}

export default createRecipeCard;
