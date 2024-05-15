// let a = 9;

// if( a >10 ){
//     console.log('a mayor');
// }else{
//     console.log('menor');
// }
// console.log('fin');

// const hoy = new Date();

// console.log(hoy);
// let dia = hoy.getDay();

// console.log({dia});

// if(dia === 3){
//     console.log('martes');
// }else{
//     console.log('cagaste');
// }

let dia = 1;

const diaLetras = {
0: ()=>  'd' ,
1: ()=>  'l',
2: ()=> 'm',
3: ()=>  'mi',
4: ()=>  'j',
5: ()=>  'v',
6: ()=>  's',
}

console.log(diaLetras[dia] || 'dia malo');
