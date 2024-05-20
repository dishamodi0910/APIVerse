const jwt=require('jsonwebtoken')


const verifyToken=(req,res,next)=>{
    const authhead=req.headers.token
    if(authhead){
        const token=authhead;
        console.log(token)
        jwt.verify(token,process.env.jwtsecret,(err,user)=>{
            if(err) res.status(403).json("Token is not valid!");
            req.user=user
            next();
        })
    }
    else{
        res.status(401).json("You have not authenticated")
    }
}

const verifynauth=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}

const verifynadmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            console.log(req.user)
            next();
        }
        else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}


module.exports={verifyToken,verifynauth,verifynadmin}