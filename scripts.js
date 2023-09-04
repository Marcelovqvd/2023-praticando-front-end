const button = document.querySelector('button')
const buttonImg = document.querySelector('button img')

button.addEventListener('click', handleButton)

function handleButton(event) {
    button.disabled = true
    button.classList.add('disabled')
    buttonImg.classList.add('onDisabled')
}