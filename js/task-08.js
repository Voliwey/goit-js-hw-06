const form = document.querySelector(".login-form")
// console.log(form);

const formSubmit = (event) => {
     event.preventDefault();

    const formElements = event.currentTarget.elements;
    // console.log(formElements);
    if (formElements.email.value === "" || formElements.password.value === "") {
        return alert("Вам потрібно заповнити всі поля!")
    }
    const email = formElements.email.value
    const password = formElements.password.value

    const formObj = {
        email,
        password
    }
 console.log(formObj);

 form.reset()
}
form.addEventListener("submit", formSubmit)



