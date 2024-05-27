
# Image Processing API

This Image Processing API allows users to upload images and perform various operations on them, such as resizing, changing formats, cropping, converting to grayscale, rotating, blurring, and compositing images.

## Features

- Upload an image
- Retrieve metadata of an image
- Resize an image
- Change image format
- Crop an image
- Convert an image to grayscale
- Rotate an image
- Blur an image
- Composite two images

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Suyash878/Image-Processing-API.git
   cd image-processing-api

2. Install Dependencies.
   ```bash
   npm install
   ```

3. Create `uploads` directory.
    ```bash
    mkdir uploads
    ```

## Usage 

1. start the server.
    ```bash
    node index.js
    ```

2. The server will be hosted on port 3000, you can access it on `https:localhost/3000`.

## Endpoints

### Upload an Image

- **URL:** `/image/post`
- **Method:** `POST`
- **Description:** Upload a single image.

### Retrieve Image Metadata

- **URL:** `/image/metaData/:filename`
- **Method:** `GET`
- **Description:** Get metadata of an uploaded image.

### Resize an Image

- **URL:** `/image/resize`
- **Method:** `POST`
- **Description:** Resize an uploaded image.

### Change Image Format

- **URL:** `/image/changeformat`
- **Method:** `POST`
- **Description:** Change the format of an uploaded image to JPEG.

### Crop an Image

- **URL:** `/image/crop`
- **Method:** `POST`
- **Description:** Crop an uploaded image.

### Convert an Image to Grayscale

- **URL:** `/image/grayscale`
- **Method:** `POST`
- **Description:** Convert an uploaded image to grayscale.

### Rotate an Image

- **URL:** `/image/rotate`
- **Method:** `POST`
- **Description:** Rotate an uploaded image.

### Blur an Image

- **URL:** `/image/blur`
- **Method:** `POST`
- **Description:** Blur an uploaded image.

### Composite Two Images

- **URL:** `/image/composite`
- **Method:** `POST`
- **Description:** Composite two uploaded images.

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Sharp: High performance node.js library for image manipulation.
- multer: Middlware for handling file uploads.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
