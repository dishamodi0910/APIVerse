document.getElementById('uploadButton').addEventListener('click', uploadImage);
document.getElementById('transformButton').addEventListener('click', transformImage);

const cloudName = 'YOUR_CLOUDINARY_CLOUD_NAME'; // Replace with your Cloudinary cloud name
const uploadPreset = 'YOUR_UPLOAD_PRESET'; // Replace with your Cloudinary upload preset

let uploadedImageUrl = '';

function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        uploadedImageUrl = data.secure_url;
        alert('Image uploaded successfully.');
    })
    .catch(error => {
        console.error('Error uploading image:', error);
        alert('Failed to upload image.');
    });
}

function transformImage() {
    const width = document.getElementById('resizeWidth').value;
    const height = document.getElementById('resizeHeight').value;
    const crop = document.getElementById('cropType').value;

    if (!uploadedImageUrl) {
        alert('Please upload an image first.');
        return;
    }

    const transformations = [];
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (crop) transformations.push(`c_${crop}`);

    const transformationString = transformations.join(',');

    const transformedImageUrl = uploadedImageUrl.replace('/upload/', `/upload/${transformationString}/`);
    
    document.getElementById('transformedImage').src = transformedImageUrl;
}
