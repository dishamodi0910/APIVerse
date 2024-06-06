module.exports={
    bodyCheckMiddleWare:function(request,response,next){
        const {body} = request;
        if(!body){
            return response.status(400).send({msg:"text field in the data body is required"});
        }else{
            const text = body.text;
            if(!(typeof text == "string") || text.length==0){
                return response.status(400).send({msg:"text field contains value of invalid type or is zero character long"});
            }
        }
        next();
    }
}