/*Exercício 2*/
let produtos=[5]
let con;

for(con=0;con<5;con++)
{
let produto={
    nome:"",
    preço:0,
    local:""
}
produto.nome=prompt("Nome do produto:")
produto.preço=parseFloat(prompt("Preço:"))
produto.local=prompt("Digite Brasil se foi fabricado aqui e exterior se foi feito no exterior:")
produtos.push(produto)

}
for(con=0;con<5;con++)
{
    console.log("Os valores do produto" + con )
    console.log("são:")
}
