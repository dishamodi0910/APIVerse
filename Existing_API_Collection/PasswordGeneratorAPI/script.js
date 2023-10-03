function fun(){
    var length = '10'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + length,
    headers: { 'X-Api-Key': '9SAecf5e8Llay9jfLxJbOw==Ic2yXmTIbcm2VldF'},
    contentType: 'application/json',
    success: function(result) {
        document.getElementById("in").value = result.random_password
        console.log(result.random_password)
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}