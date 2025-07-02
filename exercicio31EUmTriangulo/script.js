let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

if (
    valor1 < valor2 + valor3 &&
    valor2 < valor1 + valor3 &&
    valor3 < valor1 + valor2
) {
    alert("Essa figura é um triângulo.");
} else {
    alert("Essa figura não é um triângulo.");
}