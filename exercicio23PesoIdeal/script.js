let nome = prompt("Qual seu nome?");
let sexo = prompt("Você é do sexo feminino ou masculino?").toLowerCase();
let altura = parseFloat(prompt("Qual sua altura?"));

let pesoIdeal;

if (sexo == "masculino") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

alert(nome + ", o seu peso ideal é: " + pesoIdeal.toFixed(2) + "kg.");