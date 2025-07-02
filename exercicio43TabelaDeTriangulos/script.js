let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        alert("Triângulo Equilátero");
    } else if (A === B || B === C || A === C) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }
} else {
    alert("Não é possível formar um triângulo");
}