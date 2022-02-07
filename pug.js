const express = require("express");
let { config } = require("./config");
const contenedor = require("./controlador/contenedor");
const app = express();
const hbs = require("express-handlebars")
const PORT = config.port;
const pug = require('pug');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", hbs.engine());
app.set("views", "./views/pug")
app.set("view engine", "pug")



app.get('/', (req, res, next) =>  {
    res.render('formulario');
});

app.get('/productos', async (req, res, next) =>  {
    let productos = await contenedor.getAll();
    productos = JSON.parse(productos);
    res.render('mostrarProductos', {productos});
});


app.post('/productos', async (req, res, next) => {
    let producto = req.body;
    await contenedor.save(producto);
        res.redirect("/");
    });



 app.use((err, req, res, next) => {
    res.status(500).json({ error: '500 - internal error' });
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


const server = app.listen(PORT, err=>{
    console.log(`Server on http://localhost:${PORT} ||| Clase ${config.class}`)

})
server.on("error", error => console.log(error));
