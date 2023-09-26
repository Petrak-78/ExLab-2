/*Crie 10 objetos do tipo aluno que contenham
nome, email e matéria favorita (leia com
prompt).
❖ Adicione esses objetos de forma dinâmica
dentro da seção main do arquivo HTML a
seguir (próximo slide). Essa adição deve ser
feita após a leitura dos dados desses alunos.
Você deve criar um card para cada aluno,
conforme exemplo abaixo.
*/

let nome= [10];
let emai = [10];
let materifavorita = [10];

for (let i = 0; i < 10; i++) {
  


  let alunos= {
    nom: prompt("Digite o seu nome:"),
    email: prompt("Digite o seu email"),
    materiafavorita: prompt("Digite sua matéria favorita")
  };

  nome[i] = alunos.nom ;
  emai[i]=  alunos.email ;
  materifavorita[i]=  alunos.materiafavorita;


  let print1 = document.createElement("h1");
  print1.innerText = nome[i];
  let print2 = document.createElement("h1");
  print2.innerText = emai[i];
  let print3 = document.createElement("h1");
  print3.innerText = materifavorita[i];

 document.body.appendChild(print1);

document.body.appendChild(print2);
  
document.body.appendChild(print3);


print1.classList.add("tituloPrincipal");
print2.classList.add("tituloSec");
print3.classList.add("texto");
}
