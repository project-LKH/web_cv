const { default: axios } = require("axios");
(async () => {

    const weather = document.getElementById("weather");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const weatherURL = `https://wttr.in/${pos.coords.latitude},${pos.coords.longitude}?format=2`;
            const locationURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;

            const fetchWeather = async () => await axios.get(weatherURL);
            const fetchReadableLocation = async (lat, long) => await axios.get(locationURL);

            const { data } = await fetchWeather();
            const location = await fetchReadableLocation(pos.coords.latitude, pos.coords.longitude).then(res => res.data)
            weather.innerHTML = `${location.address.country}, ${location.address.county}: 
            ${data}`
        });
    } else {
        weather.innerHTML = "Geolocation is not supported by this browser.";
    }
})()




