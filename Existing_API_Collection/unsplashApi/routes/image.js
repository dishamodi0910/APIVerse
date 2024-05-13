const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const router=express.Router();
router.use(cors());
dotenv.config();

const accessKey = process.env.UNSPLASH_ACCESS;
console.log(accessKey)
// Your code here

router.use(express.json());
const UNSPLASH_ROOT = 'https://api.unsplash.com'
// const accessKey=process.env.ACCESS_KEY;
router.get('/keywordImage', async (req, res) => {
    const query = req.query.query;
    console.log(query);
    const response = await axios.get(`${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${accessKey}&per_page=20`);
    const data = response.data.results;
    const urls=[];
    data.forEach((item) => {
        console.log(item.urls.small);
        urls.push(item.urls.small);
    });
    // res.json(data);
    res.json(urls);
});
router.get('/randomImage', async (req, res) => {
    const response = await axios.get(`${UNSPLASH_ROOT}/photos/random?client_id=${accessKey}&count=20`);
    const data = response.data;
    const urls=[];
    data.forEach((item) => {
        console.log(item.urls.small);
        urls.push(item.urls.small );
    });
    // res.json(data);
    res.json(urls);
});

module.exports = router;