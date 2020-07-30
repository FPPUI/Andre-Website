function incluirMenu(){
    var elementosTag, contador, elemento, file, xml_http_req;
    /* Loop com a coleção de todos os htmls */
    elementosTag = document.getElementsByTagName("*");
    for (contador = 0; contador < elementosTag.length; contador++) {
        elemento = elementosTag[contador];
        /* Procura por elementos com certos atributos*/
        file = elemento.getAttribute("carregar-menu");
        if (file) {
            /* Faz uma requisição HTTP usando o atributo como nome do arquivo */
            xml_http_req = new XMLHttpRequest();
            xml_http_req.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elemento.innerHTML = this.responseText;}
                    if (this.status == 404) {elemento.innerHTML = "Page not found.";}
                    /* Remove o atributo */
                    elemento.removeAttribute("carregar-menu");
                
                }
            }
            xml_http_req.open("GET", file, true);
            xml_http_req.send();
            /* Encerra a função */
            return;
        }
    }
}