console.log(true && true && "ВАУ ЦЕ ПРАВДА"); // false
console.log("object" || (1 && 0)); //

// "object"; -- true
// ||
//  1 && 0; -- false

// console.log("" || "kivi" || ("mango" && !0));

// console.log("" || "kivi");
// console.log("kivi" || );
// console.log("mango" && !0);

let goWalk = false;

// const dish = confirm("Чи ти помив посуд");

// const doHomework = confirm("Чи ти виконав домашнє завдання");

// if (dish && doHomework) {
//   goWalk = true;
// }
// Якщо інакше
if (goWalk === true) {
  console.log("Гулять");
} else {
  console.log("Гуляти не ідем");
}

const cost = 500;

if (cost <= 299) {
  console.log("Підписка стандартна");
} else if (cost >= 1000) {
  console.log("Максимальна");
} else if (cost >= 300) {
  console.log("Medium");
} else {
  console.log(" У нас немає такого дорогого пакету бери інший");
}
