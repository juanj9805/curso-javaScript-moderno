let juegos = ['zelda','mario','goku','tsubaza']
// console.log(juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[ juegos.length - 1];

// console.log(primero);

// console.log(ultimo);

juegos.forEach( (elemento, indice, arr)=>{
    console.log({elemento,indice,arr});
} );

juegos.push(' esponja');
let nuevaLongitud = juegos.unshift(' juan');
let juegoBorrado = juegos.pop();


let pos = 1;

let borrados = juegos.splice(pos,3);
// console.log({juegos,juegoBorrado});
console.log({borrados});

let index = juegos.indexOf('tsubaza');

console.log({index});