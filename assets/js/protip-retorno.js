function crearPersona(nombre,apellido){
    return{
        nombre,
        apellido,
    }
}

const crearPersona2 = (nombre,apellido) => ({nombre,apellido});

const persona = crearPersona('juan','barrera')
const persona2 = crearPersona2('juan','barrera')
console.log(persona);
console.log(persona2);

function printArguments(){
    console.log(arguments);
}

printArguments(1,2,3,4,5)