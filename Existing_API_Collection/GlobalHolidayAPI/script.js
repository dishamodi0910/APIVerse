document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const countryInput = document.getElementById("country-input");
    const holidaysList = document.getElementById("holidays-list");

    searchButton.addEventListener("click", () => {
        const countryCode = countryInput.value;

        if (countryCode) {
            fetchHolidays(countryCode);
        }
    });

    function fetchHolidays(countryCode) {
        //API KEY
        const apiKey = 'akio9k5qVkY8dCwDGw657ZGC3M8LWOcY';
        const apiUrl = `https://calendarific.com/api/v2/holidays?country=${countryCode}&year=2023&api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Unable to fetch holidays.');
                }
            })
            .then(data => {
                displayHolidays(data.response.holidays);
            })
            .catch(error => {
                console.error(error);
                holidaysList.innerHTML = "<p>Error fetching holidays.</p>";
            });
    }

    function displayHolidays(holidays) {
        holidaysList.innerHTML = "";

        if (holidays.length === 0) {
            holidaysList.innerHTML = "<p>No holidays found for this year.</p>";
        } else {
            //traversing holiday list and printing it
            holidays.forEach(holiday => {
                const listItem = document.createElement("div");
                listItem.className = "holiday-item";
                listItem.innerHTML = `<strong>${holiday.date.iso}</strong>: ${holiday.name}`;
                holidaysList.appendChild(listItem);
            });
        }
    }
});
