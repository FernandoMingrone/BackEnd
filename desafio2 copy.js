

// let fs = require("fs");

// class Producto {
//     constructor(title, price, thumbnail, id) {
//         this.title = title;
//         this.price = price;
//         this.thumbnail = thumbnail;
//         this.id = id;
//     }
// }

// class ContenedorDeProductos {
//     constructor(url_archivo) {

//         this.url = url_archivo;

//         try {
//             this.arrayProductos = fs.readFileSync(this.url, "utf-8");
//             this.arrayProductos = JSON.parse(this.productos);
//         }catch(error){
//             this.arrayProductos = [];
//         }
//     }

//     async save(title, price, thumbnail, id) {
//         try {
//             let productoNuevo = new Producto(title, price, thumbnail, id);
//             this.arrayProductos.push(productoNuevo);
//             let productoJson = JSON.stringify(this.arrayProductos);

//             await fs.promises.writeFile(this.url, productoJson);

//             console.log(productoNuevo.id);

//             //NO SE PORQUE NO ME DEVUELVE NADA EL RETURN, Y EL CONSOLE.LOG SI...

//             //return productoNuevo.id;

//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async getAll() {
//         try {
//         let contenido = await fs.promises.readFile(this.url, "utf-8");
//         let contenidoParseado = console.log(JSON.parse(contenido));
//         return contenidoParseado;
//         }
//         catch(err) {
//             console.log("Error de lectura!", err);
//         }

//     }

//     async getById(id){ 
//         try {
//              let busqueda = this.arrayProductos.filter(producto => producto.id == id);
//              console.log(busqueda); 
//         } catch(error) {
//             console.log(error);
//         }
//     };

//     async escribir(texto){
//             try{
//                 await fs.promises.writeFile(this.url, texto);
//             }catch(err){
//                 console.log(err)
//             }
//         }

//     async deleteById(id){
        
//             let productos = await this.getAll();
//           productos = productos.filter(producto => producto.id ==! id);
//             this.escribir(JSON.stringify(productos))
//             console.log(productos)
//     }

//     //////NO PUDE BORRAR POR ID, ME DICE QUE NO PUEDE LEER FILTER DE UNDEFINED;




//     async deleteAll(){
//         await this.escribir(" ")
    
//     }
// }



// let archivoDeProductos = new ContenedorDeProductos("./productos.txt");
// archivoDeProductos.save("Notebook", 75000, "https://picsum.photos/id/0/600/300", 1 )
// archivoDeProductos.save("Frambuesas", 2000, "https://picsum.photos/id/102/600/300", 2 )
// archivoDeProductos.save("Auto", 800000, "https://picsum.photos/id/111/600/300", 3 )
// // archivoDeProductos.deleteById(1);
// archivoDeProductos.getAll();
// archivoDeProductos.getById(3);
// // archivoDeProductos.deleteAll()

