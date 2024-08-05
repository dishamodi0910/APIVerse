const express = require('express');
const router = express.Router();

// Mock data
const analyticsData = {
    user1: {
        posts: 120,
        likes: 340,
        comments: 45,
        shares: 67
    },
    user2: {
        posts: 95,
        likes: 280,
        comments: 32,
        shares: 54
    }
};

// Endpoint to get analytics data for a user
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const data = analyticsData[userId];
    
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
