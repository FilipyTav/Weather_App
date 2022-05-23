const DOM_el = (function () {
    const main_container = document.querySelector(".main_container");

    const weather_info = document.querySelector(".weather_info");

    const name = document.querySelector(".name");
    const main_info = document.querySelector(".main_info");
    const temperature = document.querySelector(".temperature");
    const feels_like = document.querySelector(".feels_like");
    const humidity = document.querySelector(".humidity");
    const min_max = document.querySelector(".min_max");
    const min_temp = document.querySelector(".min_temp");
    const max_temp = document.querySelector(".max_temp");
    const description = document.querySelector(".description");

    const extra_info = document.querySelector(".extra_info");

    const pressure = document.querySelector(".pressure");
    const wind_speed = document.querySelector(".wind_speed");

    return {
        main_container,
        weather_info,
        extra_info,
        name,
        main_info,
        temperature,
        feels_like,
        humidity,
        min_max,
        min_temp,
        max_temp,
        description,
        pressure,
        wind_speed,
    };
})();

export { DOM_el };
