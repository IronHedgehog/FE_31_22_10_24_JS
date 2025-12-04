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

const banWord = "BanWord is here";

console.log(banWord.toLowerCase().includes("banword")); // true

const email = "        asd@gmail.com              ";

console.log(email.trim());

const anyWord = "word";

console.log(anyWord.slice(0, -1));

// replace;

const badWord = "badWord was here";

console.log(badWord.toLowerCase().replace("badword", "goodWord"));

// indexOf

const word = "wordr";
//indexOf - знайти індекс букви у слові
const rIndex = word.toLowerCase().indexOf("r");

console.log(rIndex);
word.slice(rIndex, rIndex + 1);

console.log(word);

const userEmail = "asd@gmail.com";

const dozvil = ".com";

console.log(userEmail.endsWith(dozvil));
// console.log(userEmail.startsWith(dozvil));

const hello = "Hello!";

console.log(hello.indexOf("H"));
