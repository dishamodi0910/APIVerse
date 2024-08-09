document.getElementById('processButton').addEventListener('click', processImage);

const apiKey = 'YOUR_DEEPAI_API_KEY'; // Replace with your DeepAI API key

function processImage() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    const processingType = document.getElementById('processingType').value;

    if (!file) {
        alert('Please select an image to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    let apiUrl = '';
    switch (processingType) {
        case 'colorizer':
            apiUrl = 'https://api.deepai.org/api/colorizer';
            break;
        case 'super-resolution':
            apiUrl = 'https://api.deepai.org/api/torch-srgan';
            break;
        case 'style-transfer':
            apiUrl = 'https://api.deepai.org/api/deepdream';
            break;
        default:
            return;
    }

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'api-key': apiKey
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.output_url) {
            document.getElementById('processedImage').src = data.output_url;
        } else {
            alert('Failed to process the image.');
        }
    })
    .catch(error => {
        console.error('Error processing image:', error);
        alert('Error processing the image.');
    });
}
