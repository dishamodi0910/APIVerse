const getDetails = require('../services/getDetailsService');
const validate = require('../services/validateProfileService');
exports.getLeetcode = async(req,res)=>{
    try {
        const {username} = req.body;
        if(await validate.leetcode(username)){
             const result = await getDetails.addLeetcode(username);
             res.status(200).json({status:true,message:result});
        }else{
            res.status(404).json({status:false,message:`username ${username} not found`});
        }
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}

exports.getCodechef = async(req,res)=>{
    try {
        const {username} = req.body;
        if(await validate.codechef(username)){
            const result = await  getDetails.addCodechef(username);
            res.status(200).json({status:true,message:result});
        }else{
            res.status(404).json({status:false,message:`username ${username} not found`});
        }
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}

exports.getCodeforces = async(req,res)=>{
    try {
        const {username} = req.body;
        if(await validate.codeforces(username)){
            const result = await getDetails.addCodeforces(username);
            res.status(200).json({status:true,message:result});
        }else{
            res.status(404).json({status:false,message:`username ${username} not found`});
        }
    } catch (error) {
        res.status(404).json({status:false,message:error.message});
    }
}