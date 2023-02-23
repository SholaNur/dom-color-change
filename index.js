let btn = document.querySelector("button");
let div = document.getElementById("myDiv");
btn.addEventListener("click", changeColor);

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  div.style.backgroundColor = `#${randomColor}`;

  //   document.getElementById("myDiv").style.backgroundColor = "#" + randomColor;
}

div.setAttribute("style", "width: 200px; height: 300px");
