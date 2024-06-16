document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    searchYouTube(query);
});

function searchYouTube(query) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=10&type=video`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videoResults = document.getElementById('video-results');
            videoResults.innerHTML = '';

            data.items.forEach(item => {
                // Check if video is unavailable
                if (item.snippet.title === 'Private video' || item.snippet.title === 'Deleted video') {
                    return; // Skip this video
                }

                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;

                const videoItem = document.createElement('div');
                videoItem.classList.add('video-item');

                const videoTitleLink = document.createElement('a');
                videoTitleLink.href = `https://www.youtube.com/watch?v=${videoId}`;
                videoTitleLink.target = '_blank';
                videoTitleLink.textContent = videoTitle;
                videoTitleLink.classList.add('video-title');

                const videoFrame = document.createElement('iframe');
                videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
                videoFrame.width = '100%';
                videoFrame.height = '360';
                videoFrame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                videoFrame.allowFullscreen = true;

                videoItem.appendChild(videoTitleLink);
                videoItem.appendChild(videoFrame);
                videoResults.appendChild(videoItem);
            });
        })
        .catch(error => console.error('Error fetching YouTube API:', error));
}
