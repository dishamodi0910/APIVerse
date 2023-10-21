const S3 = require('aws-sdk/clients/s3');
require('dotenv').config();

const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


console.log("bucket name = " + bucketName)

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

const uploadMediaToS3 = (file) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename,
        ContentType: file.mimetype
    }
    return s3.upload(uploadParams).promise()
}

const downloadMediafromS3 = (key) => {
    const downloadParams = {
        Bucket: bucketName,
        Key: key
    }
    return s3.getObject(downloadParams).createReadStream();
}

module.exports = { uploadMusicToS3, downloadfromS3, UploadPicturesToS3 };