document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchContentButton').addEventListener('click', fetchRandomContent);
});

async function fetchRandomContent() {
    const spaceId = 'YOUR_SPACE_ID';
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const endpoint = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        if (data.items && data.items.length > 0) {
            const randomItem = data.items[Math.floor(Math.random() * data.items.length)];
            displayContent(randomItem);
        } else {
            displayError('No content found.');
        }
    } catch (error) {
        console.error('Error fetching content:', error);
        displayError('Failed to fetch content details.');
    }
}

function displayContent(content) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h3>${content.fields.title}</h3>
        <p><strong>Description:</strong> ${content.fields.description}</p>
    `;
}

function displayError(message) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>${message}</p>`;
}
