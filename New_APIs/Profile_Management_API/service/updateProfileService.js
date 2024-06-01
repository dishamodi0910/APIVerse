const pool =require("../db");
const fs = require('fs');
const path = require('path');

function base64ToImageUrl(base64String, imagePath) {
    try{
    // To Create a buffer from the base64 string
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // To Generate a unique file name
    const fileName = `${Date.now()}_${Math.floor(Math.random() * 10000)}.png`;

    // Construct the file path
    const filePath = path.join(imagePath, fileName);
    console.log('File path:', filePath);
    // Write the buffer to a file
    fs.writeFileSync(filePath, buffer);

    // Construct and return the image URL
    const imageUrl = filePath;
    console.log('Image URL:', imageUrl);
    return imageUrl;
    }
    catch (error) {
        throw new Error('Error handling direct photo upload: ' + error.message);
    }
};

module.exports.updateProfile=function updateProfile(updateProfileRequest){
    
   const { id,name, imageBase64, bio, imageUrl, phoneNumber, email, password } = updateProfileRequest;

    // Construct the SET clause dynamically based on the provided fields
    let setClause = '';
    if (name) setClause += `name = '${name}', `;
            let imageUrlToStore;
            if (imageUrl) {
                imageUrlToStore = imageUrl; // Use provided image URL directly
            } else if (imageBase64) {
                const imagePath='/Users/charvizala/Desktop/Voosh_Backend_Task/images';
                imageUrlToStore = base64ToImageUrl(imageBase64,imagePath);
            }
    if (imageUrlToStore) setClause += `image = '${imageUrlToStore}', `;
    if (bio) setClause += `bio = '${bio}', `;
    if (phoneNumber) {
       const phoneNumberRegex = /^\d{10}$/;
       if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
        throw new Error('Invalid phone number. Phone number must be exactly 10 digits.');
        }
        setClause += `phone_number = '${phoneNumber}', `;
    }
    if (email) setClause += `email = '${email}', `;
    if (password) setClause += `password = '${password}', `;

    // Remove the trailing comma and space from the setClause
    setClause = setClause.slice(0, -2);

    // Construct and execute the update query
    const query = `UPDATE user_details SET ${setClause} WHERE id = ?`;
 
    return new Promise((resolve, reject) => {
        pool.query(query, [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                if (result.affectedRows === 0) {
                    resolve('This user doesn\'t exist!!');
                } else {
                    resolve('Updated User Details SuccessFully!!');
                }
            }
        });
    });
}


module.exports.updateImage=function updateImage(updateImageRequest){
    
    const { id, imageBase64,imageUrl} = updateImageRequest;
 
     // Construct the SET clause dynamically based on the provided fields
            let setClause = '';
            let imageUrlToStore;
            if (imageUrl) {
                imageUrlToStore = imageUrl; // Use provided image URL directly
            } else if (imageBase64) {
                const imagePath='/Users/charvizala/Desktop/Voosh_Backend_Task/images';
                imageUrlToStore = base64ToImageUrl(imageBase64,imagePath); // Handle direct photo upload
            }
     if (imageUrlToStore) setClause += `image = '${imageUrlToStore}', `;
     
     // Remove the trailing comma and space from the setClause
     setClause = setClause.slice(0, -2);
 
     // Construct and execute the update query
     const query = `UPDATE user_details SET ${setClause} WHERE id = ?`;
  
     return new Promise((resolve, reject) => {
         pool.query(query, [id], (error, result) => {
             if (error) {
                 reject(error);
             } else {
                if (result.affectedRows === 0) {
                    resolve('This user doesn\'t exist!!');
                } else {
                    resolve('Updated User Image Successfully!!');
                }
             }
         });
     });
 }

 module.exports.updateProfileType=function updateProfileType(updateProfileTypeRequest){
    
    const { id, profileType} = updateProfileTypeRequest;
     
    if (profileType && !['private', 'public'].includes(profileType)) {
        throw new Error ('Invalid profile type. Profile type must be either "private" or "public".');
    }

     // Construct the SET clause dynamically based on the provided fields
    let setClause = '';
     
     if (profileType) setClause += `profile_type = '${profileType}', `;
     
     // Remove the trailing comma and space from the setClause
     setClause = setClause.slice(0, -2);
 
     // Construct and execute the update query
     const query = `UPDATE user_details SET ${setClause} WHERE id = ?`;
  
     return new Promise((resolve, reject) => {
         pool.query(query, [id], (error, result) => {
             if (error) {
                 reject(error);
             } else {
                if (result.affectedRows === 0) {
                    resolve('This user doesn\'t exist!!');
                } else {
                    resolve('Updated User Profile Type Successfully!!');
                }
             }
         });
     });
 }