import "../css/weather.css";
import { DOM_el } from "./DOM_elements";
import { render_info } from "./render_weather_data";
import { Weather } from "./weather_data";

const init = () => {
    // Weather.fetch_api();
    render_info();
};

init();
