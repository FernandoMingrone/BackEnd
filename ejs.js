const express = require("express");
let { config } = require("./config");
const contenedor = require("./contenedor")
const app = express();
const PORT = config.port;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", "./views/ejs");

app.get("/", (req, res, next)=>{
    res.render("index");
})

app.get("/productos", async(req, res, next)=>{
    let productos = await contenedor.getAll();
    productos = JSON.parse(productos);
    res.render("misProductos", {productos})
})

app.post("/productos", async(req,res,next)=>{
    let producto = req.body;
    await contenedor.save(producto);
    res.redirect('/')});

app.listen(PORT, err=>{
    console.log(`Server on http://localhost:${PORT} ||| Clase ${config.class}`);
})

