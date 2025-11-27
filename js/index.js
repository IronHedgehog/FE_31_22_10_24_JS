const greetings = "Hello";

const myString = "Artem";
const string = "a";
const string1 = `a`;
console.log(myString.length);

console.log(greetings + " " + myString); // конкатинація = додавання рядків
console.log(`${greetings} ${myString}`); // інтерполяція

const test = "test";

console.log(test.toUpperCase());
console.log(test.toLowerCase());

const spamWord = "sale";
const message = "sAle";

if (spamWord.toLowerCase() == message.toLowerCase()) {
  console.log("ЦЕ спам");
}
