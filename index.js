let btn = document.querySelector("button");

btn.addEventListener("click", changeColor);

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("myDiv").style.backgroundColor = "#" + randomColor;
}
document
  .getElementById("#myDiv")
  .setAttribute("style", "width: 200px; higth: 300px");
