window.onload=function (){
    //buscar un conjunto
    let conjunto=new Set().add(1).add(2).add(11);
    //buscar elemento dentro del conjunto
    if (conjunto.has(11)){
        console.log("encontrado");

    }else {
        console.log("no encontrado");
    }

//eliminar un valor
    conjunto.delete(2);
    console.log(conjunto);

    //eliminar todos
    conjunto.clear();
    console.log(conjunto);

    //convertir el conjunto en un array
    let array=[conjunto];
    console.log(array);

    //unir arrays en un conjunto
    let array1=[1,2,3,4,5];
    let array2=[6,7,8,9,10];
    let array3=[1,11,12,7];
    let numeros=new Set();

    for (let i=0;i<array1.length;i++){
        numeros.add(array1[i]);
    }
    for (let i=0;i<array2.length;i++){
        numeros.add(array2[i]);
    }
    for (let i=0;i<array3.length;i++){
        numeros.add(array3[i]);
    }

    console.log(numeros);




    /**
     * creacion de la agenda con
     * mapas
     * */

    let agenda=new Map();

    let boton=document.querySelector(".boton");
    let borrar=document.querySelector(".borrar");
    let tabla=document.querySelector("#agenda");
    borrar.addEventListener("click",function (){
        agenda.clear();
       tabla.remove();
      // window.location.reload();
    })
    boton.addEventListener("click",function (){
        let nombre=document.querySelector("#nombre").value;
        let telefono=document.querySelector("#telefono").value;
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.trim()) && telefono.match(/^\d{9}$/)){
            //como en los arrays era push,en conjuntos es add y en mapas es set
           // let lingitud=agenda.size;
            //agenda.set(nombre,apellido,telefono);
            //if (agenda.size==(lingitud+1)){
              //  mostrarAgenda(nombre,apellido,telefono);
           // }


            //otra forma,mas efectiva de comparar si se realiza la inserccion en el map
            if (!agenda.has(nombre)){
                agenda.set(nombre,telefono);
                mostrarAgenda(nombre,telefono);
            }
        }else {
                document.querySelector(".error").textContent="los datos de nombre y telefono son obligatorios"
            }
    })


}
function mostrarAgenda(nombre,telefono){
    let tabla=document.querySelector("#agenda");

    //agregar ese contacto a la tabla
    let fila =document.createElement("tr");
    tabla.appendChild(fila);
    //diseña y crea la celda de nombre de contacto
    let celda1=document.createElement("td");
    celda1.classList.add("celda");
    celda1.textContent=nombre;
    tabla.appendChild(celda1);


    //diseñar y crea la celda del telefono del contacto
    let celda3=document.createElement("td");
    celda3.classList.add("celda");
    celda3.textContent=telefono;
    tabla.appendChild(celda3);
    document.querySelector("#nombre").value="";
    document.querySelector("#telefono").value="";


}