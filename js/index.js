const img = document.createElement("img"); // DOM-вузол(тег)

const list = document.querySelector("#list");
img.src = "https://placehold.co/600x400";
img.alt = "Картинка заповнювач";
img.classList.add("img");

const firstLI = list.firstElementChild;

firstLI.append(img);
console.log(img);

// const card = '<ul>
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
//   </ul >'

firstLI.innerHTML = '<a class="link" href="https://www.google.com">GOOGLE</a>';

firstLI.innerHTML = card;
