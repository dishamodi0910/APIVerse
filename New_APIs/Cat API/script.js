document.getElementById('fetchCat').addEventListener('click', fetchCatImage);

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImageContainer = document.getElementById('catImageContainer');
            catImageContainer.innerHTML = `<img src="${data[0].url}" alt="Random Cat Image">`;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}
