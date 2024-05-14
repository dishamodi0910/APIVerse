const validate = require('../services/validateProfileService');

exports.validateLeetcode = async(req,res)=>{
    try {
       const {username} = req.body; 
       const result = await validate.leetcode(username);
       if(result){
        res.status(200).json({status:true,message:`username ${username}  found`});
       }else res.status(404).json({status:false,message:`username ${username}  not found`});
       
    } catch (error) {
       res.status(404).json({status:false,message:error.message});
    }
}

exports.validateCodechef = async(req,res)=>{
    try {
       const {username} = req.body; 
       const result =await validate.codechef(username);
       if(result){
        res.status(200).json({status:true,message:`username ${username}  found`});
       }else res.status(404).json({status:false,message:`username ${username}  not found`});
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}

exports.validateCodefoces = async(req,res)=>{
    try {
       const {username} = req.body; 
       const result =await validate.codeforces(username);
       if(result){
        res.status(200).json({status:true,message:`username ${username}  found`});
       }else res.status(404).json({status:false,message:`username ${username}  not found`});
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}