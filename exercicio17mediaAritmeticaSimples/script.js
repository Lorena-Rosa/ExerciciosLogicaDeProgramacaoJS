let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2) / 2;

if (media >= 6) {
    alert("Média: " + media.toFixed(2) + "\nAluno aprovado!");
} else {
    alert("Média: " + media.toFixed(2) + "\nAluno reprovado!");
}