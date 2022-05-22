import "../css/weather.css";
import { DOM_el } from "./DOM_elements";
import { Weather } from "./weather_data";

const init = () => {
    Weather.fetch_api();
};

init();
