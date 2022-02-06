const express = require("express");//requerimos express
let { config } = require("./config");
let fs = require("fs");
const hbs = require("express-handlebars")
const app = express(); //definimos app
const PORT = config.port;

app.engine("handlebars", hbs.engine());
app.set("views", "./views/hbs")
app.set("view engine", "handlebars")

app.get("/", (req, res, next) => {  //llamamos a app
    // let data = {
    //     titulo: "Interestellar",
    //     mensaje: "Es una película épica de drama y ciencia ficción británico-estadounidense y canadiense de 2014, dirigida por Christopher Nolan y protagonizada por Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine y Matt Damon.",
    //     autor: "Christopher Nolan",
    //     version: 2014,
    // }

    let data = {
    nombre: "Mauro 237-5",
    apellido: "Di Cesare",
    edad: 27,
    email: "mauro@dicesare.com",
    telefono: 12343513,
}
    res.render("index", data);
})

app.listen(PORT, err=>{
    console.log(`Server on http://localhost:${PORT} ||| Clase ${config.class}`)

})  //inicializamos el servidor

//ARQUITECTURA SOA // PENSAR COMO EL CLIENTE // PENSAR POR EL NEGOCIO DEL CLIENTE
// APLICACION MODULAR CON BASE A LOS SERVICIOS DEL CLIENTE
//CADA SERVICO ES UN COMPONENTE


// app.engine("gab", async (filePath, options, callback)=>{
//     try {
//         const content = fs.promises.readFile(filePath, "utf-8")
//         const rendered = (await content).toString()
//             .replace("^^titulo$$", `${options.titulo}`)
//             .replace("^^mensaje$$", `${options.mensaje}`)
//             .replace("^^autor$$", `${options.autor}`)
//             .replace("^^version$$", `${options.version}`)
//             return callback(null, rendered); //callback error
//     } catch (error) {
//         return callback(new Error(error));
//     }
// });