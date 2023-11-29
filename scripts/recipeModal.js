const modal = document.querySelector('#recipe-modal');

function createRecipeModal(recipe) {
    const { strMealThumb, strMeal, strInstructions } = recipe;

    const modalContent = `
        <div class="modal-content">
            <img src="${strMealThumb}" alt="${strMeal}">
            <span id="close-modal-btn" class="close">&times;</span>
            <h2>${strMeal}</h2>
            <p>${strInstructions}</p>
        </div>
    `;

    modal.innerHTML = modalContent;

    const closeBtn = modal.querySelector('#close-modal-btn');
    closeBtn.addEventListener('click', closeModal);
}

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.innerHTML = '';
    modal.style.display = 'none';
}

export { createRecipeModal, openModal };

// function createRecipeModal(recipe) {
//     const { strMealThumb, strMeal, strInstructions } = recipe;
//     modal.innerHTML = '';

//     const modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');

//     const image = document.createElement('img');
//     image.src = strMealThumb;
//     image.alt = strMeal;
//     modalContent.appendChild(image);

//     const closeBtn = document.createElement('span');
//     closeBtn.id = 'close-modal-btn';
//     closeBtn.classList.add('close');
//     closeBtn.innerHTML = '&times;';
//     closeBtn.addEventListener('click', () => {
//         closeModal();
//     });
//     modalContent.appendChild(closeBtn);

//     const h2 = document.createElement('h2');
//     h2.innerHTML = strMeal;
//     modalContent.appendChild(h2);

//     const p = document.createElement('p');
//     p.innerHTML = strInstructions;
//     modalContent.appendChild(p);

//     modal.appendChild(modalContent);
// }
