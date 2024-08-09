document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchRestaurantButton').addEventListener('click', fetchRandomRestaurant);
});

async function fetchRandomRestaurant() {
    const apiKey = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=56625527';
    const cityId = 280; // Example city ID for San Francisco
    const endpoint = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&count=1&sort=rating&order=desc`;
    
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'user-key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.restaurants && data.restaurants.length > 0) {
            const restaurant = data.restaurants[0].restaurant;
            displayRestaurant(restaurant);
        } else {
            displayError('No restaurants found.');
        }
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        displayError('Failed to fetch restaurant details.');
    }
}

function displayRestaurant(restaurant) {
    const restaurantDiv = document.getElementById('restaurant');
    restaurantDiv.innerHTML = `
        <h3>${restaurant.name}</h3>
        <p><strong>Cuisine:</strong> ${restaurant.cuisines}</p>
        <p><strong>Address:</strong> ${restaurant.location.address}</p>
        <p><strong>Rating:</strong> ${restaurant.user_rating.aggregate_rating} (${restaurant.user_rating.rating_text})</p>
        <p><strong>Cost for Two:</strong> ${restaurant.currency} ${restaurant.average_cost_for_two}</p>
        <a href="${restaurant.url}" target="_blank">View on Zomato</a>
    `;
}

function displayError(message) {
    const restaurantDiv = document.getElementById('restaurant');
    restaurantDiv.innerHTML = `<p>${message}</p>`;
}
