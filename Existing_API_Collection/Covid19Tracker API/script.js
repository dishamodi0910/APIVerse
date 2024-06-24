const countrySelect = document.getElementById('country');
const selectedCountry = document.getElementById('selected-country');
const totalCases = document.getElementById('total-cases');
const activeCases = document.getElementById('active-cases');
const deaths = document.getElementById('deaths');
const recoveries = document.getElementById('recoveries');
const globalTotalCases = document.getElementById('global-total-cases');
const globalActiveCases = document.getElementById('global-active-cases');
const globalDeaths = document.getElementById('global-deaths');
const globalRecoveries = document.getElementById('global-recoveries');

// Fetch countries data and populate the dropdown
fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.country;
            option.textContent = country.country;
            countrySelect.appendChild(option);
        });
    });

// Function to fetch and display statistics for a specific country
function fetchCountryStatistics(country) {
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(response => response.json())
        .then(data => {
            selectedCountry.textContent = data.country;
            totalCases.textContent = data.cases;
            activeCases.textContent = data.active;
            deaths.textContent = data.deaths;
            recoveries.textContent = data.recovered;
        });
}

// Function to fetch and display global statistics
function fetchGlobalStatistics() {
    fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => {
            globalTotalCases.textContent = data.cases;
            globalActiveCases.textContent = data.active;
            globalDeaths.textContent = data.deaths;
            globalRecoveries.textContent = data.recovered;
        });
}

// Event listener for country selection
countrySelect.addEventListener('change', () => {
    const selectedCountryValue = countrySelect.value;
    if (selectedCountryValue) {
        fetchCountryStatistics(selectedCountryValue);
    }
});

// Initial fetch for global statistics
fetchGlobalStatistics();
