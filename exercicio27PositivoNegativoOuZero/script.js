let numero = parseInt(prompt("Digite um número:"));

if (numero < 0) {
    alert("O número " + numero + " é negativo!");
} else {
    if (numero > 0) {
        alert("O número " + numero + " é positivo!");
    } else {
        alert("O número digitado foi 0.");
    }
}