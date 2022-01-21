////FUNCION PARA SACAR UN NUMERO ALEATORIO

// let getRandom = () =>{
//     return Math.floor(Math.random() * 20);
// }


////DEFINIMOS EL OBJETO resultados

// let resultados = {};


///DEFINIMOS UN CICLO FOR QUE ITERA MIENTRAS i sea menor de 10000
///SI EXISte resultados[numAleatorio] se le va a sumar 1 y sino va a ser = 1


// for (let i = 0; i < 10000; i++) {
//     let numAleatorio = getRandom();
//     resultados[numAleatorio] = resultados.hasOwnProperty(numAleatorio) ? resultados[numAleatorio] + 1 : 1;
// }
// console.log(resultados);

// const productos = [
//     {id:1, nombre:'Escuadra', precio: 323.45},
//     {id:2, nombre:'Calculadora', precio: 234.56},
//     {id:3, nombre:'Globo terráqueo', precio: 145.67},
//     {id:4, nombre:'Paleta pintura', precio: 456.78},
//     {id:5, nombre:'Reloj', precio: 67.89},
//     {id:6, nombre:'Agenda', precio: 78.90}
// ]

// let respuesta = productos.reduce((prev, obj, i) => {
//     if(i == 0){
//         return {
//             nombres: obj.nombre,
//             total : obj.precio,
//             minor: obj,
//             major: obj,
//         }
//         }
//         else {
//             let minor = prev.minor.precio < obj.precio ? prev.minor : obj;
//             let major = prev.major.precio > obj.precio ? prev.major : obj;
//             return {
//                 nombres: `${prev.nombres}, ${obj.nombre}`,
//                 total: prev.total + obj.precio,
//                 minor,
//                 major
//             }
//         }
// }, {})

// respuesta.promedio = (respuesta.total/productos.length).toFixed(2);
// respuesta.total = respuesta.total.toFixed(2);

// console.log(respuesta)