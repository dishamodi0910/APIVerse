document.getElementById('quoteButton').addEventListener('click', fetchQuote);

async function fetchQuote() {
    const quoteBox = document.getElementById('quote');
    quoteBox.textContent = 'Fetching quote...';
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteBox.textContent = `"${data.content}" — ${data.author}`;
        animateQuoteBox();
    } catch (error) {
        quoteBox.textContent = 'An error occurred. Please try again.';
        console.error('Error fetching quote:', error);
    }
}

function animateQuoteBox() {
    const quoteBox = document.getElementById('quote');
    quoteBox.style.backgroundColor = '#ff7e5f';
    quoteBox.style.color = '#fff';
    setTimeout(() => {
        quoteBox.style.backgroundColor = '#fff';
        quoteBox.style.color = '#555';
    }, 500);
}

