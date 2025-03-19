let Amigos = [];
let listaIndiceSorteados = [];

// Función para validar y agregar un amigo.
function agregarValidarNombre (){
    let nombreAmigo = document.getElementById("amigo").value;
    // Validar que el campo no esté vacío.
    if (nombreAmigo === ""){
        alert("El campo está vacío: Por favor, ingrese un nombre.");
        return;
    } else if (Amigos.includes(nombreAmigo)){    //Validación de nombre repetido
        alert("El nombre que ingresaste ya está en la lista.");
        return;
    }
    // Agregar el amigo si pasó las validaciones
    adicionarAmigo(nombreAmigo);
}

// Función para adicionar un amigo a la lista.
function adicionarAmigo(nombreAmigo){
    Amigos.push(nombreAmigo);
    console.log("Lista de amigos actualizada", Amigos);
    actualizarListaAmigos(nombreAmigo);
    limpiarInput();
}

// Fución limpiar campo input
function limpiarInput(){
    document.getElementById("amigo").value = "";
}

//Actualizar la lista mostrada en pantalla.
function actualizarListaAmigos (nombreAmigo) {
    let listaHTMLamigos = document.getElementById("listaAmigos");
    let listaMostrar = document.createElement("li");
    listaMostrar.textContent = nombreAmigo;   // listaMostrar.id = nombreAmigo; // Asignar el nombre como ID
    listaHTMLamigos.appendChild(listaMostrar);   
}
 
// Función para sortear el amigo secreto
function sortearAmigo () {
        
    //Si ya sorteamos todos los indices de la lista de Amigos
    if (Amigos.length === 0) {
        alert("Debes ingresar nombres para realizar el sorteo.");
        return;
    } 
    
    let indiceGenerado;

    // Genera un índice que NO esté en listaIndiceSorteados (También se puede hacer con do...While.)
    for (let i = 0; i < Amigos.length; i++){
        indiceGenerado = parseInt(Math.floor(Math.random()*Amigos.length));
        if (!listaIndiceSorteados.includes(indiceGenerado)){
            listaIndiceSorteados.push(indiceGenerado);
            break;
        }  
    }      
    
    console.log(indiceGenerado);

    // Asignarle el indice sorteado al elemento correspondiente de la lista de Amigos
    let amigoSorteado = Amigos[indiceGenerado];
    console.log(`Amigo Sorteado: ${amigoSorteado}`);
    console.log("Índices sorteados:", listaIndiceSorteados);

    actualizarAmigoSorteado(amigoSorteado);
        
    if (listaIndiceSorteados.length === Amigos.length) {
        alert("Todos los amigos ya han sido sorteados.");
    }

    return amigoSorteado;
};

// Para mostrar el resultado en el HTML
function actualizarAmigoSorteado (amigoSorteado){
    let HTMLamigoSorteado = document.getElementById("resultado");
    HTMLamigoSorteado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}; 

/* Cosas que pueedene mejorar: 
1. El boton de reeiniciar juegos.
2. Agregar el enter como evento
3. El reinicio automático del sorteo una vez se sorteen todos los amigos.*/