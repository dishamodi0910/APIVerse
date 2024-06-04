document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quote");
    const getQuoteBtn = document.getElementById("getQuoteBtn");

    getQuoteBtn.addEventListener("click", function() {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => {
                quoteElement.textContent = '"' + data.sentence + '"';
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
            });
    });
});
