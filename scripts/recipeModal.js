import createElementImg from './createElementImg.js';
import clearElementInnerHTML from './clearElementInnerHTML.js';

const modal = document.querySelector('#recipe_modal');

function createRecipeModal(recipe) {
    const { image, name, country, instructions } = recipe;

    clearElementInnerHTML(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content');

    const closeBtn = document.createElement('div');
    closeBtn.id = 'close_modal_btn';
    closeBtn.classList.add('close');
    closeBtn.textContent = '✖';
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.classList.add('modal_content_title');

    const h4 = document.createElement('h4');
    h4.textContent = country;
    h4.classList.add('modal_content_country_name');

    const imgAndText = document.createElement('div');
    imgAndText.classList.add('modal_content_flex');
    const img = createElementImg(image, name, 'modal_content_img');

    const p = document.createElement('p');
    p.textContent = instructions;
    p.classList.add('modal_content_text');

    imgAndText.appendChild(img);
    imgAndText.appendChild(p);
    modalContent.appendChild(h2);
    modalContent.appendChild(h4);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(imgAndText);
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
