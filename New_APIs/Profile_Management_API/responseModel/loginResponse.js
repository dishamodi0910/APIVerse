class LoginResponse{
        constructor(message,id,name,bio,imageUrl,phoneNumber,email){
        this.message=message;    
        this.userId=id;    
        this.name=name;
        this.bio=bio;
        this.imageUrl=imageUrl;
        this.phoneNumber=phoneNumber;
        this.email=email;      
    }
}
module.exports=LoginResponse;