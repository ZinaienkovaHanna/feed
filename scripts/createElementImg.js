function createElementImg(image, name) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = name;

    return img;
}

export default createElementImg;
