const scrollNormal = document.querySelector(".vanilla");
const scrollThrottled = document.querySelector(".throttled");
const scrollDebounce = document.querySelector(".trailing");

let counterVanila = 0;
let counterThtrotled = 0;
let scrollDebounced = 0;

const scrollHandlerVanila = (e) => {
  scrollNormal.textContent = counterVanila;
  counterVanila++;
};
const scrollHandlerThrotled = (e) => {
  scrollThrottled.textContent = counterThtrotled;
  counterThtrotled++;
};

const scrollHandlerDebounce = (e) => {
  scrollDebounce.textContent = scrollDebounced;
  scrollDebounced++;
};

document.addEventListener("scroll", scrollHandlerVanila);

document.addEventListener("scroll", _.throttle(scrollHandlerThrotled, 300));

document.addEventListener("scroll", _.debounce(scrollHandlerDebounce, 300));
