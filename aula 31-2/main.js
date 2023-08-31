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

