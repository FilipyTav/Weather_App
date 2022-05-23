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

    DOM_el.name.textContent = weather_data.name;

    DOM_el.main_info.textContent = weather_data.weather[0].main;

    DOM_el.weather_icon.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;

    DOM_el.temperature.textContent = `${weather_data.main.temp} ${units_temp}`;

    DOM_el.feels_like.textContent = `Feels like ${weather_data.main.feels_like} ${units_temp}`;

    DOM_el.humidity.textContent = `Humidity: ${weather_data.main.humidity}%`;

    DOM_el.min_temp.textContent = `Minimum of ${weather_data.main.temp_min} ${units_temp}`;

    DOM_el.max_temp.textContent = `Maximum of ${weather_data.main.temp_max} ${units_temp}`;

    // Capitalizes the first letter of each word in a string
    const description = weather_data.weather[0].description
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

    DOM_el.description.textContent = description;

    DOM_el.pressure.textContent = `Pressure: ${weather_data.main.pressure} hPa`;

    DOM_el.wind_speed.textContent = `Wind speed: ${weather_data.wind.speed} ${units_speed}`;
};

export { render_info };
