class UserProfileListResponse{
    
    constructor() {
        this.userProfileResponseList = [];
    }

    addInnerPojo(userProfileResponse) {
        this.userProfileResponseList.push(userProfileResponse);
    }
}
module.exports=UserProfileListResponse;