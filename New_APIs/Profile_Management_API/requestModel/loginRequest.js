class LoginRequest{
    constructor(body){
        this.email=body.email;
        this.password=body.password;
    }
}
module.exports=LoginRequest;