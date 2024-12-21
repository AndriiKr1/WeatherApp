const apiKey = "5a95e683f735185d2f28013fa349e69e";

const locationInput = document.getElementById("locationInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherContainer = document.getElementById("weatherContainer");
// fhdsfsdasdadada
//https://api.openweathermap.org/data/2.5/weather?q={locationInput}&appid={apiKey}&units=metric

getWeatherBtn.onclick = () => {
    const location = locationInput.value.trim();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=ru`)
        .then(res => res.json())
        .then(({ name, main: { temp, feels_like, humidity }, weather, wind: { speed } }) => {
             weatherContainer.innerHTML = `
                <h2>${name}</h2>
                <p>Температура: ${temp}°C</p>
                <p>${weather[0].description}</p>
                <p>Скорость ветра: ${speed} м/с</p>
                <p>Ощущается как : ${feels_like}</p>
                <p>Влажность: ${humidity} %</p>
            `;
}) }