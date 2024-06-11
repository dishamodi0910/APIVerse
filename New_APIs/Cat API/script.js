document.getElementById('fetchCat').addEventListener('click', fetchCatImage);

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': 'live_ce4pjoxHExOT6cXQMjajh6ILE7xlDZIc1BsaIAY1Gu01tYArMy64ngRdq2Eu0fAe'
        }
    })
    .then(response => response.json())
    .then(data => {
        const catImageContainer = document.getElementById('catImageContainer');
        catImageContainer.innerHTML = `<img src="${data[0].url}" alt="Random Cat Image">`;
    })
    .catch(error => console.error('Error fetching cat image:', error));
}
