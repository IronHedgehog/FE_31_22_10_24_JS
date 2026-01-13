// function - ключове слово
//add - назва(яка відповідає дійсності)
// () - ?
// {} - тіло функції (сюди пишемо усе що функція має зробити)
function add(number1 = 0, number2 = 0) {
  console.log(number1, number2);
  console.log(number1 + number2);
}

console.log(5);
console.log(6);
console.log(7);
// Щоб функція відпрацювала її треба викликати
// 1. звернутись по імені
// 2 поставити круглі дужки
add(10, 15);
