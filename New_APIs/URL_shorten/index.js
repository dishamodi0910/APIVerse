const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const validUrl = require('valid-url');
const {saveData,filterData,filterOriginalURL}=require('./controller/db')
const app = express();

// Body parser middleware
app.use(express.json());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Routes
// API route to shorten URL
app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  
  // Check if URL is valid
  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json('Invalid URL');
  }

  try {
    let url = filterOriginalURL(originalUrl);

    if (url) {
      res.json(url);
    } else {
      const shortUrl = shortid.generate();
      const datas=saveData(originalUrl,shortUrl)
      res.json(datas);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// Route to redirect to original URL
app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = filterData(shortUrl)

    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      console.log(`Short URL ${shortUrl} not found in database.`);
      return res.status(404).json('URL not found');
    }
  } catch (err) {
    console.error(`Error finding URL for short URL ${shortUrl}:`, err);
    res.status(500).json('Server error');
  }
});

// Serve static files if needed
// app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
