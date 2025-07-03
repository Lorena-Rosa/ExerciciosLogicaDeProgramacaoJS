// Exibe o módulo de um número digitado

let valor = parseInt(prompt("Digite um valor inteiro:"));

if (valor < 0) {
    valor = valor * (-1);
}

alert("O módulo do valor digitado é: " + valor);