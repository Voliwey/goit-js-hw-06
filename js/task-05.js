const elements = {
    inputText: document.querySelector("#name-input"),
    hText: document.querySelector("#name-output")
}

const spanChanges = () => {
  const inputValue = elements.inputText.value.trim()
  elements.hText.textContent = inputValue
  if (!inputValue) {
    elements.hText.textContent = "Anonymous"
  }
}
elements.inputText.addEventListener("input", spanChanges)
