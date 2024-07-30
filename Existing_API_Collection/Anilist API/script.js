// Function to search for anime by title
async function searchAnime() {
    const title = document.getElementById("searchInput").value;
    try {
        // Constructing the GraphQL query with image fields
        const query = `
            query ($title: String) {
                Page {
                    media (search: $title, type: ANIME) {
                        id
                        title {
                            romaji
                            english
                            native
                        }
                        description
                        averageScore
                        coverImage {
                            large
                            medium
                        }
                    }
                }
            }
        `;

        // Making a POST request to the AniList API's GraphQL endpoint
        const response = await fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { title }
            }),
        });

        // Parsing the JSON response
        const responseData = await response.json();

        // Extracting data from the response
        const animeList = responseData.data.Page.media;

        // Displaying results
        const animeResultsDiv = document.getElementById("animeResults");
        animeResultsDiv.innerHTML = "";
        animeList.forEach(anime => {
            const animeCard = document.createElement("div");
            animeCard.classList.add("anime-card");

            const titleElement = document.createElement("h2");
            titleElement.textContent = anime.title.romaji || anime.title.english || anime.title.native;
            animeCard.appendChild(titleElement);

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = anime.description;
            animeCard.appendChild(descriptionElement);

            const scoreElement = document.createElement("p");
            scoreElement.textContent = "Average Score: " + anime.averageScore;
            animeCard.appendChild(scoreElement);

            if (anime.coverImage && anime.coverImage.medium) {
                const imageElement = document.createElement("img");
                imageElement.src = anime.coverImage.medium;
                animeCard.appendChild(imageElement);
            }

            animeResultsDiv.appendChild(animeCard);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
