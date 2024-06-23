const stateSelect = document.getElementById("state_select");
const searchBtn = document.getElementById("search_btn");
const randomBtn = document.getElementById("random_btn");
const result = document.getElementById("result");

// Function to fetch all states
async function fetchStates() {
    try {
        const response = await fetch("https://api.openbrewerydb.org/breweries");
        const data = await response.json();
        const states = new Set(data.map(brewery => brewery.state).filter(state => state));
        states.forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching states:", error);
    }
}

// Function to fetch breweries by state
async function fetchBreweriesByState(stateName, sortBy = 'name') {
    try {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=${stateName}&sort=${sortBy}&per_page=10`);
        const data = await response.json();
        if (data.length === 0) {
            result.innerHTML = "<h3>No breweries found in this state</h3>";
            return;
        }
        result.innerHTML = "";
        data.forEach(brewery => {
            result.innerHTML += `
                <div class="brewery_card">
                    <h2>${brewery.name}</h2>
                    <div class="brewery_details">
                        <p><strong>Type:</strong> ${brewery.brewery_type}</p>
                        <p><strong>City:</strong> ${brewery.city}</p>
                        <p><strong>State:</strong> ${brewery.state}</p>
                        <p><strong>Country:</strong> ${brewery.country}</p>
                        <p><strong>Phone:</strong> ${brewery.phone}</p>
                        <p><strong>Website:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        result.innerHTML = "<h3>Error fetching data. Please try again later.</h3>";
        console.error("Error fetching breweries by state:", error);
    }
}

// Function to fetch a random brewery
async function fetchRandomBrewery() {
    try {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const brewery = data[randomIndex];
        result.innerHTML = `
            <div class="brewery_card">
                <h2>${brewery.name}</h2>
                <div class="brewery_details">
                    <p><strong>Type:</strong> ${brewery.brewery_type}</p>
                    <p><strong>City:</strong> ${brewery.city}</p>
                    <p><strong>State:</strong> ${brewery.state}</p>
                    <p><strong>Country:</strong> ${brewery.country}</p>
                    <p><strong>Phone:</strong> ${brewery.phone}</p>
                    <p><strong>Website:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                </div>
            </div>
        `;
    } catch (error) {
        result.innerHTML = "<h3>Error fetching data. Please try again later.</h3>";
        console.error("Error fetching random brewery:", error);
    }
}

// Event listener for search button
searchBtn.addEventListener("click", () => {
    const selectedState = stateSelect.value;
    if (!selectedState) {
        result.innerHTML = "<h3>Please select a state</h3>";
        return;
    }
    const sortBy = document.querySelector('input[name="sort"]:checked').value;
    fetchBreweriesByState(selectedState, sortBy);
});

// Event listener for random button
randomBtn.addEventListener("click", () => {
    fetchRandomBrewery();
});

// Populate state select dropdown when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchStates();
});
