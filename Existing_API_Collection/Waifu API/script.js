document.addEventListener('DOMContentLoaded', () => {
    fetch('https://waifu.it/api/v4/quote', {
        headers: {
            'Authorization': 'YOUR-API-KEY' // Get API key from https://waifu.it/
        }
    })
    .then(response => response.json())
    .then(AnimeData => {
        const quote = AnimeData.quote;
        const anime = AnimeData.anime;
        const author = AnimeData.author;

        const quoteElement = document.getElementById('quote');
        const animeElement = document.getElementById('anime');
        const authorElement = document.getElementById('author');

        quoteElement.innerHTML = `"${quote}"`;
        animeElement.innerHTML = `Anime: ${anime}`;
        authorElement.innerHTML = `Author: ${author}`;
    })
    .catch(error => console.error('Error fetching the Anime:', error));
});
