# Description
This is API is used for Compress the Image without any third party APIs. You can use this API for compress the image upto 70% result. This API supports the Image in the format of jpg/jpeg, png, svg files.

# API Endpoints
## POST /compress
Used to send the image for compression...

# Getting Started
## Pre-Requisites
- NodeJs  ( **version** : ^12.0.0 or ^16.0.0 )


# Steps to Run
1. Clone the Repository and Nevigate to the main directory **Image_Compression_API**
    
    cd New_APIs

    cd Image_Compression_API

    **for use version 16 of NodeJS**: 

    nvm install 16

    nvm use 16

2. install the dependency

    npm i

3. start the server using node

    node server.js

4. go to the postman or any API tester like Thunder Client ( Of Vs code) 

    - type this URL in the request type of POST method

      http://localhost:3000/compress

    - go to the Body
    - select form-data
    - write the key name "image"
    - select type "File" from dropdown menu in the Key section (which is text inbuilt)
    - upload the image in the value section.
    - send the request.

5. You got the compressed Image in the "compressed-images" folder and also get as a response from the post request.



