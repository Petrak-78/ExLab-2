/*Crie um algoritmo que resolva o problema a seguir:
Um grupo de teatro chega a cidade de Patrocínio e faz uma breve pesquisa sobre a sua
audiência baseada no preço de seu ingresso. A conclusão é que: caso o ingresso seja
vendido a R$10,00, o público alvo será de 200 pessoas. A pesquisa também revelou que, a cada R$1,00 mais barato, a 
audiência aumenta em 52 pessoas. Considerando que o grupo deve pagar no total uma despesa de R$300,00 pelo aluguel do espaço, faça um programa
que calcule qual é o melhor valor para venda de ingresso desse circo (o que gera um maior lucro).
Ao final, o algoritmo deve mostrar:
 O melhor preço de vendas para o ingresso.
 O número de pessoas que compõe a audiência.
 O lucro esperado com a realização do evento.*/

let con;
let maior=2000
for(con=0;con<10;con++)
{
    let nump=200+52*con;
    let vt=nump*(10-con);
    if(vt>maior)
    {
        maior=vt;
        console.log(con)
    }
}
console.log("O maior valor é: "+ maior);
