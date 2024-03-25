const imageContainer = document.getElementById('image-container');

const images = [
    'audi1.jpg',
    'audi2.jpg',
    'audi3.jpg'
];

function loadImages() {
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/${image}`;
        imageContainer.appendChild(img);
    });
}

loadImages();
