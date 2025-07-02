let quantidadeAtual = parseFloat(prompt("Digite a quantidade atual em estoque:"));
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima em estoque:"));
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima em estoque:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

alert("A quantidade média do estoque é: " + quantidadeMedia.toFixed(2));

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}