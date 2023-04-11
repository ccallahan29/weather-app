let dateNow = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[dateNow.getDay()];

let currentHour = dateNow.getHours();
if (currentHour < "10") {
  currentHour = `0${currentHour}`;
}
let currentMinutes = dateNow.getMinutes();
if (currentMinutes < "10") {
  currentMinutes = `0${currentMinutes}`;
}
let time = document.querySelector("#time");
time.innerHTML = `${currentDay}, ${currentHour}:${currentMinutes}`;

function showTemperature(response) {
  document.querySelector("#weather-city").innerHTML = response.data.name;
  document.querySelector("#today-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

function showLocation(position) {
  let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function findMyLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

function searchCity(city) {
  let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  searchCity(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);

let findMe = document.querySelector("#current-location");
findMe.addEventListener("click", findMyLocation);

/*Might need this in order to convert Celsius and Fahrenheit later
function convertCelsiusTemp(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector("#today-temp");
  celsiusTemp.innerHTML = "5";
}
function convertFahrenheitTemp(event) {
  event.preventDefault();
  let FahrenheitTemp = document.querySelector("#today-temp");
  FahrenheitTemp.innerHTML = "41";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertCelsiusTemp);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertFahrenheitTemp);
*/
