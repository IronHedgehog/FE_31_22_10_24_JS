const list = document.querySelector(".list");
let lastElement = list.lastElementChild;
console.log(lastElement);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entity) => {
    if (entity[0].isIntersecting) {
      const img = document.createElement("img");
      img.src = "https://placehold.co/600x800";
      list.appendChild(img);
      observer.unobserve(lastElement);
      lastElement = list.lastElementChild;
      observer.observe(lastElement);
    }
  });

  observer.observe(lastElement);
} else {
  console.log("Не підтримується");
}
