/*Gere o conteúdo “Hoje é dia X/Y de XXXX (pesquise e use a função appendChild)
❖ Crie um elemento do tipo h1 no body do HTML com a mensagem inicial “msg base”.
❖ Em Javascript, acesse esse elemento pelo ID e modifique seu conteúdo com base no
horário local, sendo:
❖ Entre 6 e 11 horas: “Bom dia!”
❖ 12 horas: “Hora do Almoço!”
❖ 13 as 17: “Boa tarde!”
❖ 18 as 23: “Boa noite!”
❖ 0 horas: “Não disse que ia dormir mais cedo hoje?”
❖ Entre 1 e 5 horas: “Não está na netflix, está?”
❖ Escreva separadamente o arquivo.html do arquivo.js;
❖ Para realizar essa atividade, pesquise sobre como fazer para obter a data atual do seu
computador em javascript.
*/
let data = new Date();
console.log(data)
const dataAtualdia = data.getDate();
const dataAtualmes = data.getMonth()+1;
const dataAtualano = data.getFullYear();
const horas = data.getHours();
console.log(dataAtualdia);
console.log(dataAtualmes);
console.log(dataAtualano);

var h1 = document.createElement("h1")
 
var h2 = document.createElement("h2")

h2.textContent='Hoje é dia'+dataAtualdia+'/'+dataAtualmes+' de '+dataAtualano;
document.body.appendChild(h1);
document.body.appendChild(h2);

var h1 
if(horas==0)
{
    h1.textContent='Não disse que ia dormir mais cedo hoje?';
}
if(horas>=6 && horas<=11)
{
    h1.textContent='Bom dia!';
}
if(horas==12)
{
    h1.textContent='Hora do almoço!';
}
if(horas>=13 && horas<=17)
{
    h1.textContent='Boa tarde!';
}
if(horas>=18 && horas<=23)
{
    h1.textContent='Boa noite!';
}
if(horas>=1 && horas<=2)
{
    h1.textContent='Não está na netflix, está?!';
}
























