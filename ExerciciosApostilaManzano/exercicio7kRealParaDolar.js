// Converte valor em reais para dólares usando a cotação informada

let cotacaoDolar = parseFloat(prompt("Digite qual a cotação do dólar:"));
let quantidadeReal = parseFloat(prompt("Digite o valor em reais que você possui:"));

let valorEmDolar = quantidadeReal / cotacaoDolar;

alert("O valor convertido em dólares é: US$" + valorEmDolar.toFixed(2));