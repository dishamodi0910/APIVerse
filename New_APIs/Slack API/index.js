document.getElementById('message-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const channel = document.getElementById('channel').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ channel, message })
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById('status').textContent = 'Message sent successfully!';
        } else {
            document.getElementById('status').textContent = 'Failed to send message.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('status').textContent = 'An error occurred while sending the message.';
    }
});
