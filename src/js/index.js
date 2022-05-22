import "../css/weather.css";
import { Weather } from "./weather_data";

const init = () => {
    Weather.fetch_api();
};

init();
