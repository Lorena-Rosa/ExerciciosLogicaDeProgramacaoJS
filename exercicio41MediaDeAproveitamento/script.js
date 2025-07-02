let nota1 = parseFloat(prompt("Digite a nota da primeira verificação (0-10):"));
let nota2 = parseFloat(prompt("Digite a nota da segunda verificação (0-10):"));
let nota3 = parseFloat(prompt("Digite a nota da terceira verificação (0-10):"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios (0-10):"));

let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;
let conceito;

if (mediaAproveitamento >= 9) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6) {
    conceito = "C";
} else {
    conceito = "D";
}

alert("A média de aproveitamento foi: " + mediaAproveitamento.toFixed(2) + 
      ", logo o conceito = " + conceito);