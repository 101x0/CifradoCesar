window.onload = inicio;
function inicio() {

    document.getElementById("cifrar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        if (isNaN(desplazamiento)) {
            alert("Debes introducir un numero en desplazamiento");
        } else {
            cifrar(texto, desplazamiento);
        }
    });
    document.getElementById("descifrar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = Number(document.getElementById("desplazamiento").value);
        desc(texto, desplazamiento);
    });
}


function cifrar(texto, desplazamiento) {

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado = "";
    texto = texto.toUpperCase().split("");
    desplazamiento = (desplazamiento % 26 + 26) % 26;

    for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) != -1) {
            let posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
            resultado += letras[posicion];
        } else {
            resultado += texto[i];
        }
    }
    document.getElementById("descifrado").value = resultado;
};


function desc(texto, desplazamiento) {

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado = "";
    texto = texto.toUpperCase().split("");
    desplazamiento = (desplazamiento % 26 - 26) % 26;

    for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) != -1) {
            let posicion = (letras.indexOf(texto[i]) - desplazamiento) % 26;
            resultado += letras[posicion];
        } else {
            resultado += texto[i];
        }
    }
    document.getElementById("descifrado").value = resultado;
}; 