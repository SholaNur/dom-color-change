let div = document.getElementById("myDiv");
div.setAttribute("style", "background-color:grey; width: 80px; height:40px");

div.onmouseover = function () {
  mouseOver();
};

function mouseOver() {
  div.style.color = "red";
}
