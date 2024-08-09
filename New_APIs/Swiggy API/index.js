document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchRestaurantsButton').addEventListener('click', fetchRestaurants);
});

async function fetchRestaurants() {
    const location = document.getElementById('location').value;
    const endpoint = `https://api.swiggy.com/restaurants?location=${location}`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'  // Hypothetical access token
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        if (data.restaurants && data.restaurants.length > 0) {
            const randomRestaurant = data.restaurants[Math.floor(Math.random() * data.restaurants.length)];
            displayRestaurant(randomRestaurant);
        } else {
            displayError('No restaurants found.');
        }
    } catch (error) {
        console.error('Error fetching restaurant details:', error);
        displayError('Failed to fetch restaurant details.');
    }
}

function displayRestaurant(restaurant) {
    const restaurantDiv = document.getElementById('restaurant');
    restaurantDiv.innerHTML = `
        <h3>${restaurant.name}</h3>
        <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
        <p><strong>Rating:</strong> ${restaurant.rating}</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
    `;
}

function displayError(message) {
    const restaurantDiv = document.getElementById('restaurant');
    restaurantDiv.innerHTML = `<p>${message}</p>`;
}
