class UpdateImageRequest{
    constructor(body){
       this.id=body.id;
       this.imageUrl=body.imageUrl;
       this.imageBase64=body.imageBase64;
    }
}
module.exports=UpdateImageRequest;