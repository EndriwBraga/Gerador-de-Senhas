let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

//let charset = "abc... são as variaveis que irei selecionar aleatoriamente na função generatePassword()"
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

// sizePassword.innerHTML = sliderElement.value; adicionou o numero de caracteres selecionado.
sizePassword.innerHTML = sliderElement.value;

// essa função fez com que quando eu alterasse o numero de letras, o valor tambem se alterasse.
slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}


function copy(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!")
}



