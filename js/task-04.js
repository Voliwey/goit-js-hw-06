const elements = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnInecrement: document.querySelector('[data-action="increment"]'),
    spanValue: document.querySelector("#value"),
}


let counterValue = 0

const decrementValue = () => {
    counterValue -= 1
    elements.spanValue.textContent = counterValue
}

const incrementValue = () => {
    counterValue += 1
    elements.spanValue.textContent = counterValue
}

elements.btnInecrement.addEventListener("click", incrementValue)

elements.btnDecrement.addEventListener("click" , decrementValue)
