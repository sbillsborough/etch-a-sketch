const containerDiv = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square");
  containerDiv.appendChild(squareDiv);
}
