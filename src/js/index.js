import "../styles/weather.scss";
import { DOM_el } from "./DOM_elements";
import { render_info } from "./render_weather_data";

// Initializes the site
const init = () => {
    render_info();

    DOM_el.search_btn.addEventListener("click", () => {
        render_info(DOM_el.search_input.value.trim());
        DOM_el.search_input.value = "";
    });
};

init();
