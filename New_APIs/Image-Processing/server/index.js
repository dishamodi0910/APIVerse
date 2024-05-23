const express = require('express');
const sharp = require('sharp');
const multer = require('multer');
const fs = require('fs');
const app = express();
const path = require('path');
app.use(express.json());

// Setting up storage for the server-filesystem. 

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
// Route handling.

// For posting a normal image.

app.post('/image/post', upload.single('image'),function(req,res){

  if(!req.file)
  {
    return res.status(400).send('No file uploaded');
  }

  res.send({ filename: req.file.name, path: `/uploads/${req.file.filename}`});
})

app.get('/image/metaData/:filename', async (req,res) => {

  try{
  const filePath = path.join(uploadDir,req.params.filename);
  const metaData = await sharp(filePath).metadata();
  res.json(metaData);
  }
  catch(err)
  {
    res.status(500).send("There was some error" + err);
  }
});

// POST For Image re-size.

app.post('/image/resize', upload.single('image'), async (req, res) => {
  try {
    const resizeFilename = 'resized-' + req.file.filename;
    const resizePath = path.join(uploadDir, resizeFilename);
    await sharp(req.file.path)
      .resize({ width: 150, height: 97 })
      .toFile(resizePath);
    res.send({ path: `/uploads/${resizeFilename}` });
  } catch (err) {
    res.status(500).send("Could not post due to error " + err);
  }
});

// POST /image/changeformat to change the format of an image
app.post('/image/changeformat', upload.single('image'), async (req, res) => {
  try {
    const newFormatFilePath = path.join(uploadDir, 'formatted-' + Date.now() + '.jpg');
    await sharp(req.file.path)
      .toFormat('jpeg', { mozjpeg: true })
      .toFile(newFormatFilePath);
    res.send({ path: `/uploads/${newFormatFilePath}` });
  } catch (error) {
    res.status(500).send("Some error occurred: " + error);
  }
});

// POST /image/crop to crop an image
app.post('/image/crop', upload.single('image'), async (req, res) => {
  try {
    const cropFilePath = path.join(uploadDir, 'cropped-' + req.file.filename);
    await sharp(req.file.path)
      .extract({ width: 500, height: 330, left: 120, top: 70 })
      .toFile(cropFilePath);
    res.send({ path: `/uploads/${cropFilePath}` });
  } catch (error) {
    res.status(500).send("Some error occurred: " + error);
  }
});

// POST /image/grayscale to convert an image to grayscale
app.post('/image/grayscale', upload.single('image'), async (req, res) => {
  try {
    const grayFilePath = path.join(uploadDir, 'grayscale-' + req.file.filename);
    await sharp(req.file.path)
      .grayscale()
      .toFile(grayFilePath);
    res.send({ path: `/uploads/${grayFilePath}` });
  } catch (error) {
    res.status(500).send("Some error occurred: " + error);
  }
});

// POST /image/rotate to rotate an image
app.post('/image/rotate', upload.single('image'), async (req, res) => {
  try {
    const rotateFilePath = path.join(uploadDir, 'rotated-' + req.file.filename);
    await sharp(req.file.path)
      .rotate(33, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(rotateFilePath);
    res.send({ path: `/uploads/${rotateFilePath}` });
  } catch (error) {
    res.status(500).send("Some error occurred: " + error);
  }
});

// POST /image/blur to blur an image
app.post('/image/blur', upload.single('image'), async (req, res) => {
  try {
    const blurFilePath = path.join(uploadDir, 'blurred-' + req.file.filename);
    await sharp(req.file.path)
      .blur(4)
      .toFile(blurFilePath);
    res.send({ path: `/uploads/${blurFilePath}` });
  } catch (error) {
    res.status(500).send("Some error occurred: " + error);
  }
});

// POST /image/composite to composite two images
app.post('/image/composite', upload.fields([{ name: 'image1' }, { name: 'image2' }]), async (req, res) => {
  try {
    const compositeFilePath = path.join(uploadDir, 'composite-' + Date.now() + '.png');
    await sharp(req.files['image1'][0].path)
      .composite([{ input: req.files['image2'][0].path, top: 50, left: 50 }])
      .toFile(compositeFilePath);
    res.send({ path: `/uploads/${compositeFilePath}` });
  } catch (error) {
    res.status(500).send("Some error occurred: " + error);
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

app.listen(3000); 