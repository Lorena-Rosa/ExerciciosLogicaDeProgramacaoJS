let custoDeFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: R$"));

let valorFinal = (28 / 100 * custoDeFabrica) + (45 / 100 * custoDeFabrica) + custoDeFabrica;

alert("O valor total do carro é de: R$ " + valorFinal.toFixed(2));
