// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
//forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
//variável A. Apresentar os valores trocados

let a = parseFloat(prompt("Digite um valor para A:"));
let b = parseFloat(prompt("Digite um valor para B:"));

alert("Antes A = " + a + " e B = " + b);

let guardaA = a;
a = b;
b = guardaA;

alert("Agora A = " + a + " e B = " + b);