// BOM - browser object module

(navigator.geolocation.getCurrentPosition(
  (location) => console.log(location),
  (err) => console.error(`Error ${err.code}: ${err.message}`),
),
  // DOM - document object module

  console.log(document));

const petro = document.querySelector(".petro");

const user = {
  name: "Artem",
};

petro.textContent = user.name;
petro.style.backgroundColor = "#d59214";

const input = document.querySelector(".input");

const inputValue = input.value;
console.log(inputValue);

if (inputValue.length < 7) {
  const error = document.querySelector(".error");
  error.textContent = "Нікнейм має бути більше 7 символів";
  error.style.color = "#f00";
  error.style.fontSize = "30px";
}
