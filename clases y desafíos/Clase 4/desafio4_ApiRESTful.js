/* Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:

GET '/api/productos' -> devuelve todos los productos.
GET '/api/productos/:id' -> devuelve un producto según su id.
POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
DELETE '/api/productos/:id' -> elimina un producto según su id. */


const express = require("express");
const contenedor = require("./contenedor");
const app = express();
// let multer = require("multer");
// let path = require("path");
const PORT = 8080;
let FRASE = `Desafío 4 Api RESTful`;

const { Router } = express;

let productos = [];
let routerProductos = new Router();

// app.use("/folder", express.static("Clase18135"));
//busca el index.html
app.use(express.static("Clase18135"));
// http://localhost:8080/public/

app.use(express.json());
app.use(express.urlencoded({extended:true}));




// let routerPersonas = new Router();



//1) GET '/api/productos' -> devuelve todos los productos.

routerProductos.get("/", (req, res, next)=>{ 
    contenedor.getAll().then(data=> {
        let productos = JSON.parse(data);
        res.json(productos);
    })

    //devuelve todos los productos
})

///2) GET '/api/productos/:id' -> devuelve un producto según su id.


routerProductos.get("/:id", (req, res, next)=>{ 

    contenedor.getById(req.params.id).then(data => {
        if(data.id!=undefined){
            res.json(data);
        } else {
            res.json({ error : 'producto no encontrado' });
            
        }
    })
});

//3) POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.


routerProductos.post('/', (req, res, next) => {
    let producto = req.body;
    contenedor.save(producto).then(data => {
        res.json({atencion: "producto guardado"});
    });
});


//4)PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.



routerProductos.put("/:id", (req, res, next)=>{ 
    let producto = req.body;
    contenedor.update(req.params.id, producto).then(data => {
        res.json(data)
    });
});


////5)DELETE '/api/productos/:id' -> elimina un producto según su id. */




routerProductos.delete("/:id", (req, res, next)=>{ 
    contenedor.deleteById(req.params.id).then(data => {
        res.json({ atencion: 'producto eliminado' });
    });
});

app.use("/api/productos", routerProductos);


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
