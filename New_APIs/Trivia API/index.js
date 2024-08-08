document.addEventListener('DOMContentLoaded', function () {
    fetchTriviaQuestions();

    document.getElementById('deployButton').addEventListener('click', async () => {
        const appName = document.getElementById('deployAppName').value;
        const sourceUrl = document.getElementById('deploySourceUrl').value;
        const response = await fetch('/deploy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ app_name: appName, source_url: sourceUrl })
        });
        const result = await response.json();
        console.log(result);
    });

    document.getElementById('scaleButton').addEventListener('click', async () => {
        const appName = document.getElementById('scaleAppName').value;
        const dynoType = document.getElementById('scaleDynoType').value;
        const quantity = document.getElementById('scaleQuantity').value;
        const response = await fetch('/scale', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ app_name: appName, dyno_type: dynoType, quantity: parseInt(quantity) })
        });
        const result = await response.json();
        console.log(result);
    });

    document.getElementById('logsButton').addEventListener('click', async () => {
        const appName = document.getElementById('logsAppName').value;
        const response = await fetch(`/logs?app_name=${appName}`);
        const result = await response.json();
        const results = document.getElementById('results');
        results.innerHTML = JSON.stringify(result, null, 2);
    });
});

async function fetchTriviaQuestions() {
    const endpoint = 'https://opentdb.com/api.php?amount=5';

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const triviaQuestions = document.getElementById('triviaQuestions');
            data.results.forEach(question => {
                const questionItem = document.createElement('div');
                questionItem.className = 'questionItem';
                questionItem.innerHTML = `
                    <h3>${question.question}</h3>
                    <p>Category: ${question.category}</p>
                    <p>Difficulty: ${question.difficulty}</p>
                `;
                triviaQuestions.appendChild(questionItem);
            });
        })
        .catch(error => console.error('Error fetching trivia questions:', error));
}
