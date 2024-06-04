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
let tabla=document.querySelector("#agenda");
boton.addEventListener("click",function (){
    let nombre=document.querySelector("#nombre").value;
    let telefono=document.querySelector("#telefono").value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.trim()) && telefono.match(/^\d{9}$/)){
        agenda.add([nombre,telefono]);
        console.log(agenda);

        //agregar ese contacto a la tabla
        let fila =document.createElement("tr");
        tabla.appendChild(fila);
       //diseña y crea la celda de nombre de contacto
        let celda1=document.createElement("td");
        celda1.classList.add("celda");
        celda1.textContent=nombre;
        tabla.appendChild(celda1);
        //diseñar y crea la celda del telefono del contacto
        let celda2=document.createElement("td");
        celda2.classList.add("celda");
        celda2.textContent=telefono;
        tabla.appendChild(celda2);

    }else {
        document.querySelector(".error").textContent="Los datos de nombre y telefono son obligatorios!"
    }
})

}