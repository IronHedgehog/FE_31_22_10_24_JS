// const img = document.createElement("img"); // DOM-вузол(тег)

// const list = document.querySelector("#list");
// img.src = "https://placehold.co/600x400";
// img.alt = "Картинка заповнювач";
// img.classList.add("img");

// const firstLI = list.firstElementChild;

// firstLI.append(img);
// console.log(img);

// const card = `<ul>
//     <li>
//       <a href="">asdas</a>
//     </li>
//     <li>
//       <a href="">qwe</a>
//     </li>
//     <li>
//       <a href="">zxc</a>
//     </li>
//     <li>
//       <a href="">asd</a>
//     </li>
//   </ul >`;

// // firstLI.innerHTML = card;

// document.body.innerHTML = card;

const heroes = ["Batman", "Spider-Man", "Iron Man", "Hulk"];

// Знайти елемент або багато елементів з якими ми будемо працювати
// для пошуку коли щось одне берем querySelector ,якщо багато querySelectorALL

const categories = document.querySelectorAll("#toys > .category");

console.log(categories);

console.log(`В нашому магазині ${categories.length} категорії товарів`);

const count = [...categories].map((category) => {
  const countItems = category.querySelectorAll("ul > li");

  console.log(countItems.length);
});

console.log(count);

const img123 = [
  { name: "item-1", img: "https://placehold.co/600x400" },
  { name: "item-2", img: "https://placehold.co/600x400" },
  { name: "item-3", img: "https://placehold.co/600x400" },
];

const imgs = document.querySelector(".imgs");

imgs.style.display = "flex";
console.log(imgs);

// const body = document.body;
console.log("asd");

const markup = img123
  .map(
    ({ name, img }) => `
 <li class="img">
      <a href="#">
        <img class="img-img" src="${img}" alt="${name}" />
      </a>
    </li>
`,
  )
  .join("");

console.log(markup);

imgs.insertAdjacentHTML("beforeend", markup);
