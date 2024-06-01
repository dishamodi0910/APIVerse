class RegistractionRequest{
    constructor(body){
        this.name=body.name;
        this.imageBase64=body.imageBase64;
        this.bio=body.bio;
        this.imageUrl=body.imageUrl;
        this.phoneNumber=body.phoneNumber;
        this.email=body.email;
        this.password=body.password;
        this.profileType=body.profileType;
        this.role=body.role;
    }
}
module.exports=RegistractionRequest;