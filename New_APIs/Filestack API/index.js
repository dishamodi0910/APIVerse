const client = filestack.init('YOUR_FILESTACK_API_KEY');

document.getElementById('upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const resizeWidth = document.getElementById('resizeWidth').value;
    const resizeHeight = document.getElementById('resizeHeight').value;
    const watermark = document.getElementById('watermark').value;

    if (fileInput.files.length === 0) {
        document.getElementById('status').textContent = 'Please select a file to upload.';
        return;
    }

    const file = fileInput.files[0];
    
    try {
        const uploadResponse = await client.upload(file);
        let handle = uploadResponse.handle;

        let url = `https://cdn.filestackcontent.com/${handle}`;

        // Apply transformations if specified
        let transformations = [];
        if (resizeWidth || resizeHeight) {
            transformations.push(`resize=w:${resizeWidth},h:${resizeHeight}`);
        }
        if (watermark) {
            transformations.push(`watermark=text:${watermark}`);
        }

        if (transformations.length > 0) {
            url += `?${transformations.join('&')}`;
        }

        document.getElementById('imagePreview').src = url;
        document.getElementById('status').textContent = 'File uploaded and transformed successfully!';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('status').textContent = 'An error occurred while uploading the file.';
    }
});
