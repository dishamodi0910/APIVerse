document.getElementById('getJoke').addEventListener('click', function() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const jokeElement = document.getElementById('joke');
            if (data.type === 'single') {
                jokeElement.textContent = data.joke;
            } else {
                jokeElement.textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
        });
});
