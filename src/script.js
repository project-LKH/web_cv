const { default: axios } = require("axios");
(async () => {
    const weather = document.getElementById("weather");
    const weatherURL = `https://wttr.in/?format=3&geoip=true`;
    const fetchWeather = async () =>
        await axios.get(weatherURL);

    const { data } = await fetchWeather();
    weather.innerHTML = data
})()