// comentar una linea
/*
abre un comentario

cierra el comentario
*/

// Variable

/*
Lenguajes de programacion tipados: Java, c++, C
integer
string
boolean

Lenguaje de programacion no tipado
--Superset TypeScript

let: Declara la variable en su entorno local
var: Declara la variable en un entorno global
const: Es una variable fija

this.
*/

const NumeroDia = 5;

console.log(NumeroDia);

let nombre='Pedro';

console.log(nombre);

nombre='Luis';

console.log(nombre);

if(true){
    let nombre='Juan';
}
console.log(nombre);

var saludo = 'Hola';

console.log(saludo);

function saludar(){
    this.nombre = 'Gustavo';
    console.log(this.nombre);
    let nombre = 'Linda';
    console.log(this.nombre,nombre);
}

saludar();

