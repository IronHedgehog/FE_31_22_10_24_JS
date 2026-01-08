const names = [];
// Додати у кінець
names.push("al;sdd;asd");

names.push("НЕ РОБИТИ");

console.log(names);
// Видалити з кінця
names.pop();

console.log(names);

// shift, unshift
// Додає на початок
names.unshift("qwe");

console.log(names);
// Видаляє з початку
names.shift();

console.log(names);

const toDoList = [];

let attempts = 10;

// while (attempts > 0) {
//   const todo = prompt("Що робить будемо?");

//   toDoList.push(todo);
//   attempts -= 1;
//   console.log(toDoList);
// }

// console.log(toDoList);

// split join

const words = "I love JS";

const wordsSplit = words.split(" ");

console.log(wordsSplit);

const wordsJoin = wordsSplit.join(" ");

console.log(wordsJoin);

// slice

const numbers = [1, 23, 4, 5, 6];

const start = numbers.indexOf(24);

if (start > 0) {
  console.log(numbers.slice(start, 2));
}

const numbers1 = [10, 20, 30, 40, 50];

const start1 = numbers1.indexOf(40);
console.log(start1);
console.log("Splice", numbers1.splice(start1, 5, 60, 70, 80, 90, 100));

console.log("Масив", numbers1);

const numbers3 = numbers.concat(numbers1);
console.log(numbers3);

console.log("SLICE COPY", numbers.slice());

console.log("ARRAY", numbers);
