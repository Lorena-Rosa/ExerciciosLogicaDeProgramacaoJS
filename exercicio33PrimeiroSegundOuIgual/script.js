let valor1 = parseFloat(prompt("Digite um valor:"));
let valor2 = parseFloat(prompt("Digite outro valor:"));

if (valor1 > valor2) {
    alert("Primeiro é maior");
} else if (valor2 > valor1) {
    alert("Segundo é maior");
} else {
    alert("Números iguais");
}