const codificarBtn = document.getElementById("criptografar");
const decodificarBtn = document.getElementById("descriptografar");
const copyBtn = document.getElementById("copyBtn");
const container = document.querySelector(".container");
const mostrarModal = document.querySelector(".modal-content");
const mostrarTexto = document.querySelector(".user-output");
const click = new Audio("./assets/audio/click.wav");
var texto = document.getElementById("user_Text");
var texto2 = document.getElementById("user_Text2");
var entrada = texto.value;
var saida = texto2.value;

mostrarModal.style.display = "flex";
mostrarTexto.style.display = "none";

codificarBtn.addEventListener("click", codificar);
decodificarBtn.addEventListener("click", decodificar);
copyBtn.addEventListener("click", copy);

function codificar() {
    mostrarTela();
    let entrada = texto.value;

    texto2.value = "";

    for(let i=0; i < entrada.length; i++){
        if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
            if (entrada[i] == "a") {
                texto2.value += "ai";
            } else if (entrada[i] == "e") {
                texto2.value += "enter";
            } else if (entrada[i] == "i") {
                texto2.value += "imes";
            } else if (entrada[i] == "o") {
                texto2.value += "ober";
            } else if (entrada[i] == "u") {
                texto2.value += "ufat";
            } else {
                texto2.value += entrada[i];
            }
        }else{
            alert("Não é permitido letras maiusculas!!")
        }
    }
}

function decodificar() {
    mostrarTela();
    let entrada = texto.value;
    let res;

    texto2.value = "";

    res = entrada.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
    
    texto2.value = res;
}


function copy(){
    let copyText = document.querySelector("#user_Text2");
    copyText.select();
    let textoCopiado = document.execCommand("copy");

    if (textoCopiado == true) {
        createNotification();
        click.play();
        clear();
    }else {
        textoCopiado = false;
    }
    return;
};

function createNotification() {
    const ntf = document.createElement("div");
    ntf.classList.add("modal-ntf");

    ntf.innerText = "Copiado com sucesso!!!"

    container.appendChild(ntf)

    setTimeout(() => {
        ntf.remove() 
    }, 3000);

}

function mostrarTela() {
    mostrarTexto.style.display = "flex";
    mostrarModal.style.display = "none";
    
    if (texto.value == false) {
        mostrarTexto.style.display = "none";
        mostrarModal.style.display = "flex";
    }
    return;
}

function clear() {
    return texto.value = "";
}