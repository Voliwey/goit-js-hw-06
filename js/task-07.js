
const elements = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector("#text")
}

const changeFontSize = () => {
    elements.spanEl.style.fontSize = elements.inputEl.value + "px"
}

elements.inputEl.addEventListener("input", changeFontSize)