const modal = document.querySelector('#recipe-modal');

function createRecipeModal(recipe) {
    const { image, name, instructions } = recipe;
    modal.innerHTML = '';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const img = document.createElement('img');
    img.src = image;
    img.alt = name;

    const closeBtn = document.createElement('span');
    closeBtn.id = 'close-modal-btn';
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    const h2 = document.createElement('h2');
    h2.innerHTML = name;

    const p = document.createElement('p');
    p.innerHTML = instructions;

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
    modal.innerHTML = '';
    modal.style.display = 'none';
}

export { createRecipeModal, openModal };
