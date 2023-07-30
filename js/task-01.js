const queryByIdEl = document.querySelector("#categories")

const categoryAndElements = queryByIdEl.children

const numberOfCategory = categoryAndElements.length
console.log(`Number of categories: ${numberOfCategory}`);

const categoryTitleAndEl = ([...arr]) => {
    arr.forEach((el) => {
        console.log(`Category: ${el.children[0].textContent}`);
        console.log(`Elements: ${el.children[1].children.length}`);
    })
    
}
categoryTitleAndEl(categoryAndElements)
