module.exports={
    encryptBodyCheckMiddleware:function(request,response,next){
        const {body} = request;
        if(!body){
            return response.status(400).send({msg:"Data body containg text field is required"});
        }else{
            const text = body.text;
            const encryptKey = body.encryptKey;
            if(!text){
                return response.status(400).send({msg:"text field is required"});
            }else if(!(typeof text == "string")|| text===""){
                return response.status(400).send({msg:"text is invalid type or empty"});
            }
            if(!encryptKey){
                return response.status(400).send({msg:"encryptKey field is required"});
            }else if(!(typeof encryptKey == "string")|| encryptKey===""){
                return response.status(400).send({msg:"encryptKey is invalid type or empty"});
            }
        }
        next();
    },

    decryptBodyCheckMiddleware:function(request,response,next){
        const {body} = request;
        if(!body){
            return response.status(400).send({msg:"Data body containg text field is required"});
        }else{
            const text = body.text;
            const decryptKey = body.decryptKey;
            const password = body.password;
            if(!text){
                return response.status(400).send({msg:"text field is required"});
            }else if(!(typeof text == "string")|| text===""){
                return response.status(400).send({msg:"text is invalid type or empty"});
            }
            if(!decryptKey){
                return response.status(400).send({msg:"decryptKey field is required"});
            }else if(!(typeof decryptKey == "string")|| decryptKey===""){
                return response.status(400).send({msg:"decryptKey is invalid type or empty"});
            }
            if(!password){
                return response.status(400).send({msg:"password field is required"});
            }else if(!(typeof password == "string")|| password===""){
                return response.status(400).send({msg:"password is invalid type or empty"});
            }
        }
        next();
    },

    keysGenerateBodyCheckMiddleware:function(request,response,next){
        const {body} = request;
        if(!body){
            return response.status(400).send({msg:"Data body containing name, email and password fields are required"});
        }else{
            const name = body.name;
            const email = body.email;
            const password = body.password;
            if(!name){
                return response.status(400).send({msg:"name field is required"});
            }
            else if(!(typeof name=="string") || (name.length==0)){
                return response.status(400).send({msg:"name field is invalid type or empty"});
            }
            if(!email){
                return response.status(400).send({msg:"email field is required"});
            }
            else if(!(typeof email == "string") || email===""){
                return response.status(400).send({msg:"email field is invalid type or empty"});
            }
            if(!password){
                return response.status(400).send({msg:"password field is required"});
            }
            else if(!(typeof password == "string") || password.length<9){
                return response.status(400).send({msg:"password is invalid type or less than 9 characters long"});
            }
        }
        next();
    }
}