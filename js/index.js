// // // Обʼєкт -  набір властивостей які записуються як ключ: значення

// const student = {
//   dress: ["Портфель", "Курточка", "ручка", "зошит"],
//   friends: ["friend1", "friend2", "friend3"],
//   gadgets: ["phone", "tablet"],
//   money: "20Є",
//   name: "Artem",
//   location: {
//     lon: "Широта",
//     let: " Довгота",
//   },
//   sleepOnLessons(lesson) {
//     if (lesson) {
//       console.log("Я сплю");
//     } else {
//       console.log("Сплю дома");
//     }
//   },
//   makeMoney(money) {
//     student.money = student.money + money;
//   },
//   plusFriend(newFriend) {
//     student.friends.push(newFriend);
//   },
//   isBlocked: true,
// };
// for (const key in student) {
//   console.log(student[key]);
// }

// student.mood = "happy";

// // const keys = Object.keys(student);
// // console.log(keys);
// // const values = Object.values(student);
// // console.log(values);
// // const entries = Object.entries(student);
// // console.log(entries);

// const checks = [100, 400, 100000, 5000, 3000];

// // ... - spread - розпилення

// console.log(...checks);
// console.log(...student);

// const maxCheck = Math.max(...checks);
// console.log(maxCheck);

const allProdcuts = [
  { product: "sandwich", price: 20, count: 1 },
  { product: "milk", price: 55, count: 2 },
  { product: "butter", price: 80, count: 3 },
  { product: "", price: 0, count: 0 },
];
function calculateTotalPrice(allProdcuts, productName) {
  for (const product of allProdcuts) {
    const {
      // Якщо ключі повторюються за назвою, ви можете їх переназивати(:)
      product: name,
      price,
      count,
    } = product; //деструктуризація (розбірка обʼєкту)
    console.log(name);
    console.log(name);
    if (product === productName) {
      return price * count;
    }
  }
  return 0;
}
console.log(calculateTotalPrice(allProdcuts, "butter"));

const user = {
  name: "Artem",
  location: {
    latitude: 75.8572384,
    longitude: 79.8848923,
  },
};
// secondName = "Faust" - значення за замовчуванням
const { secondName = "Faust" } = user;

console.log(secondName);

const {
  location: { latitude, longitude },
} = user;

console.log(user.location.latitude, user.location.longitude);
console.log(latitude, longitude);
