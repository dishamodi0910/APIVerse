document.getElementById('image-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);

    try {
        const response = await fetch('/compress-image', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById('compressed-image').src = data.imageUrl;
            document.getElementById('status').textContent = 'Image compressed successfully!';
        } else {
            document.getElementById('status').textContent = 'Failed to compress image.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('status').textContent = 'An error occurred while compressing the image.';
    }
});
