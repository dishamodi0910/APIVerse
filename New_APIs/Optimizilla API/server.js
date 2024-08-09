const express = require('express');
const multer = require('multer');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const upload = multer({ dest: 'uploads/' });

app.post('/compress-image', upload.single('image'), async (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const fileStream = fs.createReadStream(filePath);

    try {
        const response = await fetch('https://api.optimizilla.com/v1/compress', {
            method: 'POST',
            body: fileStream,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const result = await response.json();

        if (result.success) {
            // Remove the uploaded file
            fs.unlinkSync(filePath);

            res.json({ 
                success: true, 
                imageUrl: result.compressedImageUrl 
            });
        } else {
            console.error('Optimizilla API error:', result.error);
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error compressing image:', error);
        res.status(500).json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
