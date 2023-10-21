# AWS S3 Multimedia Storage Client API
This is a client API that facilitates interaction with an AWS S3 bucket for storing and retrieving multimedia files. By utilizing the provided functions, you can easily upload and download multimedia files to and from the S3 bucket.

# Getting Started

## Prerequisites
Ensure you have the necessary AWS credentials and access rights to interact with the desired S3 bucket.
Set up a MongoDB instance for storing file metadata and related information.
## Installation
- Clone the repository.
- Navigate to aws-client-api directory
- Install the required dependencies using `npm install`.

## Usage
- Include the necessary database connection files in the src/dbconn directory.
- Configure the AWS S3 credentials in the awsconfig/aws-config.js file.
- Use the uploadMediaToS3 function to upload multimedia files to the S3 bucket. Ensure that the file input field name in your frontend matches the one specified in the multer uploads.
- Store the unique identifier related to the file for future lookup in the database.
- Leverage the downloadMediaFromS3 function to retrieve files from the S3 bucket when needed.
## Additional Considerations
- Customize the database schema according to your specific requirements, as users may have different data models.
- Implement a cloudfront URI associated with the S3 bucket to ensure faster multimedia file fetching and mitigate streaming issues, especially for large videos and music files.

## Request and Response Snapshots : 

> Request (Upload) : 
[Request](./utils/req.PNG)

> Response : 
[Response](./utils/res.PNG)

> Stream (Via CDN) : 
[Stream](./utils/stream.PNG)