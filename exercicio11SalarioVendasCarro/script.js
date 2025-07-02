let carrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
let valorVendas = parseFloat(prompt("Digite o valor total das vendas: R$"));
let salarioFixo = parseFloat(prompt("Digite o salário fixo do funcionário: R$"));
let comissaoCarro = parseFloat(prompt("Digite o valor da comissão por cada carro vendido: R$"));

let salarioFinal = salarioFixo + (carrosVendidos * comissaoCarro) + (valorVendas * 0.05);

alert("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));