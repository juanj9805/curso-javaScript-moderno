const elMayor = (a,b)=>(a>b)? a:b;

console.log(elMayor(32,52));

const tieneMembresia = (miembro)=>(miembro)? '2dlrs':'10dls';
console.log(tieneMembresia(false));

const amigo = false;
const amigos = [
'ju',    
'carlos',
'ana',
'sara',
amigo ? 'thor':'loki',
]

console.log(amigos);

const nota = 85 ;
const grado = nota >=95?'a+':
              nota >=90?'a':
              nota >=85?'b+':
              nota >=80?'b':
              nota >=70?'c+': 'f'

console.log(grado);