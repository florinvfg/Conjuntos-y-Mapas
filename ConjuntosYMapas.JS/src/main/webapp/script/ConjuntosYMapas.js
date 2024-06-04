window.onload=function (){
    let conjunto=new Set(["uno","dos","tres"]);
    let nombres =new Set("Irene","Florin","Ruben","Irina");
    //recorido con for(intem of array)
    for (numero of conjunto){
        console.log(numero);
    }
    for (nombre of nombres){
        console.log(nombre);
    }



}