const choices = document.querySelectorAll('.choice');
const button = document.querySelector('.button');
const ratingScore = document.getElementById("your-rating")

const ratingPage = document.querySelector('.rating');
const thankyouPage = document.querySelector('.thank-you');
button.setAttribute("disabled", "")

let selected = undefined

choices.forEach(choice => {
    choice.addEventListener('click', event => {        
        if(selected) selected.removeAttribute("selected");

        button.removeAttribute("disabled")

        selected = event.target
        event.target.setAttribute("selected", true)
    })
})

button.addEventListener('click', _ => {
    thankyouPage.toggleAttribute("hidden")
    ratingPage.toggleAttribute("hidden")

    ratingScore.innerText = selected.getAttribute("value")
})