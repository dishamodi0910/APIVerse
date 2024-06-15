document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const countryInput = document.getElementById("country-input");
    const holidaysList = document.getElementById("holidays-list");
    const Year_container=document.getElementById('year-input')
    searchButton.addEventListener("click", () => {
        const countryCode = countryInput.value;
        const Year=Year_container.value
        if (countryCode && Year) {
            fetchHolidays(countryCode,Year);
        }
    });
    const year=new Date().getFullYear()
    for(let i=year;i>=2010;i--){
        const option=document.createElement('option')
        option.setAttribute('value',i)
        option.textContent='year: ' +i
        Year_container.appendChild(option)
    }
    function fetchHolidays(countryCode,Year) {
        //API KEY
        const apiKey = 'akio9k5qVkY8dCwDGw657ZGC3M8LWOcY';
        const apiUrl = `https://calendarific.com/api/v2/holidays?country=${countryCode}&year=${Year}&api_key=${apiKey}`;

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
