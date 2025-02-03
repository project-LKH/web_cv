const { default: axios } = require("axios");
(async () => {

    const weather = document.getElementById("weather");

    navigator.geolocation.getCurrentPosition(async (pos) => {
        const weatherURL = `https://wttr.in/${pos.coords.latitude},${pos.coords.longitude}?format=2`;
        const locationURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;

        const fetchWeather = async () => await axios.get(weatherURL);
        const fetchReadableLocation = async () => await axios.get(locationURL);

        const { data } = await fetchWeather();
        const location = await fetchReadableLocation().then(res => res.data)
        weather.innerHTML = `${location.address.country}, ${location.address.county}: 
            ${data}`
    });

    await navigator.permissions.query({ name: 'geolocation' }).then(permissions => {
        if (permissions.state === "denied") {
            weather.innerHTML = `Location permissions not granted`
        }
    })
})()




