// if ("latte") {
//   console.log("latte");
// } else if (userChoice == "cappuchino") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else if (userChoice == "americano") {
// } else {
//   console.log("Такого не існує");
// }

const userChoice = "";

switch (userChoice) {
  case "espresso":
    console.log("Ура, нарешті");
    break;

  case "latte":
    console.log("latte");
    break;

  case "cappuccino":
    console.log("cappuccino");
    break;

  default:
    console.log("ця кавомашина не вміє робити цей вид кави");
    break;
}

const a = 10; // глобальна область бачення(доступна всюди нище по коду)

// b - телефон
// {} - це кімната(Блок)
// якщо річ у кімнаті - то ззовні її не видно
// {} - блочна область бачення
if (true) {
  const b = 15;
  console.log(b);
}

console.log(a); //10
//console.log(b); // error

// var - variable

if (true) {
  var c = 50;
}

console.log(c);
c = 100;
console.log(c);

const role = "admin";
switch (role) {
  case "admin":
    console.log("Повний доступ ");
    const key = "QWERTY";
    break;
}

console.log(key); // error
