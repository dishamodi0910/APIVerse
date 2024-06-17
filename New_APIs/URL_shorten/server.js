const url = 'http://localhost:5000/api/shorten';

const data = {
  name: 'John Doe',
  age: 30,
  originalUrl:"https://github.com/dishamodi0910/APIVerse/issues/"
};
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data) 
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Success:', data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
