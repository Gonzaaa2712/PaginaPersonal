function modoClaro(){

    if(document.getElementById("prueba").checked){

        document.getElementById("pie").className ="section colorPrincipal white-text center";
        document.getElementById("cuerpo").className = "colorBlanco";
        document.getElementById("seccionConocimientos").className = "colorBlanco";
        document.getElementById("barra").className = "colorPrincipal";

    } else {
        document.getElementById("pie").className ="section grisClaro white-text center";
        document.getElementById("cuerpo").className = "grisOscuro";
        document.getElementById("seccionConocimientos").className = "grisOscuro";
        document.getElementById("barra").className = "grisClaro";
    }

    


// en el footer cambiarlo en el body quitarlo y en el section conocimientos quitarlo y navbar color principal



}