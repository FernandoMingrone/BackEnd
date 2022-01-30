const express = require("express");
const { Router } = express;
let multer = require("multer");""
let path = require("path");
const app = express();
const PORT = 8080;
let FRASE = `Hola Clase 18135, bien o que?`;
let personas = [];
let mascotas = [];

app.use("/folder", express.static("Clase18135"));
app.use(express.static("Clase18135"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let routerMascotas = new Router();
let routerPersonas = new Router();

routerMascotas.get("/", (req, res, next)=>{ 
    res.json(mascotas);
})

routerMascotas.post("/", (req, res, next)=>{
    mascotas.push(req.body)
    res.json(mascotas);
})

routerPersonas.get("/", (req, res, next)=>{
    res.json(personas);
})

routerPersonas.post("/", (req, res, next)=>{
    personas.push(req.body)
    res.json(personas);
})


app.use("/mascotas", routerMascotas);

app.use("/personas", routerPersonas);


let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}-${file.originalname} `);
    }
})

// ${path.extname(file.originalname)} extensiones

let ulploadMiddleare = multer({storage})

app.get("/", (req, res, next) => {
    res.send("ok!");
})


app.post("/uploadfile", ulploadMiddleare.single("myFile"), (req, res, next) => {
    let file = req.file;
    console.log("Entramos al post", file);
    if(!file){
        new Error("Error en la carga de la imagen");
    }
    res.send(file);
})

app.post("/uploadmultifile", ulploadMiddleare.array("myFiles"), (req, res, next) => {
    let file = req.file;
    console.log("Entramos al post", file);
    if(!file){
        new Error("Error en la carga de la imagen");
    }
    res.send(file);
})


app.listen(PORT, ()=>{
    console.log(`Helooo, estamos escuchando en esta uri: http://localhost:${PORT}`)
});
