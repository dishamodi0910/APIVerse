module.exports={
    searchByNameMiddleware:function(request,response,next){
        const {query} = request;
        if(!query){
            return response.status(400).send({msg:"name field query is required"});
        }else{
            const name = query.name;
            console.log(name);
            if(!(typeof name == "string")|| name.length==0){
                return response.status(400).send({msg:"Invalid field value"});
            }
            query.name = name.toLocaleLowerCase().trim().replaceAll(" ","");
        }
        next();
    },
    searchByManufacturerMiddleware:function(request,response,next){
        const {query} = request;
        if(!query){
            return response.status(400).send({msg:"manufacturer field query is required"});
        }else{
            const manufacturer = query.manufacturer;
            console.log(manufacturer);
            if(!(typeof manufacturer == "string")|| manufacturer.length==0){
                return response.status(400).send({msg:"Invalid field value"});
            }
            query.manufacturer = manufacturer.toLocaleLowerCase().trim().replaceAll(" ","");
        }
        next();
    },
    searchByPriceMiddleware:function(request,response,next){
        const {query} = request;
        if(!query){
            return response.status(400).send({msg:"price field query is required"});
        }else{
            const price = query.price;
            console.log(price);
            if(!(typeof price == "string")|| price.length==0){
                return response.status(400).send({msg:"Invalid field value"});
            }
        }
        next();
    }
}