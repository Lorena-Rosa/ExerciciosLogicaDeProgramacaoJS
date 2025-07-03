//Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
//PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO).


let valorInicial = parseFloat(prompt("Digite o valor inicial da prestação:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (em porcentagem):"));
let tempoAtraso = parseFloat(prompt("Digite o tempo de atraso da prestação (em meses):"));

let prestacao = valorInicial + ((valorInicial * taxa / 100) * tempoAtraso);

alert("Agora o valor da prestação é: R$" + prestacao.toFixed(2));