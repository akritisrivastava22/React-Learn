let data; 

const inputbox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const weatherStatus = document.getElementById("weatherStatus");
const logoImage = document.getElementById("logoImage");

const getData = async (event) => {
    event.preventDefault();
    if(!inputbox.value){
        alert("Please enter a city name");
    }
    const city = inputbox.value;
    
    const fetchDate = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5b3906d2b1fa4d7082460833232203&q=${city}`
        );
    
        const orgData = await fetchDate.json();
        data = orgData;
        console.log(data);

countryName.innerHTML = data.location.country;
stateName.innerHTML = data.location.region;
cityName.innerHTML = data.location.name;
humidity.innerHTML = data.current.humidity;
windSpeed.innerHTML = data.current.wind_kph;
temprature.innerHTML = data.current.temp_c;


weatherStatus.innerHTML = data.current.condition.text;
logoImage.src = data.current.condition.icon;

};




