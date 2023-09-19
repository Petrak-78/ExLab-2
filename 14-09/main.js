/*Crie um arquivo HTML com a div de id "principal" no arquivo HTML.
 Crie e importe um arquivo Javascript chamado main.js. Adicione o CSS do próximo slide a um arquivo CSS externo e link com seu HTML.
 Com Javascript:
 Adicione 3 elementos filhos do tipo h1, h2 e p,
respectivamente à div principal.
 Adicione o texto "Bem vindo ao JS" ao elemento h1
 Adicione o texto "Criando elementos de forma dinâmica" ao elemento h2
 Adicione o texto "Esse é um exemplo clássico de geração de HTML com Javascript" ao p
 Adicione a classe “tituloPrincipal” para o h1.
 Adicione a classe “tituloSec” para o h2.
 Adicione a classe “texto” para a tag p.
*/
/*
let divPrin= document.getElementById("principal");

let h = document.createElement("h1")
h.innerText = "Bem vindo ao JS ao elemento h1";

let h12 = document.createElement("h2")
h12.innerText = "Criando elementos de forma dinâmica ao elemento h2"

let p1 = document.createElement("p")
p1.innerText = "Esse é um exemplo clássico de geração de HTML com Javascript"

divPrin.appendChild(h);
divPrin.appendChild(h12);
divPrin.appendChild(p1);

h.classList.add("tituloPrincipal")
h12.classList.add("tituloSec")
p1.classList.add("texto")
*/
/*Crie 10 objetos do tipo aluno que contenham
nome, email e matéria favorita (leia com
prompt).
❖ Adicione esses objetos de forma dinâmica
dentro da seção main do arquivo HTML a
seguir (próximo slide). Essa adição deve ser
feita após a leitura dos dados desses alunos.
Você deve criar um card para cada aluno,
conforme exemplo abaixo.*/
/*let i=1;
let c=1;
let elemH1 = document.getElementById("h1")
let elemH2 = document.getElementById("h12")

elemH1.addEventListener("mouseover", function()
{
    elemH1.innerHTML = 'Alguem clicou aqui!'+c;
    c++;
})
elemH2.addEventListener("click", function()
{
    elemH2.innerHTML = 'Alguem clicou aqui!'+i;
    i++;
})*/



let book= {
    livro: document.getElementById("Elem").value,
    autor: document.getElementById("Elem1").value,
    pagin: document.getElementById("Elem2").value,
    pais:  document.getElementById("Elem3").value
}

document.appendChild("Elem")
document.appendChild("Elem1")
document.appendChild("Elem2")
document.appendChild("Elem3")




















