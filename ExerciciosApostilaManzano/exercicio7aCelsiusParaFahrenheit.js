//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
//conversão é F <- (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.


let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

let fahrenheit = (9 * celsius + 160) / 5;

alert("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2));