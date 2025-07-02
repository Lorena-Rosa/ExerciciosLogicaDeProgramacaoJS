// Calcula a porcentagem de votos brancos, nulos e válidos
// Autor(a): Lorena Rosa

let totalVotos = parseInt(prompt("Digite o número total de votos da sua cidade:"));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"));
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos:"));

let porcentNulos = (votosNulos / totalVotos) * 100;
let porcentBrancos = (votosBrancos / totalVotos) * 100;
let votosValidos = totalVotos - (votosNulos + votosBrancos);
let porcentValidos = (votosValidos / totalVotos) * 100;

alert("A porcentagem de votos brancos é: " + porcentBrancos.toFixed(2) +
      "%, a de votos nulos é: " + porcentNulos.toFixed(2) +
      "% e a de votos válidos é de: " + porcentValidos.toFixed(2) + "%");