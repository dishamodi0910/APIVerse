import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { ImagePool } from "@squoosh/lib";
import { optimize } from "svgo";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import gifsicle from "gifsicle";
import { error } from "console";

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Helper function to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Endpoint to compress image
app.post("/compress", upload.single("image"), async (req, res) => {
  try {
    const inputFilePath = req.file.path;
    const outputFilePath = path.join(
      __dirname,
      "compressed-images",
      `compressed-${req.file.originalname}`
    );

    if (!fs.existsSync("compressed-images")) {
      fs.mkdirSync("compressed-images");
    }

    const fileExt = path.extname(req.file.originalname).toLowerCase();
    const inputBuffer = fs.readFileSync(inputFilePath);

    let outputBuffer;

    switch (fileExt) {
      case ".jpg":
      case ".jpeg": {
        const imagePool = new ImagePool();
        const image = imagePool.ingestImage(inputBuffer);
        await image.encode({
          mozjpeg: { quality: 70 },
        });
        outputBuffer = (await image.encodedWith.mozjpeg).binary;
        imagePool.close();
        break;
      }
      case ".png": {
        const imagePool = new ImagePool();
        const image = imagePool.ingestImage(inputBuffer);
        await image.encode({
          oxipng: {},
        });
        outputBuffer = (await image.encodedWith.oxipng).binary;
        imagePool.close();
        break;
      }
      case ".svg": {
        const result = optimize(inputBuffer.toString(), {
          path: inputFilePath,
        });
        outputBuffer = Buffer.from(result.data);
        break;
      }
      case ".gif": {
        outputBuffer = await new Promise((resolve, reject) => {
          execFile(
            gifsicle,
            ["--optimize", "--output", outputFilePath, inputFilePath],
            (err) => {
              if (err) reject(err);
              resolve(fs.readFileSync(outputFilePath));
            }
          );
        });
        break;
      }
      default: {
        console.log("server closed...");
        console.log("Unsupported file type");
        server.close();
        throw new error(`Unsupported file type`);
      }
    }

    // Write the compressed image to disk
    fs.writeFileSync(outputFilePath, outputBuffer);

    // Send the compressed image back to the client
    res.download(outputFilePath, (err) => {
      if (err) {
        console.error("Error sending compressed image:", err);
      }
    });
    console.log("Image Compressed successfully...");
  } catch (error) {
    res.status(500).json({ error: "Failed to compress image" });
  }
});

