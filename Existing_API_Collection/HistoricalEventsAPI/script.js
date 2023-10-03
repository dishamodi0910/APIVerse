
function fun(){
var i = Math.floor(Math.random() * 9+1)
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/historicalevents?month=0'+i,
    headers: { 'X-Api-Key': '9SAecf5e8Llay9jfLxJbOw==Ic2yXmTIbcm2VldF'},
    contentType: 'application/json',
    success: function(result) {
        document.getElementById("desc").innerHTML = result[i].event
        document.getElementById("year").innerHTML = "Year: "+result[i].year
        document.getElementById("dm").innerHTML = "Day: "+result[i].day+" Month: "+result[i].month
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

fun1()
}

function fun1(){

    let temp = fetch('https://random.imagecdn.app/v1/image?category=historicalplace&format=json')
    temp.then(res=>res.json())
    .then(res=>{document.getElementById("img").src = res.url

      var x = window.matchMedia("(min-width: 800px)")
      myFunction(x) // Call listener function at run time
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("img").height = 300
    } else {
        document.getElementById("img").height = 200
    }
  }
  
}