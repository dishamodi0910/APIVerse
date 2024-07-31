const express = require('express');
const app = express();
const analyticsRoutes = require('./routes/analytics');

app.use(express.json());
app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
