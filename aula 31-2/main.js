/*Crie uma função que faça a leitura de preço de 3 itens. Crie outra função que faça a soma do
valor desses itens. Por fim, crie outra função que imprima essa soma.*/

function get()
{
    let n1=parseFloat(prompt("Digite o 1° numero: "))
    let n2=parseFloat(prompt("Digite o 2° numero: "))
    let n3=parseFloat(prompt("Digite o 3° numero: "))

    var soma;
    som(n1,n2,n3)
    function som(n1,n2,n3)
    {
        soma=n1+n2+n3;
    }
    function escreve()
    {
        alert("A soma dos numeros é: "+soma)
    }
    escreve();
}
get();
/*Explique o trecho de código abaixo:
respeito();
function respeito(){
console.log("Press F to pay respects.");
Aqui o usuário chama a função antes dessa função ser criada, esse codigo esta dando certo porque uma função no javascript sofre hosting indo para o topo do código
}
 Explique o trecho de código abaixo:
respeito();
respeito = function (){
console.log("Press F to pay respects.");
}
Aqui a única diferença é que a função não é statement que não sofre hosting, logo esse código não vei ser executado da forma desejada pois a função está sendo chamada antes dela existir.
*/

