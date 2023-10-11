const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mock database to simulate movie and TV show data
const data = [
  { id: 1, title: 'Movie 1', type: 'movie' },
  { id: 2, title: 'TV Show 1', type: 'tv-show' },
  { id: 3, title: 'Action Movie', type: 'movie' },
  { id: 4, title: 'Another Action Movie', type: 'movie' },
  { id: 5, title: 'Action TV Show', type: 'tv-show' },
  { id: 6, title: 'Drama TV Show', type: 'tv-show' },
  // Add more data as needed
];

// Define routes
app.get('/api/media', (req, res) => {
  let { page, limit, search } = req.query;

  // Apply filters based on query parameters
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;

  let filteredData = data;

  if (search) {
    search = search.toLowerCase();
    filteredData = filteredData.filter(item =>
      item.title.toLowerCase().includes(search)
    );
  }

  // Calculate the offset for pagination
  const offset = (page - 1) * limit;
  const paginatedData = filteredData.slice(offset, offset + limit);

  res.json(paginatedData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
