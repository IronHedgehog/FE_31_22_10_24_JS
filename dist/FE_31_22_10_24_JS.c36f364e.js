// що таке шаблонізація; ПРоблематика(нашо воно треба?)
// використовувати Handlebars; підключення та використання
// створювати шаблони;
// Поєднати з parcel
// працювати з окремими .hbs файлами;
// використовувати {{}}, #each, #if;
// рендерити великі списки;
const users = [
    {
        name: "Alex",
        age: 20
    },
    {
        name: "Kate",
        age: 15
    },
    {
        name: "John",
        age: 25
    }
]; // createElement;
 // insertAdjesentHtml;
 // innerHtml;
 // append;
 // appendChild;
 // 2 Знайти шаблон
 // const shablon = document.getElementById("template");
 //3 Підготувати шаблон до роботи(Скомпілювати та переробити у рядок)
 // const tempalteMarkup = Handlebars.compile(shablon.innerHTML);
 // console.log(tempalteMarkup);
 // 4 Передати дані у скомпільований шаблон.
 // const html = tempalteMarkup({
 //   name: "Alex",
 //   age: 20,
 // });
 // console.log(html);
 // 5 готову розмітку закинуть на екран куди потрібно
 // document.body.innerHTML = html;
 // const data = {
 //   cars: ["BMW", "AUDI", "Mers"],
 // };
 // const shablonCars = document.querySelector(".cars").innerHTML;
 // console.log(shablonCars);
 // const tempalteMarkupCars = Handlebars.compile(shablonCars);
 // const htmlCars = tempalteMarkupCars(data);
 // console.log(htmlCars);
 // document.body.innerHTML = htmlCars;
 // export const games = [
 //   {
 //     title: "Minecraft",
 //     price: 1200,
 //     genre: "Sandbox",
 //     available: true,
 //     img: "...",
 //   },
 //   {
 //     title: "CS2",
 //     price: 0,
 //     genre: "Shooter",
 //     available: false,
 //     img: "...",
 //   },
 //   {
 //     title: "Terraria",
 //     price: 300,
 //     genre: "Adventure",
 //     available: true,
 //     img: "...",
 //   },
 // ];
 // npm init -y
 // npm install --save-dev parcel
 // npm install handlebars
 // npm install --save-dev parcel-transformer-hbs
 // створення .parcelrc з наступним кодом
 // {
 //   "extends": "@parcel/config-default",
 //   "transformers": {
 //     "*.hbs": ["parcel-transformer-hbs"]
 //   }
 // }

//# sourceMappingURL=FE_31_22_10_24_JS.c36f364e.js.map
