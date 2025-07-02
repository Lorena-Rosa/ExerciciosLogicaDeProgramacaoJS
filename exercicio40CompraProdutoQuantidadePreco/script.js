let nomeProduto = prompt("Digite o nome do produto comprado:");
let quantidade = parseInt(prompt("Digite a quantidade de produto adquirida:"));
let preco = parseFloat(prompt("Digite o preço do produto: R$"));

let total = quantidade * preco;
let desconto;

if (quantidade <= 5) {
    desconto = total * 0.02;
} else if (quantidade <= 10) {
    desconto = total * 0.03;
} else {
    desconto = total * 0.05;
}

let valorTotal = total - desconto;

alert("A quantidade de " + nomeProduto + " comprada foi: " + quantidade +
      " e o total da compra deu: R$" + valorTotal.toFixed(2));