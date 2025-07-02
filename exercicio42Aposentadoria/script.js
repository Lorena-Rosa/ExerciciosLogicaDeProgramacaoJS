let codigo = parseInt(prompt("Digite qual o número do(a) funcionário(a) (código):"));
let anoAtual = parseInt(prompt("Digite o ano em que estamos:"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do(a) funcionário(a):"));
let anoEmpresa = parseInt(prompt("Digite em que ano o(a) funcionário(a) ingressou na empresa:"));

let idadeFuncionario = anoAtual - anoNascimento;
let anosTrabalhados = anoAtual - anoEmpresa;

if (idadeFuncionario >= 65 || anosTrabalhados >= 30 || (idadeFuncionario >= 60 && anosTrabalhados >= 25)) {
    alert("O(A) funcionário(a) " + codigo + " tem " + idadeFuncionario +
          " anos e faz " + anosTrabalhados + " anos que ingressou na empresa, logo: Requer aposentadoria.");
} else if (anoAtual < anoNascimento || anoAtual < anoEmpresa || idadeFuncionario < 18) {
    alert("Resposta inválida.");
} else {
    alert("O(A) funcionário(a) " + codigo + " tem " + idadeFuncionario +
          " anos e faz " + anosTrabalhados + " anos que ingressou na empresa, logo: Não requer aposentadoria.");
}