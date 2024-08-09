const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.post('/send-email', async (req, res) => {
    const { to, subject, message } = req.body;

    const msg = {
        to,
        from: 'your-email@example.com', // Use your verified SendGrid sender email
        subject,
        text: message,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(msg);
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
