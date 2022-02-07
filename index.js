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

const express = require("express");
let { config } = require("./config");
const contenedor = require("./controlador/contenedor");
const app = express();
const hbs = require("express-handlebars")
const PORT = config.port;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", hbs.engine());
app.set("views", "./views/hbs")
app.set("view engine", "handlebars")



app.get("/"), (req, res, next) => {
    res.render("formulario");
}


app.get("/productos", async(req, res, next) => { 
    let productos = await contenedor.getAll();
    productos = JSON.parse(productos);
    res.render("mostrarProductos", {productos});
});


app.post('/productos', async (req, res, next) => {
    let producto = req.body;
    await contenedor.save(producto);
        res.redirect("/");
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
