document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.btn');
    const activityContainer = document.querySelector('.activity');
    searchButton.addEventListener('click', getRandomActivity);

    function getRandomActivity() {
        const apiUrl = 'https://www.boredapi.com/api/activity';

        // Make API request
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayActivity(data.activity);
            })
            .catch(error => {
                console.error('Error fetching activity:', error);
            });
    }

    function displayActivity(activity) {
        let ul = document.querySelector(".ul")
        ul.innerHTML = ""; // Clear the ul
        let li = document.createElement("li");
        li.innerText = activity;
        ul.appendChild(li);
    }
});
