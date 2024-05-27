const pool =require("../db");
const CheckoutProfileResponse=require("../responseModel/checkoutProfileResponse");
const UserProfileListResponse=require("../responseModel/userProfileListResponse");
const UserProfileResponse=require("../responseModel/userProfileResponse");

module.exports.checkoutProfile=function checkoutProfile(userId){

    if (!userId) {
        throw new Error('UserId is required!!');
    }  
    return new Promise( async (resolve,reject)=>{
        try {  
            let query="select * from user_details where id=? ";
            await pool.query(query,[userId],(error,result,feilds)=>{
                if (error) {
                    reject(error);
                } else {
                    if(result.length==0){
                       resolve('User doesn\'t Exist!!');
                    }
                    else{
                     console.log(result[0]);
                     let checkoutProfileResponse=new CheckoutProfileResponse(result[0].name,result[0].bio,result[0].image,result[0].phone_number,result[0].email,result[0].password,result[0].profile_type,result[0].role); 
                    resolve(checkoutProfileResponse); 
                    }
                }
            }) 
        } catch (error) {
            reject(error);
        }
    })

}

module.exports.userProfileListData = function userProfileListData(userId) {
    if (!userId) {
        throw new Error('UserId is required!!');
    }

    return new Promise(async (resolve, reject) => {
        try {
            let query = "SELECT * FROM user_details WHERE id = ?";
            await pool.query(query, [userId], async (error, result, fields) => {
                if (error) {
                    reject(error);
                } else {
                    if (result.length === 0) {
                        resolve('User doesn\'t Exist!!');
                    } else {
                        let profileQuery = "SELECT * FROM user_details where id!= ? ";
                        // Check user role
                        if (result[0].role !== 'admin') {
                            profileQuery += " AND profile_type = 'public'";
                        }
                        await pool.query(profileQuery, [userId],(profileError, profileResult) => {
                            if (profileError) {
                                reject(profileError);
                            } else {
                                let userProfileListResponse = new UserProfileListResponse();
                                console.log(profileResult);
                                for (let i = 0; i < profileResult.length; i++) {
                                    let userProfileResponse = new UserProfileResponse(profileResult[i].name, profileResult[i].image, profileResult[i].bio, profileResult[i].phoneNumber, profileResult[i].email);
                                    userProfileListResponse.userProfileResponseList.push(userProfileResponse);
                                }
                                resolve(userProfileListResponse);
                            }
                        });
                    }
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}
