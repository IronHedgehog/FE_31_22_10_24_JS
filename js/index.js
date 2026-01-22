// // function - ключове слово
// //add - назва(яка відповідає дійсності)
// // () - ?
// // {} - тіло функції (сюди пишемо усе що функція має зробити)
// function add(number1 = 0, number2 = 0) {
//   if (number1 === 0 && number2 === 0) return 0;
//   let result = 0;
//   // Повертає результат вашої функції
//   // return - повертає результат функції та зупиняє функцію

//   result = number1 + number2;

//   // console.log(result);
//   return result;
// }

// // Щоб функція відпрацювала її треба викликати
// // 1. звернутись по імені
// // 2 поставити круглі дужки
// add(10, 15); // виклик дії
// const s2 = add(15, 25);
// console.log(s2);
// const result = add(20, 30);

// console.log(result);

// // foo();
// // (milk, azot, vafelStakan); - Параметри нашої функції без яких морозиво зробити неможливо
// function makeIceCream(milk, azot, vafelStakan) {
//   if (!milk || !azot || vafelStakan) {
//     return "Ми не можемо зробити морозиво";
//   }

//   console.log("Ми зробили морозиво з " + milk + " " + azot, +" " + vafelStakan);
// }

// // В середині круглиг дужок, Ми вписуємо аргументи.
// makeIceCream("milk", "azot", "vafelStakan");

// function greetings(userName, helloUser) {
//   helloUser(userName);
// }

// function helloUser(userName) {
//   const systemLanguage = "en";
//   if (systemLanguage === "uk") {
//     console.log(`Привіт, ${userName}`);
//   } else if (systemLanguage === "en") {
//     console.log(`Hello, ${userName}`);
//   } else {
//     console.log(`Інша мова,  ${userName}`);
//   }
// }

// greetings("Artem", helloUser);

// function add(a, b) {
//   return a + b;
// }

// const sum = add(5, 5);
// console.log(sum);
// (a, b) - параметри;

const number1 = parseFloat(prompt("Число 1"));
const number2 = parseFloat(prompt("Число 2"));

// =>
//  => - в стрілку вбудований ретурн

//

const add = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    // 1) Завершити виконаня функції
    return new Error("Напиши число");
  }

  return a + b;
};

console.log(add(number1, number2));
