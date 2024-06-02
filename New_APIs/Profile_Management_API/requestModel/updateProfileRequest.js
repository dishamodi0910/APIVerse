class UpdateProfileRequest{
    constructor(body){
        this.id=body.id;
        this.name=body.name;
        this.imageBase64=body.imageBase64;
        this.bio=body.bio;
        this.imageUrl=body.imageUrl;
        this.phoneNumber=body.phoneNumber;
        this.email=body.email;
        this.password=body.password;
    }
}
module.exports=UpdateProfileRequest;