let a = 10;
let b = a;
a = 30 ;

// console.log({a,b});

let juan = {nombre: 'juan'};
let ana  = juan;
ana.nombre = 'ana'

// console.log({juan,ana});

const cambiaNombre = ( { ...persona}) =>{
    persona.nombre = 'tony';
    return persona;

}

let peter = {nombre: 'peter'};
let tony  = cambiaNombre( peter);

// console.log({peter, tony});


const frutas = ['pera','manzana','fresa']
// const otrasFrutas = [ ...frutas];
// console.log(otrasFrutas);

// otrasFrutas.push('mora');

// console.log(otrasFrutas);
// console.table(frutas);

console.time('spread');
const otrasFrutas = [ ...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = [frutas.slice()];
console.timeEnd('slice');