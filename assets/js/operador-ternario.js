const dia = 12;
const horaActual = 12;

let horaApertura; 
let mensaje;

// if( dia === 0 || dia === 6){
//     console.log('finde');
//     horaApertura = 9;
// }else{
//     console.log('semana');
//     horaApertura = 11;
// }

// console.log(horaApertura);


// if( horaActual >= horaApertura){
//    mensaje='esta abierto'
// }else{
//    mensaje=`cerrado abrimos a ${horaApertura}`
// }


// ------------------ FORMA OP DE RESUMIR 12 LINEAS A 3 -----------------------
horaApertura = ( [0,6].includes(dia))? 9:11;
mensaje = (horaActual >= horaApertura)? 'esta abierto':`cerrado vuelva a las  ${horaApertura}`
console.log(mensaje);
