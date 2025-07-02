let time1 = prompt("Qual o nome do time que competiu?");
let time2 = prompt("Qual o nome do outro time que competiu?");
let golsTime1 = parseInt(prompt("Quantos gols " + time1 + " marcou?"));
let golsTime2 = parseInt(prompt("Quantos gols " + time2 + " marcou?"));

if (golsTime1 > golsTime2) {
    alert(time1 + " foi o campeão com " + golsTime1 + " gols!");
} else if (golsTime2 > golsTime1) {
    alert(time2 + " foi o campeão com " + golsTime2 + " gols!");
} else {
    alert(time1 + " marcou " + golsTime1 + " gols e " + time2 + 
          " marcou " + golsTime2 + " gols. O que quer dizer que houve um EMPATE.");
}