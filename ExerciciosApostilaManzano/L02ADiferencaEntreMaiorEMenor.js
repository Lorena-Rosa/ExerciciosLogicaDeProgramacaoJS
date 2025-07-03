// Calcula a diferença entre dois valores e mostra quem é o maior

let valor1 = parseFloat(prompt("Digite um valor:"));
let valor2 = parseFloat(prompt("Digite outro valor:"));
let diferenca;

if (valor1 >= valor2) {
    diferenca = valor1 - valor2;
    alert("A diferença entre o maior valor (" + valor1 + ") e o menor valor (" + valor2 + ") é: " + diferenca.toFixed(2));
} else {
    diferenca = valor2 - valor1;
    alert("A diferença entre o maior valor (" + valor2 + ") e o menor valor (" + valor1 + ") é: " + diferenca.toFixed(2));
}