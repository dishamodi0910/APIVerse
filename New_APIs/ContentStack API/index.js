document.getElementById('fetchContentButton').addEventListener('click', fetchContent);

const apiKey = 'YOUR_API_KEY';  // Replace with your ContentStack API key
const accessToken = 'YOUR_ACCESS_TOKEN';  // Replace with your ContentStack access token
const apiUrl = 'https://cdn.contentstack.io/v3/content_types';

async function fetchContent() {
    const contentType = document.getElementById('contentType').value;

    if (!contentType) {
        alert('Please enter a Content Type UID.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${contentType}/entries`, {
            method: 'GET',
            headers: {
                'api_key': apiKey,
                'access_token': accessToken,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.json();
            displayContent(result.entries);
        } else {
            alert('Failed to fetch content.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching content.');
    }
}

function displayContent(entries) {
    const contentList = document.getElementById('contentList');
    contentList.innerHTML = '';

    if (entries.length === 0) {
        contentList.innerHTML = '<li>No entries found.</li>';
        return;
    }

    entries.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = JSON.stringify(entry, null, 2);
        contentList.appendChild(listItem);
    });
}
