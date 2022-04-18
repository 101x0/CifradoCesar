window.onload = inicio;
let operacion;
function inicio() {

    let botones = document.getElementsByTagName("button");
    for (b of botones) {
        b.addEventListener("click", cifrar);
    }
    document.getElementById("mensaje").focus();
}


function cifrar(evento) {

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado = "";
    let texto = document.getElementById("mensaje").value;
    texto = texto.toUpperCase().split("");
    let operacion = evento.target.innerHTML == "cifrar" ? "cifrar" : "";
    let desplazamiento = document.getElementById("desplazamiento").value;
    if (isNaN(desplazamiento) || desplazamiento %1 != 0) {
        alert("Debes introducir un numero entero en desplazamiento");
    } else {
        desplazamiento = (operacion == "cifrar") ? (desplazamiento % 26 + 26) % 26 : (desplazamiento % 26 - 26) % 26;
        let labelCifrado = document.getElementById("labelCifrado");
        labelCifrado.textContent = (operacion == "cifrar") ? "Cifrado" : "Descifrado";
        
        for (let i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto[i]) != -1) {
                let posicion = (operacion == "cifrar") ? (letras.indexOf(texto[i]) + desplazamiento) % 26 :
                    (letras.indexOf(texto[i]) - desplazamiento) % 26;
                resultado += letras[posicion];
            } else {
                resultado += texto[i];
            }
        }
        document.getElementById("descifrado").value = resultado;
    }
};
