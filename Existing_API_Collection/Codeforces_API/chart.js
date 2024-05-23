// Replace 'YOUR_API_KEY' with your actual Codeforces API key
const apiKey = 'YOUR_API_KEY';
const handle = 'Your_Codeforces_Handle';

const url = `https://codeforces.com/api/user.rating?handle=${handle}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const ratingChanges = data.result;

        const labels = ratingChanges.map(entry => new Date(entry.ratingUpdateTimeSeconds * 1000).toLocaleDateString());
        const ratings = ratingChanges.map(entry => entry.newRating);

        const ctx = document.getElementById('ratingChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Rating Changes',
                    data: ratings,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
