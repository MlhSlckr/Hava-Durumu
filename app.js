const url = "https://api.openweathermap.org/data/2.5/";
const key = "2666b0aede646c3e6caea18126b1e339";
const input = document.querySelector(".input");
const content = document.querySelector(".content");

const setQuery = (e) => {
  if (e.keyCode == "13") {
    get(input.value);
  }
};

function get(cityName) {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
}

const displayResult = (result) => {
  content.innerHTML += `<h3 class="city">${result.name}, ${
    result.sys.country
  }</h3>
  <p class="degree">${Math.floor(result.main.temp)}°C</p>
  <p class="desc">${result.weather[0].description}</p>`;
};

input.addEventListener("keypress", setQuery);
