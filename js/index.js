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

let processes = true;

while (processes) {
  let userChoice = prompt("Введіть назву напою(Кава, чай, сік)");

  if (userChoice == "off") {
    processes = false;
  } else {
    console.log(" Ось ваше замовлення");
    processes = false;
    // break;
  }

  // processes = false;
}
