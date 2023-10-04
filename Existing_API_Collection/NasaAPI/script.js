const apodImage = document.getElementById('apodImage');
const apodTitle = document.getElementById('apodTitle');
const apodExplanation = document.getElementById('apodExplanation');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImageIndex = 0;
let apodData = [];
const imageCache = {}; // Cache for storing fetched images

async function fetchAPODImages() {
    const apiKey = 'RXWnNfeza1LHyxDhuLjbPUDCCbt14gFJIPKUnWx8';
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`);
    const data = await response.json();
    apodData = data;
    displayImage(currentImageIndex);
}

function displayImage(index) {
    const currentImage = apodData[index];
    apodTitle.textContent = currentImage.title;
    apodExplanation.textContent = currentImage.explanation;

    if (imageCache[currentImage.url]) {
        // Serve image from cache if available
        apodImage.src = imageCache[currentImage.url];
    } else {
        // Fetch and cache the image if it's not in the cache
        const image = new Image();
        image.src = currentImage.url;
        image.onload = () => {
            apodImage.src = currentImage.url;
            imageCache[currentImage.url] = currentImage.url; // Store image in cache
        };
    }
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        displayImage(currentImageIndex);
    }
}

function showNextImage() {
    if (currentImageIndex < apodData.length - 1) {
        currentImageIndex++;
        displayImage(currentImageIndex);
    }
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);

// Initialize the slideshow by preloading images
fetchAPODImages();
