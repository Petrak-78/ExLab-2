/*1. Crie um array de 5 posições e preencha com as
notas de 5 alunos. Após isso, imprima no console:
1. A nota mais alta
2. A nota mais baixa
3. A média das notas*/
let not=[5];
let mai=0;
let men=1000;
let med=0;
for(let con=0;con<5;con++){
    not[con]= parseFloat(prompt("Digite uma nota: "));
    if(not[con]>mai)
    {
        mai=not[con];
    }
    if(not[con]<men)
    {
        men=not[con];
    }
    med=med+not[con];
}
med=med/5;
console.log("A maior nota eh: "+ mai);
console.log("A menor nota eh: "+ men);
console.log("A media eh: "+ med);