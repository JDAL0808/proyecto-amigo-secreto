let listaDeAmigos = [];
let numeroaleatorio = 0;


//funcion utilizada para dejar en blanco el input
function limpiarEntrada(){
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}


//para limpiar la lista
function limpiarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 
}


function EscribirAmigos (){
    //limpiamos la lista 
    limpiarLista();
    //seleccionamos el elemento
    let lista = document.querySelector('#listaAmigos');
    //hacemos un bucle donde utilizamos length para saber el largo de el arreglo
    for (let contador = 0  ; contador<listaDeAmigos.length; contador++){
        //creamos el elemento
        elemento = document.createElement('li');
        //le ponemos texto
        elemento.innerHTML = listaDeAmigos[contador]; 
        //lo metemos dentro de la lista
        lista.appendChild(elemento);
    }
}


function agregarAmigo(){
    //Primero obtenemos el valor de amigo
    let amigo = document.getElementById('amigo').value;
    //validamos si el campo no esta en blanco
    if (amigo == ''){
        alert('No puede ingresar un campo en blanco');
        // se crea otro if para validar que no sea el mismo nombre

    }else if(listaDeAmigos.includes(amigo)){
            alert('invalido no puedes incluir el mismo nombre dos veces, diferencia un amigo del otro');
        }else{
            //luego agregamos este amigo a la lista 
            listaDeAmigos.push(amigo);
            //le decimos al usuario que esta bien y puede ingresar otro amigo
            document.querySelector('h2').innerHTML = 'Ingrese otro amigo o sortea'
            //hacemos un console log para verificar que el amigo se añadio a la lista
            console.log(listaDeAmigos)
            //escribimos el amigo
            EscribirAmigos();
    }
    
    //limpiamos el input
    limpiarEntrada();

}


//generamos el mumero aleatorio
function generarNumeroAleatorio(){
   numeroaleatorio = Math.floor(Math.random()*listaDeAmigos.length-1)+1;
   return numeroaleatorio; 
}


function sortearAmigo(){
    //verificamos que el arrglo no este vacio y si solo hay un participante tampo se podria jugar el amigo secreto 
    if(listaDeAmigos.length != 0 && listaDeAmigos.length != 1){
        //generamos el numero
        generarNumeroAleatorio();
        //limpiamos la lista anterior para que no se vea
        limpiarLista();
        //ponemos el resultado en pantalla
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${listaDeAmigos[numeroaleatorio]}`
        //desebilitamos el botos de sortear
        document.querySelector('#sortear').setAttribute('disabled','true');

    }else{
        alert('aun no se puede sortear no hay suficientes participantes');
    }
}
