class UserProfileResponse{
    constructor(name,imageUrl,bio,phoneNumber,email){
        this.name=name;
        this.imageUrl=imageUrl;
        this.bio=bio;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
}
module.exports=UserProfileResponse;