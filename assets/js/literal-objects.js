let personaje = {
    nombre: 'juan jose',
    apellido: ' jose',
    vivo: false,
    carro: 'mazda',
    trajes: [1,2,3,4],
    direccion: {
        zip: '10880,90265',
        ubicacion: 'colombia',
    }
}

console.log(personaje.direccion.zip);
console.log(personaje.trajes[personaje.trajes.length -1]);

const x = 'nombre';
console.log(personaje[x]);

delete personaje.nombre

console.log(personaje);

