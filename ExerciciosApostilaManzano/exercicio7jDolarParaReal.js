// Converte valor em dólar para reais usando a cotação informada

let cotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dólar:"));
let quantidadeDolar = parseFloat(prompt("Digite quantos dólares você tem:"));

let valorEmReais = cotacaoDolar * quantidadeDolar;

alert("O valor convertido em reais é: R$" + valorEmReais.toFixed(2));