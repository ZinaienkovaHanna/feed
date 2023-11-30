function createElementImg(image, name, className) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    img.classList.add(className);

    return img;
}

export default createElementImg;
