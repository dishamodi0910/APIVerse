document.getElementById('processImageButton').addEventListener('click', processImage);

const thumborBaseUrl = 'YOUR_THUMBOR_SERVER_URL';  // Replace with your Thumbor server URL

async function processImage() {
    const imageInput = document.getElementById('imageInput').files[0];
    if (!imageInput) {
        alert('Please upload an image.');
        return;
    }

    const filters = [];
    if (document.getElementById('grayscaleFilter').checked) {
        filters.push('filters:grayscale()');
    }
    if (document.getElementById('blurFilter').checked) {
        filters.push('filters:blur(10)');
    }

    const reader = new FileReader();
    reader.onload = async function(event) {
        const imageData = event.target.result;
        const processedImageUrl = `${thumborBaseUrl}/${filters.join('/')}/smart/${imageData}`;
        
        try {
            const response = await fetch(processedImageUrl);
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                document.getElementById('processedImage').src = url;
            } else {
                alert('Failed to process image.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error processing image.');
        }
    };
    reader.readAsDataURL(imageInput);
}
