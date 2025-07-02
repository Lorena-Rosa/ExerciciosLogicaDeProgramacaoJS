let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

if (idadeHomem1 === idadeHomem2 || idadeMulher1 === idadeMulher2) {
    alert("As idades dos dois homens ou das duas mulheres não podem ser iguais.");
} else {
    let homemMaisVelho = idadeHomem1 > idadeHomem2 ? idadeHomem1 : idadeHomem2;
    let homemMaisNovo = idadeHomem1 < idadeHomem2 ? idadeHomem1 : idadeHomem2;

    let mulherMaisVelha = idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2;
    let mulherMaisNova = idadeMulher1 < idadeMulher2 ? idadeMulher1 : idadeMulher2;

    let soma = homemMaisVelho + mulherMaisNova;
    let produto = homemMaisNovo * mulherMaisVelha;

    alert("A SOMA entre a idade do homem mais velho (" + homemMaisVelho + 
          " anos) e a mulher mais nova (" + mulherMaisNova + " anos) é: " + soma);
    alert("O PRODUTO entre o homem mais novo (" + homemMaisNovo + 
          " anos) e a mulher mais velha (" + mulherMaisVelha + " anos) é: " + produto);
}