import "../css/weather.css";
import { DOM_el } from "./DOM_elements";
import { render_info } from "./render_weather_data";

const init = () => {
    render_info();

    DOM_el.search_btn.addEventListener("click", () => {
        render_info(DOM_el.search_input.value.trim());
        DOM_el.search_input.value = "";
    });
};

init();
