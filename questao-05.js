// 5) Escreva um programa que inverta os caracteres de um string.

function inversãoDeString(String) {
    let invertido = '';
    for (let i = String.length - 1; i >= 0; i--) {
        invertido += String[i];
    }
    return invertido;
}

const stringTeste = "Boa tarde!";

console.log("String original:", stringTeste);
console.log("String invertida:", inversãoDeString(stringTeste));
