const btnClass = document.querySelectorAll('.btn-class') // Const para botões
const nSelected = document.querySelector('#n-selected') // Const para os números selecionados
const sendBtn = document.querySelector('#send-btn') // Const para o submit 
const tela1 = document.querySelector('.main-container') // Const para o container onde você seleciona o número
const tela2 = document.querySelector('.thanks-container') // Const para o container que mostra o número selecionado
let selecionado

function addOrRemoveSelectedClass(btn) { // Função de adicionar ou remover a classe selected
    if (btn.classList.contains('selecionado')) {
        btn.classList.remove('selecionado');
    } else {
        console.log(selecionado)
        if (selecionado) {
            selecionado.classList.remove('selecionado');
        }
        btn.classList.add('selecionado');
        selecionado = btn 
    }
}

function addOrRemoveSendBtn(btn) {
    if (nSelected.innerHTML = btn.innerHTML) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}

sendBtn.disabled = true; // Começa true para que o usuário não possa dar submit sem antes selecionar o número
btnClass.forEach((btn) => {
    btn.addEventListener("click", () => { // Assim que clicado
        nSelected.innerHTML = btn.innerHTML // ... O campo da mensagem (que é um span) recebe o valor do botão (O número selecionado)
        sendBtn.disabled = false; // ... O campo de submit passa a ter o disabled false, podendo assim ser usado.
    })
})

sendBtn.addEventListener("click", () => { // Assim que o submit é usado
    tela1.style.display = "none" // ... A tela 1 fica com o display none
    tela2.style.display = "block" // E a tela 2 aparece, com o display block.
})