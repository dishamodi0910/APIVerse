import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = ''; // Replace with your NewsAPI key

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const fetchNews = async () => {
    if (!country || !category) {
      setError('Please enter both country code and category.');
      return;
    }

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'error') {
        setError(data.message);
      } else {
        setArticles(data.articles);
        setError('');
      }
    } catch (error) {
      setError('Error fetching news. Please try again later.');
    }
  };

  return (
    <div className="app-container">
      <h1>News Web Application</h1>
      <div className="input-container">
        <label>
          Country Code:
          <input type="text"
           value={country}
           placeholder='in'
           onChange={handleCountryChange} />
        </label>
      </div>
      <div className="input-container">
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </label>
      </div>
      <button onClick={fetchNews}>Fetch News</button>
      {error && <p className="error">{error}</p>}
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;

