let combustivel = prompt("Digite o tipo de combustível usado para abastecer (A = álcool; G = gasolina):").toUpperCase();
let litros = parseFloat(prompt("Digite quantos litros foram usados para abastecer:"));

let precoLitro, desconto;

if (combustivel === "A") {
    precoLitro = 2.90;
    desconto = litros <= 20 ? 0.03 : 0.05;
} else if (combustivel === "G") {
    precoLitro = 3.30;
    desconto = litros <= 20 ? 0.04 : 0.06;
} else {
    alert("Tipo de combustível inválido.");
}

if (combustivel === "A" || combustivel === "G") {
    let valorBruto = precoLitro * litros;
    let valorDesconto = valorBruto * desconto;
    let valorFinal = valorBruto - valorDesconto;

    alert("O valor a pagar é: R$" + valorFinal.toFixed(2));
}