let inicio = parseInt(prompt("Digite a hora de início do jogo:"));
let fim = parseInt(prompt("Digite a hora de término do jogo:"));
let duracao;

if (fim >= inicio) {
    duracao = fim - inicio;
} else {
    duracao = (24 - inicio) + fim;
}
alert("A duração do jogo foi de " + duracao + " horas.");