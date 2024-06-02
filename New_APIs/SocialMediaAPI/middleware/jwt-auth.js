import User from "../models/user.js";
import jwt from "jsonwebtoken";


const verifyJwt = async (req, res, next)=>{
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);
            if(!user){
                return(res.status(404).json({message: "jwt user not found"}));
            }
            req.user = user;
            next();
        }catch(err){
            res.status(401).json({error: "Unauthorized"});
        }
    }
    else{
        return(res.status(401).json({error: "Unauthorized"}));
    }
}

export default verifyJwt;