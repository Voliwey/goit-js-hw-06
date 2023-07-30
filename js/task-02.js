const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const queryByIdEl = document.querySelector("#ingredients")

// 1 вариант
const newListObj = ingredients.map(el => {
  const newList = document.createElement("li")
  newList.textContent = el
  newList.classList.add("item")
  return newList
})

queryByIdEl.append(...newListObj)

// // 2 вариант
// function createMarkup(arr) {
//   const markup = arr.map((el) => {
//   const newList = document.createElement("li")
//   newList.textContent = el
//   newList.classList.add("item")
    
//   return newList
//   })
//   queryByIdEl.append(...markup)
// }

// createMarkup(ingredients)