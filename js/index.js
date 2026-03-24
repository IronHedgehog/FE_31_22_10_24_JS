// let pirat = {
//   name: "jex",
//   pet: "papygai",
//   oryjue: "mech",
//   money: 0,
//   pograbyvanie: function () {
//     this.money += 100;
//   },
// };

// class Pirate {
//   constructor(name, pet, oryjue) {
//     this.name = name;
//     this.pet = pet;
//     this.oryjue = oryjue;
//     this.money = 0;
//   }

//   rob(scarb) {
//     console.log("Do pirate work ...." + this.name);
//     this.money += scarb;
//   }
// }

// const Bob = new Pirate("BoB", "monkey", "sword");
// const John = new Pirate("John", "sneak", "pistol");

// John.rob(Math.floor(1 + Math.random() * 100 - 1));

// // .toFixed(2)

// // console.log((Math.random() * 100) / 1000);

// console.log(John);
// // extends - Наслідувати
// class Captain extends Pirate {
//   constructor(name, pet, weapon, ship) {
//     // super - БАТЬКІВСЬКИЙ КОНСТРУКТОР
//     super(name, pet, weapon);
//     this.ship = ship;
//   }

//   command() {}
// }

// const captainOFtheShip = new Captain("Jack", "monkey", "gun", "ship");

// console.log(captainOFtheShip.rob(Math.floor(1 + Math.random() * 100 - 1)));
// console.log(captainOFtheShip);

class Backpack {
  constructor(books = []) {
    // this; - посилання на конкретний рюкзак
    this.books = books;
  }

  getBooks() {
    return this.books;
  }

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(title) {
    const deleteIndex = this.books.indexOf(title);

    if (deleteIndex !== -1) {
      this.books.splice(deleteIndex, 1);
    }
  }
}

const newBackpack = new Backpack(["Biology", "Math", "Chemistry"]);

console.log(newBackpack.getBooks());
console.log(newBackpack.addBook("English"));
console.log(newBackpack.getBooks());
console.log(newBackpack.deleteBook("Chemistry"));
console.log(newBackpack.getBooks());
