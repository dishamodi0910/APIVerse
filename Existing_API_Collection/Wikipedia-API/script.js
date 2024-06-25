window.onload = () => {
    const resultsDiv = document.getElementById("results");
    const searchForm = document.getElementById("search-form");
    const personInput = document.getElementById("person-input");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        
        const searchTerm = personInput.value.trim();
        if (searchTerm === "") {
            resultsDiv.innerHTML = "<p>Please enter a valid name.</p>";
            return;
        }

        fetchData(searchTerm, (json) => {
            if (json.error) {
                resultsDiv.innerHTML = `<p>Error: ${json.error.info}</p>`;
            } else {
                resultsDiv.innerHTML = `
                    <h2>${json.title}</h2>
                    ${json.thumbnail ? `<img src="${json.thumbnail.source}" alt="Thumbnail">` : ''}
                    <p>${json.description}</p>
                    <p>${json.extract}</p>
                `;
            }
        });
    });

    function fetchData(term, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
        
        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                callback(data);
            } else {
                const errorData = { error: { info: `Request failed with status ${xhr.status}` } };
                callback(errorData);
            }
        };

        xhr.onerror = () => {
            const errorData = { error: { info: "Network error occurred." } };
            callback(errorData);
        };

        xhr.send();
    }
};
