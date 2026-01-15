// function - ключове слово
//add - назва(яка відповідає дійсності)
// () - ?
// {} - тіло функції (сюди пишемо усе що функція має зробити)
function add(number1 = 0, number2 = 0) {
  if (number1 === 0 && number2 === 0) return 0;
  let result = 0;
  // Повертає результат вашої функції
  // return - повертає результат функції та зупиняє функцію

  result = number1 + number2;

  // console.log(result);
  return result;
}

// Щоб функція відпрацювала її треба викликати
// 1. звернутись по імені
// 2 поставити круглі дужки
add(10, 15); // виклик дії
const s2 = add(15, 25);
console.log(s2);
const result = add(20, 30);

console.log(result);
