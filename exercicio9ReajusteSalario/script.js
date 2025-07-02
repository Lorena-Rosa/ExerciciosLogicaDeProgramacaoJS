let atual = parseFloat(prompt("Digite o salário atual do funcionário: R$"));
let reajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

let novo_salario = atual + (atual * reajuste / 100);

alert("O novo salário é R$ " + novo_salario.toFixed(2));