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
    let apellido=document.querySelector("#apellido").value;
    let telefono=document.querySelector("#telefono").value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.trim()) && telefono.match(/^\d{9}$/)){
        agenda.add([nombre,apellido,telefono]);
        console.log(agenda);

        //agregar ese contacto a la tabla
        let fila =document.createElement("tr");
        tabla.appendChild(fila);
       //diseña y crea la celda de nombre de contacto
        let celda1=document.createElement("td");
        celda1.classList.add("celda");
        celda1.textContent=nombre;
        tabla.appendChild(celda1);

        let celda2=document.createElement("td");
        celda2.classList.add("celda");
        celda2.textContent=apellido;
        tabla.appendChild(celda2);
        //diseñar y crea la celda del telefono del contacto
        let celda3=document.createElement("td");
        celda3.classList.add("celda");
        celda3.textContent=telefono;
        tabla.appendChild(celda3);

    }else {
        document.querySelector(".error").textContent="Los datos de nombre y telefono son obligatorios!"
    }
    document.querySelector("#nombre").value="";
    document.querySelector("#apellido").value="";
    document.querySelector("#telefono").value="";


    console.log(agenda.size);//longitud del conjunto
    let nombreBuscar="Irina";
    if (agenda.has(nombreBuscar)){//buscar dentro de un conjunto
        console.log("Encontrado");
    }
    else{
        console.log("No existe");
    }
})

}