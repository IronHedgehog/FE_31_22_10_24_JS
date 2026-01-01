const students = ["Oleksii", "Єгор", "Стас"];

const student1 = "Oleksii";

const student2 = "Єгор";

const student3 = "Стас";

// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// console.log(students.length);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// const numbers = [];

// for (let index = 0; index <= 99; index++) {
//   // numbers[index];
//   console.log(numbers[index]);
//   numbers[index] = index;
//   // console.log(numbers[index]);
// }

// const players = ["Artem", "Petro", "Artem"];

// const player = "Petro";

// for (let i = 0; i < players.length; i++) {
//   if (player === players[i]) {
//     console.log("Такий гравець вже є");
//     break;
//   }
//   console.log("Ласкаво просимо");
// }

const nums = [30, 15, 370, 2000, 324];
// console.log(Math.max(...nums));

let bigInt = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > bigInt) {
    bigInt = nums[i];
  }
}

console.log(bigInt);
