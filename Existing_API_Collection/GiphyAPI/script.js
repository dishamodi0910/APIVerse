const apiKey = 'Ls5S6Pix3itW3ha6XFFmsksFS5k7SZZl'; 
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const gifContainer = document.getElementById('gif-container');

searchButton.addEventListener('click', searchGIFs);

function searchGIFs() {
    const searchTerm = searchInput.value;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;

    //make api request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            gifContainer.innerHTML = ''; // Clear previous GIFs
            data.data.forEach(gif => {
                const gifElement = document.createElement('div');
                gifElement.className = 'gif-item';
                gifElement.innerHTML = `
                    <img class="gif-image" src="${gif.images.fixed_height.url}" alt="${gif.title}">
                    <a class="download-button" href="${gif.images.original.url}" download="${gif.title}.gif">Download</a>
                `;
                gifContainer.appendChild(gifElement);
            });
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
        });
}
