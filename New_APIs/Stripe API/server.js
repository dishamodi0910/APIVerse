const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_STRIPE_KEY');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/charge', async (req, res) => {
    try {
        const { token } = req.body;
        const charge = await stripe.charges.create({
            amount: 5000, // Amount in cents (e.g., $50.00)
            currency: 'usd',
            source: token,
            description: 'Example charge'
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating charge:', error);
        res.status(500).json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
