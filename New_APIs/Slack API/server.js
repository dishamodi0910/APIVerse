const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const SLACK_TOKEN = 'YOUR_SLACK_BOT_TOKEN';

app.post('/send-message', async (req, res) => {
    const { channel, message } = req.body;

    try {
        const response = await fetch('https://slack.com/api/chat.postMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SLACK_TOKEN}`
            },
            body: JSON.stringify({
                channel: `#${channel}`,
                text: message
            })
        });

        const data = await response.json();

        if (data.ok) {
            res.json({ success: true });
        } else {
            console.error('Slack API error:', data.error);
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
