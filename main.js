const btnClass = document.querySelectorAll('.btn-class') // Constante para botões
const nSelected = document.querySelector('#n-selected') // Constante para os números selecionados
const sendBtn = document.querySelector('#send-btn')
const tela1 = document.querySelector('.main-container')
const tela2 = document.querySelector('.thanks-container')

sendBtn.disabled = true;

btnClass.forEach((btn) => {
    btn.addEventListener("click", () => {
        nSelected.innerHTML = btn.innerHTML
        sendBtn.disabled = false;
    })
})

sendBtn.addEventListener("click", () => {
    tela1.style.display = "none"
    tela2.style.display = "block"
})