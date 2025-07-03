// Calcula o quadrado de A, B, C e a soma desses quadrados

let a = parseFloat(prompt("Digite um valor para A:"));
let b = parseFloat(prompt("Digite um valor para B:"));
let c = parseFloat(prompt("Digite um valor para C:"));

let quadradoA = a * a;
let quadradoB = b * b;
let quadradoC = c * c;

let somaQuadrados = quadradoA + quadradoB + quadradoC;

alert("Quadrados: A = " + quadradoA + "; B = " + quadradoB + "; C = " + quadradoC);
alert("A soma dos quadrados de A, B e C é: " + somaQuadrados);