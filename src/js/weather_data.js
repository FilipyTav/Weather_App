// Everything related to the weather info, which is just the data received
const Weather = (function () {
    const fetch_api = async (location = "London", units = "metric") => {
        // Gets the response and converts it to json format
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=${units}`,
            { mode: "cors" }
        );

        const weather_data = await response.json();
        return weather_data;
    };

    return {
        fetch_api,
    };
})();

export { Weather };
