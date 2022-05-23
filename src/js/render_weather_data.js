import { DOM_el } from "./DOM_elements";
import { Weather } from "./weather_data";

const render_info = async (city, units = "metric") => {
    const weather_data = await Weather.fetch_api(city, units);

    let units_temp = "°C";
    let units_speed = "m/s";

    switch (units) {
        case "metric":
            units_temp = "°C";
            units_speed = "m/s";
            break;

        case "imperial":
            units_speed = "mph";
            units_temp = "°F";

        default:
            return;
    }

    const name_el = DOM_el.name;
    name_el.textContent = weather_data.name;

    const main_info_el = DOM_el.main_info;
    main_info_el.textContent = weather_data.weather[0].main;

    const temperature_el = DOM_el.temperature;
    temperature_el.textContent = `${weather_data.main.temp} ${units_temp}`;

    const feels_like_el = DOM_el.feels_like;
    feels_like_el.textContent = `Feels like ${weather_data.main.feels_like} ${units_temp}`;

    const humidity_el = DOM_el.humidity;
    humidity_el.textContent = `Humidity: ${weather_data.main.humidity}%`;

    const min_temp_el = DOM_el.min_temp;
    min_temp_el.textContent = `Minimum of ${weather_data.main.temp_min} ${units_temp}`;

    const max_temp_el = DOM_el.max_temp;
    max_temp_el.textContent = `Maximum of ${weather_data.main.temp_max} ${units_temp}`;

    const description_el = DOM_el.description;
    description_el.textContent = weather_data.weather[0].description;

    const pressure_el = DOM_el.pressure;
    pressure_el.textContent = `Pressure: ${weather_data.main.pressure} hPa`;

    const wind_speed_el = DOM_el.wind_speed;
    wind_speed_el.textContent = `Wind speed: ${weather_data.wind.speed} ${units_speed}`;
};

export { render_info };
