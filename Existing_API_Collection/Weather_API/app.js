const express = require("express");                                  //server nai chlega,get, post method vgera isme
const https = require("https");                                      //server se data request, data transfer with security
const bodyParser = require("body-parser");                           //read data from requested server
const app = express();                                               //function call
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {                                   //root=homepage  homepage pr file send krega index.html  
    res.sendFile(__dirname + "/index.html");


});
app.post("/", function (req, res) {                                  //form me method=post h,form filled to fn(req,res) performed

    const query = req.body.cityName;                                 // take cityname from the form

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=665982ba9621921bae463c48f3430c48&units=metric";
    https.get(url, function (response) {                             //another server se url milega to function(response pr jaega)
        console.log(response.statusCode);                            //logs status code

        response.on("data", function (data) {        //"data" is event listener,emiited when new data is available to read.                
            const weatherData = JSON.parse(data);   //convert data from string to js obj

            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imgurl = " https://openweathermap.org/img/wn/" + icon + "@2x.png";

            const descp = weatherData.weather[0].description;
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees.</h1>");
            res.write("<p>" + descp + "</p>");
            res.write("<img src=" + imgurl + ">");
            res.send();                           //one res.send hona chhiye onliii
        });
    });
}
)









app.listen(3003, function () {
    console.log("server running");
});