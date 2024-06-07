// Your JavaScript code
document.getElementById('getNews').addEventListener('click', function() {
    const apiKey = '3887ca8399f947b4844a2c81ea570e40'; // Replace with your NewsAPI key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const newsResult = document.getElementById('newsResult');
            newsResult.innerHTML = data.articles.map(article => `
                <div class="news-item">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching the news:', error);
        });
});