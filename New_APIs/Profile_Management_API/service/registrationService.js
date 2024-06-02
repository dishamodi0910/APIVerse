// const { bcrypt } = require("bcrypt");
const pool =require("../db");
const RegistractionResponse=require("../responseModel/registrationResponse");


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
module.exports.createUser=function createUser(registractionRequest){
   const name=registractionRequest.name;
   const imageBase64=registractionRequest.imageBase64;
   const bio=registractionRequest.bio;
   const imageUrl=registractionRequest.imageUrl;
   const phoneNumber=registractionRequest.phoneNumber;
   const email=registractionRequest.email;
   const password=registractionRequest.password;
//    const encryptPassword=bcrypt.hashSync(password);
//    console.log(encryptPassword);
   const profileType=registractionRequest.profileType;
   const role=registractionRequest.role;

    if (!name || !email || !password) {
        throw new Error('Username, email, and password are required');
    }
    //phoneNumber should be of 10 digits..
    const phoneNumberRegex = /^\d{10}$/;
    if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
     throw new Error('Invalid phone number. Phone number must be exactly 10 digits.');
    }
    //profileType check..
    if (role && !['admin', 'normal'].includes(role)) {
        throw new Error ('Invalid User role. User role must be either "admin" or "normal".');
    }

    if (profileType && !['private', 'public'].includes(profileType)) {
        throw new Error ('Invalid profile type. Profile type must be either "private" or "public".');
    }

    return new Promise( async (resolve,reject)=>{
        try {
            let imageUrlToStore;
            if (imageUrl) {
                imageUrlToStore = imageUrl; // Use provided image URL directly
            } else if (imageBase64) {
                const imagePath='/Users/charvizala/Desktop/Voosh_Backend_Task/images';
                imageUrlToStore = base64ToImageUrl(imageBase64,imagePath); // Handle direct photo upload
            }
            let query="insert into user_details (name,image,bio,phone_number,email,password,profile_type,role) values (?,?,?,?,?,?,?,?)";
            await pool.query(query,[name,imageUrlToStore,bio,phoneNumber,email,password,profileType,role],(error,result,feilds)=>{
                if (error) {
                    reject(error);
                } else {
                    let registractionResponse=new RegistractionResponse('User created successfully',result.insertId);
                    resolve(registractionResponse); // Resolve the Promise with the response
                }
            }) 
        } catch (error) {
            reject(error);
        }
    })

}

