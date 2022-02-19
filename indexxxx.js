// // Consigna 1: Modiﬁcar el último entregable para que disponga de un canal de websocket que
// // permita representar, por debajo del formulario de ingreso, una tabla con la lista de productos en
// // tiempo real.
// // - Puede haber varios clientes conectados simultáneamente y en cada uno de ellos se reﬂejarán
// // los cambios que se realicen en los productos sin necesidad de recargar la vista.
// // - Cuando un cliente se conecte, recibirá la lista de productos a representar en la vista.
// // >> Aspectos a incluir en el entregable:
// // Para construir la tabla dinámica con los datos recibidos por websocket utilizar Handlebars en el
// // frontend. Considerar usar archivos públicos para alojar la plantilla vacía, y obtenerla usando la
// // función fetch( ). Recordar que fetch devuelve una promesa.

// // const express = require("express");
// // const hbs = require("express-handlebars")
// // const contenedor = require("./contenedor")
// // const app = express();
// // const PORT = 3001;
// // let path = require("path");
// // let { Server:HttpServer} = require("http");
// // let { Server:SocketIO} = require("socket.io");


// // app.use(express.static("./public/"));

// // app.use(express.json());
// // app.use(express.urlencoded({extended:true}));
// // app.set('view engine', './views/hbs')
// // app.set('views', path.join(__dirname, 'views'))

// // let http = new HttpServer(app);
// // let io = new SocketIO(http);

// // let clientes = [];
// // let productos = [];

// // io.on("connection", socket=>{
// //     console.log("Nuevo cliente conectado", socket.id);
// //     socket.emit("init", clientes);
// // });


// // app.get("/", (req, res, next)=>{
// //     res.render("index");
// // })

// // app.get("/productos", async(req, res, next)=>{
// //     let productos = await contenedor.getAll();
// //     productos = JSON.parse(productos);
// //     res.render("misProductos", {productos})
// // })

// // app.post("/productos", async(req,res,next)=>{
// //     let producto = req.body;
// //     await contenedor.save(producto);
// //     res.redirect('/')});

// // app.listen(PORT, err=>{
// //     console.log(`Server on http://localhost:${PORT}`);
// // })

// const express = require("express");
// let { config } = require("./config");
// const contenedor = require("./controlador/contenedor");
// const app = express();
// const hbs = require("express-handlebars")
// const PORT = config.port;


// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.engine("handlebars", hbs.engine());
// app.set("views", "./views/hbs")
// app.set("view engine", "handlebars")



// app.get("/"), (req, res, next) => {
//     res.render("formulario");
// }


// app.get("/productos", async(req, res, next) => { 
//     let productos = await contenedor.getAll();
//     productos = JSON.parse(productos);
//     res.render("mostrarProductos", {productos});
// });


// app.post('/productos', async (req, res, next) => {
//     let producto = req.body;
//     await contenedor.save(producto);
//         res.redirect("/");
//     });



// const server = app.listen(PORT, ()=>{
//     console.log(`Helooo, estamos escuchando en esta uri: http://localhost:${PORT}`)
// });

// //mensajes para errores del servidor
// app.use((err, req, res, next) => {
//     res.status(500).json({ error: err.message });
// });
// app.use((req, res, next) => {
//     res.status(404).json({ error: '404 - not found' });
// });
// app.use((err, req, res, next) => {
//     res.status(401).json({ error: '401 - not authorized' });
// });
// app.use((err, req, res, next) => {
//     res.status(403).json({ error: '403 - forbidden' });
// });


// server.on("error", error => console.log(error));