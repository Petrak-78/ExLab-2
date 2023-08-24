/*Exercício 1*/
let op= parseFloat(prompt("Digite 1 para subtração entre 2 números, 2 para multiplicação entre 2 números, 3 para divisão entre 2 números, 4 para somátorio entre 4 números:"));

switch(op){
    case 1:
        let num1 = parseFloat(prompt("Digite os números que serão subtraídos:"));
        let num2 = parseFloat(prompt(""));

        let sub=num1-num2;
        console.log("A subtraçao é:"+ sub);
        break;
    case 2:
        let num3 = parseFloat(prompt("Digite os números que serão multiplicados:"));
        let num4 = parseFloat(prompt(""));

        let mult=num3*num4;
        console.log("A multiplicação é:"+ mult);
        break;
    case 3:
        let num5 = parseFloat(prompt("Digite os números que serão divididos:"));
        let num6 = parseFloat(prompt(""));

        let div=num5/num6;
        console.log("A divisão é:"+ div);
        break;
    case 4:
        let num7 = parseFloat(prompt("Digite os 4 números que serão somados:"));
        let num8 = parseFloat(prompt(""));
        let num9 = parseFloat(prompt(""));
        let num10 = parseFloat(prompt(""));

        let som=num7+num8+num9+num10;
        console.log("A soma é:"+ som);
        break;
    default:
        console.log("Número inválido");
}