const colorList = document.getElementById("color");

function randomColors() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const alpha = Math.random();

  const randomColor = `rgba(${red},${green},${blue},${alpha})`;

  return randomColor;
}

colorList.addEventListener("click", (cubeListener) => {
  // console.log("target", cubeListener.target); // елемент на якому відбулася подія
  // console.log("currentTarget", cubeListener.currentTarget); // це елемент на якому висить слухач події
  // console.log(cubeListener.target.nodeName);
  if (cubeListener.target.nodeName !== "LI") {
    return;
  }
  const color = cubeListener.target.style.backgroundColor;
  document.body.style.backgroundColor = color;
});

function cubes() {
  const cube = document.createElement("li");
  cube.classList.add("cube");
  const color = randomColors();

  cube.style.backgroundColor = color;
  colorList.append(cube);
}

for (let i = 0; i <= 10000; i++) {
  cubes();
}
