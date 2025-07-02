let salarioFixo = parseFloat(prompt("Qual o salário fixo do vendedor?"));
let vendas = parseFloat(prompt("Qual o valor das vendas efetuadas pelo vendedor?"));

let comissao;
if (vendas <= 1500) {
    comissao = vendas * 0.03;
} else {
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05);
}

let salarioTotal = salarioFixo + comissao;

alert("O salário total do vendedor é: R$" + salarioTotal.toFixed(2));