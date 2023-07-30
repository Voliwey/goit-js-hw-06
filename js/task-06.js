const inputEl = document.querySelector("#validation-input")
console.log(inputEl);


const checkValid = () => {
    const inputElTrimLeng = inputEl
    
    if (inputElTrimLeng.value.trim().length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")
    } else {
        inputEl.classList.add("invalid")
        inputEl.classList.remove("valid")
    }
}

inputEl.addEventListener("blur", checkValid)

