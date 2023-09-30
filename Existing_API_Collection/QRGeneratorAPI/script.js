function fun(){
    let temp = document.getElementById("in").value
    document.getElementById("img").src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+temp
}