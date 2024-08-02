/* Operadores artitmeticos */
/* 
+: Concatenacion 
La concatenacion ocurre cuando HAY un string o mas en una operacion
Pasa el dato distinto de string a string y los une
Devuelve SIEMPRE un string
+: Suma
La suma ocurre cuando NO hay string en una operacion
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER
- Resta
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER
* Multiplicacion
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER
/ Division
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER
% modulo/resto de la division
Pasa el dato distinto de numero a numero
Devuelve siempre NUMBER

REGLAS:
Cualquier dato operado con NaN exepto la concatenacion da como resultado un NaN
*/



undefined + "Nan" //"undefinedNan", string

"hola" + "1" // "hola1", string

true  + false //1, number   aca me equivoque

Number (NaN) - Number (NaN) //NaN, number 

0 +  null // 0, number

2 * "5" //10, number 


/* 
Tipos de variables 
var 
let
const



*/

var nombreVar = "pepe"
var nombreVar = "ola"
nombreVar = "adios"
//se puede declarar sin valor inicial -> automáticamente js le asignará undefined 
console.log(nombreVar)



/* /* Instalamos Error lens */
let nombreLet = "pepe"
nombreLet = "reasignando let"
console.log(nombreLet)


//let nombre = "juan" /* Error lens (extension) dice que no puedo redeclarar la misma variable con la palabra let delante, si se puede poniendo nombre =juan es decir REasignando*/  */




const nombreConst = "soy una constante"
console.log(nombreConst)

/* prompt("Decime tu nombre")
alert(nombreConst) */


let edad = Number(prompt("Escribe tu edad"));


    

if (isNaN(edad)) {
    alert("Te dije que pongas tu edad, con numeritos ctm. Por favor recarga la página o aprieta F5");
}else{
    alert( "En tu próximo cumpleaños vas a cumplir " + (edad + 1) );
}















