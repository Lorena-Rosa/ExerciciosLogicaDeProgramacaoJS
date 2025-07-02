let X = parseFloat(prompt("Escreva um valor para X:"));
let Y = parseFloat(prompt("Escreva um valor para Y:"));

let Z = (X * Y) + 5;
let resposta;

if (Z <= 0) {
    resposta = "A";
} else if (Z <= 100) {
    resposta = "B";
} else {
    resposta = "C";
}

alert("Resposta: " + resposta);