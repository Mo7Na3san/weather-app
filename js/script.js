const wKey = "ff9571ab8665f57d26bdbe5ed395b1fb";
let searchInp = document.getElementById("searchInp");
let searchBtn = document.getElementById("searchBtn");
let tempreturePart = document.getElementById("tempreturePart");
async function howIsTheWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInp.value}&appid=${wKey}&units=metric`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(console.log("Not connected"));
  } else {
    console.log("Thins going fine");
  }
  const data = await response.json();
  console.log(data);
  // get the data of old input and clear
  const tempreturePart = document.getElementById("tempreturePart");
  tempreturePart.innerHTML = "";
  const temNum = document.getElementById("temNum");
  const cityName = document.getElementById("cityName");
  temNum.innerHTML = "";
  cityName.innerHTML = "";

  //update the icon
  const weatherStatus = document.createElement("img");
  weatherStatus.src = "";
  weatherStatus.src = `media/${data.weather[0].main}.png`;
  weatherStatus.classList.add("weatherStatus");
  tempreturePart.appendChild(weatherStatus);
  //update the tempreture
  temNum.innerHTML = data.main.temp;
  //update the name
  cityName.innerHTML = data.name;
  //update humidity & wind speed
  let windSpeed = document.getElementById("windSpeed");
  let humidity = document.getElementById("humidity");
  windSpeed.innerHTML = "";
  humidity.innerHTML = "";
  humidity.innerHTML = data.main.humidity;
  windSpeed.innerHTML = data.wind.speed;
}
window.onload = howIsTheWeather;

searchBtn.addEventListener("click", function () {
  howIsTheWeather();
});

//==============
