document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    }
});
