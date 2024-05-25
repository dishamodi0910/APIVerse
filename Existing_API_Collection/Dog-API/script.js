document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dogapi.dog/api/v2/facts')
        .then(response => response.json())
        .then(DogData => {
            const DogText = DogData.data[0].attributes.body;
            const DogElement = document.getElementById('DogElement');
            DogElement.innerHTML = DogText;
        })
        .catch(error => console.error('Error fetching the Dog:', error));
});
