import createElementImg from './createElementImg.js';
import createAndOpenRecipeModal from './recipeModal.js';

function createRecipeCard(recipe) {
    const { image, name } = recipe;

    const card = document.createElement('div');
    card.classList.add('recipe_card');

    const img = createElementImg(image, name, 'recipe_card_img');
    card.appendChild(img);

    card.addEventListener('click', () => {
        createAndOpenRecipeModal(recipe);
    });

    return card;
}

export default createRecipeCard;
