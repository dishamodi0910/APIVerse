document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const characterInfo = document.getElementById('characterInfo');
  
    generateButton.addEventListener('click', async function() {
      const randomId = Math.floor(Math.random() * 826) + 1;
      const apiUrl = `https://rickandmortyapi.com/api/character/${randomId}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        const characterName = data.name;
        const characterImage = data.image;
  
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
          <h2>${characterName}</h2>
          <img src="${characterImage}" alt="${characterName}">
        `;
  
        characterInfo.innerHTML = '';
        characterInfo.appendChild(characterElement);
      } catch (error) {
        console.error('Error fetching data:', error);
        characterInfo.innerHTML = '<p>Failed to fetch character data.</p>';
      }
    });
  });
  