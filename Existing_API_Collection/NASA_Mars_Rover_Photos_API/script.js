const API_KEY = 'DEMO_KEY'; // Replace with your NASA API key

async function fetchPhotos() {
  const rover = document.getElementById('rover').value;
  const date = document.getElementById('date').value;

  const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${API_KEY}`);
  const data = await response.json();

  displayPhotos(data.photos);
}

function displayPhotos(photos) {
  const photosContainer = document.getElementById('photos');
  photosContainer.innerHTML = '';

  if (photos.length === 0) {
    photosContainer.innerHTML = '<p>No photos found for this date.</p>';
    return;
  }

  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.img_src;
    img.alt = `Photo by ${photo.rover.name} on ${photo.earth_date}`;
    photosContainer.appendChild(img);
  });
}
