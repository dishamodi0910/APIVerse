
function fun(){
    let temp = fetch('https://random.imagecdn.app/v1/image?category=historicalplace&format=json')
    temp.then(res=>res.json())
    .then(res=>{document.getElementById("img").src = res.url})
}