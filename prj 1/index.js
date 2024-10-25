const API_KEY = "7d6d1bb2ac6f5ebfed1165bbbfedf96d";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const citySearch = document.getElementById("cityname");
const searchCityBtn=document.getElementById("searchbtn");

const weatherIcon=document.getElementsByClassName("weather-icon")[0];

async function checkWeather(city) {

  const res = await fetch(API_URL + city + `&appid=${API_KEY}`);
  
  var data = await res.json();

  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  weatherIcon.src=`./images/${data.weather[0].main.toLowerCase()}.png`;

  document.querySelector(".weather").style.display="block";
   
}

searchCityBtn.addEventListener("click", ()=>{
    console.log("hello");
    
    checkWeather(citySearch.value);
})


