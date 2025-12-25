// let counter = 0;

// counter +=1
// counter++
// counter = counter + 1
// for (counter; counter < 60; counter++) {
//   console.log(counter);
// }

// console.log(counter);

// 1) for - ключове слово
// Круглі дужки складаються з 3-х частин
// 1) перше що є в дужках це лічильник
// 2) Умова роботи циклу
// 3) рух лічильника у потрібну сторону за умовою
// {} - тіло нашого циклу, те що виконується кожного разу
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let number = 7;

// for (number; number <= 70; number += 7) {
//   console.log(number);
// }

// const word = "Hello";

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// let processes = true;

// while (processes) {
//   let userChoice = prompt("Введіть назву напою(Кава, чай, сік)");

//   if (userChoice == "off") {
//     processes = false;
//   } else {
//     console.log(" Ось ваше замовлення");
//     processes = false;
//     // break;
//   }

//   // processes = false;
// }

let energy = 100;
let health = 100;

let strength = 7;
let agility = 5;
let intelligence = 3;

// while -нескінченний
// перестає виконуватись тільки тоді коли умова стає не правдою

// while (energy > 0) {
//   let choice = prompt("Яку дію ви бажаєте виконати? fight/training/chill ");

//   if (choice === "chill") {
//     energy += 10;
//   } else if (choice === "training") {
//     energy -= 10;
//     intelligence += 1;
//     agility += 1;
//     strength += 1;
//     alert(
//       `тренування пройшло успішно, твої скіли підвищено strength = ${strength},agility = ${agility}, intelligence = ${intelligence}, energy = ${energy}`
//     );
//   } else if (choice === "fight") {
//     if (energy < 30 && health < 30) {
//       alert("ресурсів недостатньо, піди відпочинь");
//     }
//     health -= 30;
//     energy -= 30;
//     alert(
//       `Ми відвідали турнір і там щось було. Тепер енергії ${energy} а здоровʼя стіки${health}`
//     );
//   } else {
//     alert("ця функція поки не робе");
//   }
// }

// for - має початок і має кінець

// let i = 5;

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

//  ітерація - одне виконання
for (let counter = 0; counter <= 10; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
    continue;
  }
  console.log(counter);
}
