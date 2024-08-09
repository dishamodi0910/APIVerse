const API_KEY = '233ee7523c96a40605e5ad29972a5e45';

const searchTemperature = () => {
    const city = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    //&units=matrics dile temperature ta degree ta pabo
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = city => {
    console.log(city);
    setInnerText('city', city.name);
    setInnerText('temp', city.main.temp);
    setInnerText('weather', city.weather[0].main);
    // setInnerText('weather',city.)
    //set weather icon
    const url = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
