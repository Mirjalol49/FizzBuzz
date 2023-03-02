//! GET ELEMENTS FROM DOCUMENT

let elForm = document.querySelector(".js-form")
let elInput = document.querySelector(".js-input")
let elResult = document.querySelector(".js-result")

//! PREVENT DEFAULT VERSION OF REFRESHING THE PAGE

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()
    let newString = "";
    let inputValue = elInput.value.trim()

    if (inputValue % 3 === 0) {
        newString += "Fizz😊"
    };

    if (inputValue % 5 === 0) {
        newString += "Buzz😊"
    }
    elResult.textContent = newString || inputValue + ", 3ga va 5ga bo'linmaydi😡"
});

function refreshPage() {
    window.location.reload();
}