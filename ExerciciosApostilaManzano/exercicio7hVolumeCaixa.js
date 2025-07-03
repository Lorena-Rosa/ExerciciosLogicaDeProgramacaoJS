// Calcula o volume de uma caixa retangular

alert("Vamos calcular o volume de uma caixa!");

let comprimento = parseFloat(prompt("Digite o comprimento da caixa (em cm):"));
let largura = parseFloat(prompt("Digite a largura da caixa (em cm):"));
let altura = parseFloat(prompt("Digite a altura da caixa (em cm):"));

let volume = comprimento * largura * altura;

alert("Comprimento = " + comprimento + "cm; largura = " + largura + 
      "cm; altura = " + altura + "cm. Então o volume = " + volume.toFixed(2) + " cm³");