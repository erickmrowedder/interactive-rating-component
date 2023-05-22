const btnClass = document.querySelectorAll('.btn-class');
const nSelected = document.querySelector('#n-selected');
const sendBtn = document.querySelector('#send-btn');
const tela1 = document.querySelector('.main-container');
const tela2 = document.querySelector('.thanks-container');
let selected;

function addOrRemoveSelectedClass(nota) { 
    var btn = document.querySelector("#nota" + nota);
    if (btn.classList.contains(selected)) {
        btn.classList.remove(selected);
    } else {
        if (selected) {
            selected.classList.remove("selected");
        }
        btn.classList.add("selected");
        selected = btn;
        nSelected.innerHTML = nota;
    }
}

function addOrRemoveSendBtn(btn) {
    sendBtn.disabled = true;
    if (nSelected.innerHTML = btn.innerHTML) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}

function display() { 
    tela1.style.display = "none"; 
    tela2.style.display = "block"; 
}




