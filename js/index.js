// name: "Artem",
// name - ключ
// "Artem" - значення

const name = "Artem";
const dress = ["Портфель", "Курточка", "ручка", "зошит"];
const gadgets = ["phone", "tablet"];

const student = {
  dress: ["Портфель", "Курточка", "ручка", "зошит"],
  friends: ["friend1", "friend2", "friend3"],
  gadgets: ["phone", "tablet"],
  money: "20Є",
  name: "Artem",
  location: {
    lon: "Широта",
    let: " Довгота",
  },
  sleepOnLessons(lesson) {
    if (lesson) {
      console.log("Я сплю");
    } else {
      console.log("Сплю дома");
    }
  },
  makeMoney(money) {
    student.money = student.money + money;
  },
  plusFriend(newFriend) {
    student.friends.push(newFriend);
  },
  isBlocked: true,
};

student.plusFriend("Petro");

console.log(student);

student.name = "Anton";

console.log(student);

const objKey = Object.keys(student);

const objValues = Object.values(student);

const objEntries = Object.entries(student);
console.log(objKey);
console.log(objValues);
console.log(objEntries);

console.log(student);
delete student.isBlocked;

console.log(student);

student.lastName = "Groshikov";

console.log(student.lastName);
