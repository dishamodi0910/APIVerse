document.getElementById('email-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to, subject, message })
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById('status').textContent = 'Email sent successfully!';
        } else {
            document.getElementById('status').textContent = 'Failed to send email.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('status').textContent = 'An error occurred while sending the email.';
    }
});
