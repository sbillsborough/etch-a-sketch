const containerDiv = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square");
  containerDiv.appendChild(squareDiv);
}

const square = document.querySelectorAll(".square");

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseover", (e) => {
    // e.target.style.background = "blue";
    e.target.setAttribute("style", "background: blue;");
  });
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  let squaresAmount = prompt("How many squares?");
});
