const button = document.querySelector(".button")
const container = document.querySelector(".container")

button.addEventListener("click", (e) =>{
    e.preventDefault()

    if(button.innerText === "Light"){
        container.style.backgroundColor = "black"
        button.innerText = "Dark"
    }
    else{
        container.style.backgroundColor = "White"
        button.innerText = "Light"
    }
})
