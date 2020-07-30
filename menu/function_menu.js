function incluirMenu(nomepag){
    var contador;
    var lista = ["Apostilas", "Projetos", "Atividades", "Programas", "Cursos", "Pesquisas", "Feira de Ciências"];

    contador2 = 1; 
    for(contador = 0; contador < lista.length; contador++){
        if(nomepag !== lista[contador]){ 
            document.getElementById("menu"+contador2).innerHTML = lista[contador];
            contador2++;
        } else {
            document.getElementById("titulo").innerHTML = lista[contador];
        }
    }
}

