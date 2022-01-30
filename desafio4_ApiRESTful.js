const express = require("express");
const { Router } = express;
let multer = require("multer");
// let path = require("path");
const app = express();
const PORT = 8080;
let FRASE = `Desafío 4 Api RESTful`;

let productos = [];


// app.use("/folder", express.static("Clase18135"));
app.use(express.static("Clase18135"));
// http://localhost:8080/public/

app.use(express.json());
app.use(express.urlencoded({extended:true}));




let routerProductos = new Router();
// let routerPersonas = new Router();


//////1)

routerProductos.get("/", (req, res, next)=>{ 
    res.json(productos);

    //devuelve todos los productos
})

//////3)

routerProductos.post("/", (req, res, next)=>{ 
    productos.push(req.body)
    res.json(productos);

    //recibe y agrega un producto, y lo devuelve con su id asignado.
    // http://localhost:8080/public/
})

//////2)


// routerProductos.get("/api/productos/:id", (req, res, next)=>{ 
//     res.json(productos);

    //devuelve un producto según su id
// })






//////4)


// routerProductos.put("/api/productos", (req, res, next)=>{ 
//     res.json(productos);

    //recibe y actualiza un producto según su id.
// })


//////5)



// routerProductos.delete("/api/productos", (req, res, next)=>{ 
//     res.json(productos);

//     //elimina un producto según su id.
// })

app.use("/api/productos", routerProductos);


app.listen(PORT, ()=>{
    console.log(`Helooo, estamos escuchando en esta uri: http://localhost:${PORT}`)
});

// routerMascotas.post("/", (req, res, next)=>{
//     mascotas.push(req.body)
//     res.json(mascotas);
// })

// routerPersonas.get("/", (req, res, next)=>{
//     res.json(personas);
// })

// routerPersonas.post("/", (req, res, next)=>{
//     personas.push(req.body)
//     res.json(personas);
// })


// app.use("/mascotas", routerMascotas);

// app.use("/personas", routerPersonas);

///////////////////////////////////////AGREGAR UNA FOTO EN CARPETA UPLOADS///////////////

// let storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, "uploads"); //callback error
//     },
//     filename: (req, file, cb)=>{
//         cb(null, `${Date.now()}-${file.originalname} `);
//     }
// })

// let ulploadMiddleare = multer({storage})


// app.post("/uploadfile", ulploadMiddleare.single("myFile"), (req, res, next) => {
//     let file = req.file;
//     console.log("Entramos al post", file);
//     if(!file){
//         new Error("Error en la carga de la imagen");
//     }
//     res.send(file);
// })

////////////////////////////////////////////////////////////////////////////////




// app.post("/uploadmultifile", ulploadMiddleare.array("myFiles"), (req, res, next) => {
//     let file = req.file;
//     console.log("Entramos al post", file);
//     if(!file){
//         new Error("Error en la carga de la imagen");
//     }
//     res.send(file);
// })



