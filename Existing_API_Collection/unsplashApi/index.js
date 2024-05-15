const express = require('express');
const axios = require('axios');
const cors = require('cors');
const imageRouter = require('./routes/image')
const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', imageRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
