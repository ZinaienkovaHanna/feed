import createElementImg from './createElementImg.js';
import clearElementInnerHTML from './clearElementInnerHTML.js';

const modal = document.querySelector('#recipe_modal');

function createRecipeModal(recipe) {
    const { image, name, instructions } = recipe;

    clearElementInnerHTML(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content');

    const img = createElementImg(image, name, 'modal_content_img');

    const closeBtn = document.createElement('div');
    closeBtn.id = 'close_modal_btn';
    closeBtn.classList.add('close');
    closeBtn.textContent = '✖';
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.classList.add('modal_content_header');

    const p = document.createElement('p');
    p.textContent = instructions;
    h2.classList.add('modal_content_text');

    modalContent.appendChild(img);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(h2);
    modalContent.appendChild(p);
    modal.appendChild(modalContent);
}

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    clearElementInnerHTML(modal);
    modal.style.display = 'none';
}

function createAndOpenRecipeModal(recipe) {
    createRecipeModal(recipe);
    openModal();
}

export default createAndOpenRecipeModal;
