const express = require("express");//requerimos express
let { config } = require("./config");
const app = express(); //definimos app
const PORT = config.port;
let personas = [];

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs"); //set revisa el motor de plantillas
app.set("views", "./views/ejs"); //views especifica el directorio de vistas


app.get("/", (req, res, next) => { 
    res.render("index", {personas});
})

app.post("/personas", (req, res, next) => { 
    personas.push(req.body);
    console.log(req.body);
    res.redirect("/");
})

app.listen(PORT, err=>{
    console.log(`Server on http://localhost:${PORT} ||| Clase ${config.class}`)

})   