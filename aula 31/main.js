/*1. Crie uma função em javascript que calcule a
média entre 3 números e retorne o resultado. Em seguida, faça a chamada dessa função com os
seguintes parâmetros:
 3, 2, 4
 5, 2, 1*/


    let num1=parseFloat(prompt("Digite o numero 1"))
    let num2=parseFloat(prompt("Digite o numero 2"))
    let num3=parseFloat(prompt("Digite o numero 3"))

let med =function(n1, n2)
{
    let media= num1+num2+num3;
    let media1=media/3;
    console.log("A média dos valores é: "+media1);
}
med(num1, num2, num3);