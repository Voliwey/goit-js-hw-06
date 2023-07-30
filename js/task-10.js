const inputEl = document.querySelector("#controls>input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  boxesEl.innerHTML = "";

  const divToAdd = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    divToAdd.push(div);
  }
  return divToAdd;
};
const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreateEl.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputEl.value);
  boxesEl.append(...boxesToAdd);
});

btnDestroyEl.addEventListener("click", destroyBoxes);
