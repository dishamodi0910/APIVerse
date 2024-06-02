class CheckoutProfileResponse{
    constructor(name,bio,imageUrl,phoneNumber,email,password,profileType,role){
        this.name=name;
        this.bio=bio;
        this.imageUrl=imageUrl;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.password=password;
        this.profileType=profileType;
        this.role=role;
    }
}
module.exports=CheckoutProfileResponse;