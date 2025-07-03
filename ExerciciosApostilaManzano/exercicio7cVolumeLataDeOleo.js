//Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
//Volume *Raio * Altura

let raio = parseFloat(prompt("Digite o valor do raio da base da lata (em cm):"));
let altura = parseFloat(prompt("Digite o valor da altura da lata (em cm):"));

let volume = 3.14 * Math.pow(raio, 2) * altura;

alert("O volume da lata de óleo é: " + volume.toFixed(2) + " cm³");