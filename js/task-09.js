const elements = {
  bodyEl: document.querySelector("body"),
  btnEl: document.querySelector(".change-color"),
  pEl: document.querySelector(".color")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const funColor = getRandomHexColor()
  elements.bodyEl.style.backgroundColor = funColor
  elements.pEl.textContent = funColor
}

elements.btnEl.addEventListener("click", changeColor)
