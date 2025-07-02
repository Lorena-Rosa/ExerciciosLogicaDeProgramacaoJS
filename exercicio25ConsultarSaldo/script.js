let numeroConta = parseInt(prompt("Qual o número de sua conta?"));
let saldo = parseFloat(prompt("Digite o saldo de sua conta:"));
let debito = parseFloat(prompt("Digite o débito:"));
let credito = parseFloat(prompt("Digite o crédito:"));

let saldoAtual = saldo - debito + credito;

alert("Seu saldo atual é de: R$" + saldoAtual.toFixed(2));

if (saldoAtual >= 0) {
    alert("Seu saldo é Positivo");
} else {
    alert("Seu saldo é Negativo");
}