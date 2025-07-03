// Calcula o quadrado da soma de A, B e C

let a = parseFloat(prompt("Digite um valor para A:"));
let b = parseFloat(prompt("Digite um valor para B:"));
let c = parseFloat(prompt("Digite um valor para C:"));

let soma = a + b + c;
let quadradoSoma = soma * soma;

alert("O quadrado da soma de A, B e C é: " + quadradoSoma.toFixed(2));