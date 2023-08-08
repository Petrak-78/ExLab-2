/*Crie um código em Javascript que leia o peso
e a altura de uma pessoa (use o comando
    prompt). Em seguida, calcule o IMC (use as
    medidas de kg e metros) da pessoa e
    classifique-a segundo a tabela de IMC
    abaixo:IMC = Peso ÷ (Altura × Altura)*/

let imc1, imc;
let peso = prompt("Qual seu peso(kg): ");
let alt = prompt("Qual sua altura(metro): ");
imc1=alt*alt;
imc=peso/imc1;
console.log("O seu imc eh:", imc);
if(imc<18.5)
{
    console.log("Abaixo do peso");
}
else if(imc<24.9)
{
    console.log("peso ideal");
}
else if(imc<29.9)
{
    console.log("levemente acima do peso");
}
else if(imc<34.9)
{
    console.log("Obesidade grau 1");
}
else if(imc<39.9)
{
    console.log("Obesidade grau 2(severa)");
}
else{
    console.log("Thais carla");
}