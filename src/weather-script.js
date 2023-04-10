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
  let temperature = Math.round(response.data.main.temp);
  let searchTemperature = document.querySelector("#today-temp");
  searchTemperature.innerHTML = temperature;
  let newCity = document.querySelector("#weather-city");
  newCity.innerHTML = response.data.name;
}

function search(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search-input");
  let city = citySearch.value;
  let apiKey = "7059cb165caa3316bff682d263a01b1e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

/*function convertCelsiusTemp(event) {
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
