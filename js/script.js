const containerDiv = document.querySelector(".container");

function createSquares(amount) {
  containerDiv.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square");
    containerDiv.appendChild(squareDiv);

    const square = document.querySelectorAll(".square");

    for (let i = 0; i < square.length; i++) {
      square[i].addEventListener("mouseover", (e) => {
        e.target.setAttribute("style", "background: blue;");
      });
    }
  }
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  let squaresAmount = prompt("How many squares?");
  if (squaresAmount < 101) {
    createSquares(squaresAmount);
  }
});
