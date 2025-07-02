let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));
let soma;

if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
    soma = 0;
    alert("Não pode haver números iguais entre os 3 números digitados.");
} else {
    if (valor1 > valor2 && valor1 > valor3) {
        soma = (valor2 > valor3) ? valor1 + valor2 : valor1 + valor3;
    } else if (valor2 > valor1 && valor2 > valor3) {
        soma = (valor1 > valor3) ? valor2 + valor1 : valor2 + valor3;
    } else {
        soma = (valor1 > valor2) ? valor3 + valor1 : valor3 + valor2;
    }
    alert("A soma dos dois maiores valores é igual a: " + soma.toFixed(2));
}