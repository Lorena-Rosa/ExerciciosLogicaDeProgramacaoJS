let anos = parseInt(prompt("Insira sua idade expressa em anos:"));
let meses = parseInt(prompt("Insira quantos meses fazem desde seu último aniversário:"));
let dias = parseInt(prompt("Insira quantos dias faltam para o seu próximo mesversário:"));

let idade_em_dias = (anos * 365) + (meses * 30) + dias;

alert("A sua idade convertida em dias é: " + idade_em_dias + " dias");
