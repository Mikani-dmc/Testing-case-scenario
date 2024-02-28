const inputdousuario = document.getElementById("inputusuario");
const resultado = document.getElementById("resultado"); 
const send = document.getElementById("send");
const resultCase = document.getElementById("resultCase");

send.onclick = function () {
    if (inputdousuario.value.trim() === "") {
        resultado.textContent = "Invalido"
    }
    else {
        resultado.textContent = "valido"
    }
    switch (parseInt(inputdousuario.value)) {
        case 1:
            resultCase.textContent = "Voce indicou 1"
            break   
        case 2:
            resultCase.textContent = "Voce indicou 2"
            break
        case 3:
            resultCase.textContent = "Voce indicou 3"
            break
        case "":
            resultCase.textContent = ""
            break
        default:
            resultCase.textContent = "Voce indicou outro valor diferente de 1,2 e 3"
            break
    
    }
}
