

function addTarefa(){

    let listaTarefas = document.getElementById("lista")
    let tarefa = document.getElementById("texto");

    let li = criarLi(tarefa.value);
    listaTarefas.appendChild(li);
    armazenar(listaTarefas);
}

function criarLi (tarefa){
    let li = document.createElement("li")
    let bt = document.createElement("button")
    bt.innerHTML = "<i class ='fa fa-trash-o'></i>"
    bt.setAttribute("onclick", "deletarTarefa(this)")
    li.innerText = tarefa;
    li.appendChild(bt);

    return li;
}

function armazenar(ul){
    let lista = ul.innerHTML;
    localStorage.setItem("lista", lista)
}

onload = function (){
    let ul = document.getElementById("lista")
    let lista = localStorage.getItem("lista");
    ul.innerHTML = lista
}

function deletarTarefa(tarefa){
    let ul = document.getElementById("lista")
    let elemento = tarefa.parentElement;
    ul.removeChild(elemento);

    armazenar(ul);
}


function deletarTudo(){
    let ul = document.getElementById("lista")
    localStorage.clear();
    ul.innerHTML = ""
}