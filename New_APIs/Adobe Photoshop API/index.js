document.getElementById('applyEffectButton').addEventListener('click', applyEffect);

const apiKey = 'YOUR_ADOBE_API_KEY'; // Replace with your Adobe Photoshop API key

async function applyEffect() {
    const imageUpload = document.getElementById('imageUpload').files[0];

    if (!imageUpload) {
        alert('Please upload an image.');
        return;
    }

    const formData = new FormData();
    formData.append('image', imageUpload);

    try {
        const response = await fetch('https://image.adobe.io/pie/psdService/photoshop?job=simple-filter-job', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'x-api-key': apiKey
            },
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('resultImage').src = result.output.imageUrl; // Assuming the API returns the processed image URL
        } else {
            alert('Failed to process the image.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error processing the image.');
    }
}
