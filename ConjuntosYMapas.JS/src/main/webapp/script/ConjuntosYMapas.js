window.onload=function (){

    /**
     * conjuntos en javaScript no
     * permiten duplicados,en caso de
     * existir los ignoran */
    let conjunto=new Set(["uno","dos","tres"]);
    let nombres =new Set("Irene","Florin","Ruben","Irina");
    //recorido con for(intem of array)
    for (numero of conjunto){
        console.log(numero);
    }
    for (nombre of nombres){
        console.log(nombre);
    }
/**
 * vamos hacer una agenda telefonica
 * para practicar los conjuntos
 * */
let boton=document.querySelector(".boton");
boton.addEventListener("click",function (){
    alert("vamos a agregar");
})

}