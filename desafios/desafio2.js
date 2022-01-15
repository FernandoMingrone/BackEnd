// let fs = require("fs");
// let os = require("os");

// const delay = ret => {
//     for (let i = 0; i < ret*3e6; i++) {}
// }

// class ManejadorArchivos{
//     constructor(url_archivo){
//         this.archivo = url_archivo;
//     }
//     ///////////////////////FORMA SINCRONICA
//     // createFile(){
//     //     try {
//     //         let insertData = new Date();
//     //         let response = fs.writeFileSync(`${this.archivo}`, `${insertData}`, "utf-8");
//     //         return response;
//     //     } catch (error) {
//     //         console.log(error);
//     //     }}


//     // MINUTOS 2:47 

//     ///////////////////////FORMA ASINCRONICA
//         createFile(){
//         try {
//             let insertData = new Date();
//             let mi_var = fs.writeFileSync(`${this.archivo}`, `${insertData}`, "utf-8");
//             console.log("Mi variable", mi_var);
//             delay(1000);
//             console.log("despues de unos seg ---");
//             return mi_var;
//         } catch (error) {
//             console.log(error);
//         }}

//     read(){
//         try {
//             return fs.readFileSync(`${this.archivo}`, "utf-8");
//         } catch (error) {
//             console.log(error);
//         }

//     }
// }

// let controlador = new ManejadorArchivos("./fyh.txt");
// let res = controlador.createFile();
// console.log(res);

let fs = require("fs")

class Producto{
    constructor(nombre, precio, foto){
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ContenedorDeProductos{
    constructor(url_archivo){

        this.url = url_archivo;
        this.arrayProductos = [];
    }

    save(Object){
        try{
            this.arrayProductos.push(Object);
            let json = JSON.stringify(this.arrayProductos);
            let mi_obj = fs.appendFileSync(`${this.url}`, json, "utf-8");
            
            return Object.id;
        }catch(error){
        console.log(error);
    }
    }


        
    }


let objeto1 = {nombre: "Fernando", apellido: "Mingrone", id: 1};
let objeto2 = {nombre: "Alejandro", apellido: "Mingronfe", id: 2};
let objeto3 = {nombre: "Patricio", apellido: "Mingroneds", id: 3};
let controlador = new ContenedorDeProductos("./productos.txt");
let res = controlador.save(objeto1);
console.log(res);



////////////DESAFIO 2

// Manejo de archivos

// Formato: carpeta comprimida con el proyecto.

// >> Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el
// nombre del archivo con el que va a trabajar e implemente los siguientes métodos:


// ● save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

// ● getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.

// ● getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.

// ● deleteById(Number): void - Elimina del archivo el objeto con el id buscado.

// ● deleteAll(): void - Elimina todos los objetos presentes en el archivo.



// Sugerencia: usar un archivo para la clase y otro de test, que la importe

// >> Aspectos a incluir en el entregable:

// - El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.

// - Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.

// - Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con
// async/await y manejo de errores.

// - Probar el módulo creando un contenedor de productos, que se guarde en el archivo:
// “productos.txt”

// - Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para

// verificar el correcto funcionamiento del módulo construído.

// - El formato de cada producto será : {
//  title: (nombre del producto),
//  price: (precio),
//  thumbnail: (url de la foto del producto)