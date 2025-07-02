let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas:"));
let preco;
if (quantidade < 12) {
    preco = 1.30;
} else {
    preco = 1.00;
}
let total = quantidade * preco;
alert("O custo total da compra é R$ " + total.toFixed(2));
