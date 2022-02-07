//1) Utilizando la misma API de productos del proyecto entregable de la clase
// anterior, construir un web server (no REST) que incorpore:

// a) Un formulario de carga de productos en la ruta raíz (conﬁgurar la ruta
// '/productos' para recibir el POST, y redirigir al mismo formulario).

// b) Una vista de los productos cargados (utilizando plantillas de
// handlebars) en la ruta GET '/productos'.

// c) Ambas páginas contarán con un botón que redirija a la otra.

// 2) Manteniendo la misma funcionalidad reemplazar el motor de plantillas
// handlebars por pug.

// 3) Manteniendo la misma funcionalidad reemplazar el motor de plantillas
// handlebars por ejs.

// 4) Por escrito, indicar cuál de los tres motores de plantillas preﬁeres para tu
// proyecto y por qué.

// >> Aspectos a incluir en el entregable:

// - Realizar las plantillas correspondientes que permitan recorrer el array de productos y
// representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto,
// el precio y su foto (la foto se mostrará como un imágen en la tabla)
// - En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.

// >> Sugerencias:
// - Utilizar iconﬁnder (https://www.iconﬁnder.com/free_icons) para obtener la url de las
// imágenes de los productos (click derecho sobre la imagen -> copiar dirección de la
// imagen)

/* Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:

GET '/api/productos' -> devuelve todos los productos.
GET '/api/productos/:id' -> devuelve un producto según su id.
POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
DELETE '/api/productos/:id' -> elimina un producto según su id. */


const express = require("express");
let { config } = require("./config");
const contenedor = require("./contenedor");
const app = express();
const hbs = require("express-handlebars")
const PORT = config.port;

const { Router } = express;
let routerProductos = new Router();
let productos = [];

// app.use("/folder", express.static("Clase18135"));
//busca el index.html
// app.use(express.static("Clase18135"));
// http://localhost:8080/public/

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", hbs.engine());
app.set("views", "./views/hbs")
app.set("view engine", "handlebars")


routerProductos.post('/', (req, res, next) => {
    let producto = req.body;
    contenedor.save(producto).then(data => {
        res.json({atencion: "producto guardado"});
        res.redirect("/");
        // res.render("index")
    });
});


// app.post("/productos", (req, res, next) => { 
//     let producto = req.body;
//     contenedor.save(producto).then(data => {
//         res.json({atencion: "producto guardado"});
//     });
//     res.render("index");
//     res.redirect("/");
// })

app.get("/productos", (req, res, next) => { 
   
    res.render("index");
})


// app.post("/personas", (req, res, next) => { 
//     personas.push(req.body);
//     console.log(req.body);
//     res.redirect("/");
// })
    //devuelve todos los productos


//1) GET '/api/productos' -> devuelve todos los productos.

app.get("/", (req, res, next)=>{ 
    contenedor.getAll().then(productos=> {
        // let productos = JSON.parse(data);
        // res.json(productos);
        res.render("index", {productos});
    })

    //devuelve todos los productos
})

///2) GET '/api/productos/:id' -> devuelve un producto según su id.


app.get("/:id", (req, res, next)=>{ 

    contenedor.getById(req.params.id).then(data => {
        if(data.id!=undefined){
            res.json(data);
        } else {
            res.json({ error : 'producto no encontrado' });
            
        }
    })
});

//3) POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.


// app.post('/', (req, res, next) => {
//     let producto = req.body;
//     contenedor.save(producto).then(data => {
//         res.json({atencion: "producto guardado"});
//     });
// });


//4)PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.



app.put("/:id", (req, res, next)=>{ 
    let producto = req.body;
    contenedor.update(req.params.id, producto).then(data => {
        res.json(data)
    });
});


////5)DELETE '/api/productos/:id' -> elimina un producto según su id. */




app.delete("/:id", (req, res, next)=>{ 
    contenedor.deleteById(req.params.id).then(data => {
        res.json({ atencion: 'producto eliminado' });
    });
});



const server = app.listen(PORT, ()=>{
    console.log(`Helooo, estamos escuchando en esta uri: http://localhost:${PORT}`)
});

//mensajes para errores del servidor
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});
app.use((req, res, next) => {
    res.status(404).json({ error: '404 - not found' });
});
app.use((err, req, res, next) => {
    res.status(401).json({ error: '401 - not authorized' });
});
app.use((err, req, res, next) => {
    res.status(403).json({ error: '403 - forbidden' });
});


server.on("error", error => console.log(error));
