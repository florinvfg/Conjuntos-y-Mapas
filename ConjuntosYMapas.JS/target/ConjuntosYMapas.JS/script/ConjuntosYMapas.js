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
let agenda=new Set();
boton.addEventListener("click",function (){
    let nombre=document.querySelector("#nombre").value;
    let telefono=document.querySelector("#telefono").value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.trim()) && telefono.match(/^\d{9}$/)){
        agenda.add([nombre,telefono]);
        console.log(agenda);
    }else {
        document.querySelector(".error").textContent="Los datos de nombre y telefono son obligatorios!"
    }
})

}