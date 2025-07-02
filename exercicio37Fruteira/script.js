let kgMorango = parseFloat(prompt("Digite quantos kg de morango foram comprados:"));
let kgMaca = parseFloat(prompt("Digite quantos kg de maçã foram comprados:"));

let precoMorango = kgMorango <= 5 ? 2.50 : 2.20;
let precoMaca = kgMaca <= 5 ? 1.80 : 1.50;

let kgFrutas = kgMorango + kgMaca;
let valorTotal = (kgMorango * precoMorango) + (kgMaca * precoMaca);

if (kgFrutas > 8 || valorTotal > 25) {
    valorTotal -= valorTotal * 0.10;
}

alert("O valor total a ser pago é: R$" + valorTotal.toFixed(2));