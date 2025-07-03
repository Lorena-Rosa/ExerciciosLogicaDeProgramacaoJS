// Realiza todas as adições e multiplicações entre pares das variáveis A, B, C e D

let a = parseFloat(prompt("Digite um valor para A:"));
let b = parseFloat(prompt("Digite um valor para B:"));
let c = parseFloat(prompt("Digite um valor para C:"));
let d = parseFloat(prompt("Digite um valor para D:"));

alert("A = " + a + "; B = " + b + "; C = " + c + "; D = " + d + "\n\nA seguir estarão as adições:");

alert(
    a + " + " + b + " = " + (a + b) + "\n" +
    a + " + " + c + " = " + (a + c) + "\n" +
    a + " + " + d + " = " + (a + d) + "\n" +
    b + " + " + c + " = " + (b + c) + "\n" +
    b + " + " + d + " = " + (b + d) + "\n" +
    c + " + " + d + " = " + (c + d)
);

alert("A seguir estarão as multiplicações:");

alert(
    a + " * " + b + " = " + (a * b) + "\n" +
    a + " * " + c + " = " + (a * c) + "\n" +
    a + " * " + d + " = " + (a * d) + "\n" +
    b + " * " + c + " = " + (b * c) + "\n" +
    b + " * " + d + " = " + (b * d) + "\n" +
    c + " * " + d + " = " + (c * d)
);