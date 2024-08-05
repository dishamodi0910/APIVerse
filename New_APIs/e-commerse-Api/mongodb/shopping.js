const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    category:String,
    productName:String,
    brand:String,
    details:[{
           'color':String,
            "material":String,
              "length": String,
              "display": String,
            }],
    camera:[{
        front:String,
        back:String
    }],
    size:[String],
     battery:String,
     warrenty:String,
    img:[
        {
            url:String,
            caption:String
        },
        {
            url:String,
            caption:String
        }
    ],
    cards:[
        {
            url:String,
            caption:String
        },
        {
            url:String,
            caption:String
        }
    ],
    MRPprize:Number,
    SELLprize:Number,
    stock:String,
})
module.exports=mongoose.model('users',user_schema)
 