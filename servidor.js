///DESAFIO 6

const express = require('express');
const contenedor = require('./controladores/contenedor');
let { config } = require('./config');
let path = require("path");
const app = express();
let { Server:SocketIO} = require("socket.io");
const { Server: HttpServer } = require('http')
let moment = require("moment");

const PORT = config.port

const hbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", hbs.engine());
app.set("views", "./views/hbs");
app.set('view engine', 'handlebars');

let http = new HttpServer(app);
let io = new SocketIO(http);

let productos = [];

let students = [];
let users = [];

io.on("connection", socket=>{
    

    socket.on("from_front", data => {

        //Generador de productos
        productos.push({...data, id:socket.id})
        contenedor.save(...productos);
       io.sockets.emit("fill_message", productos)
    })

    /////CHAT

    console.log("Nuevo cliente conectado:", socket.id);

    socket.emit('initChat', {students, users});

    socket.on("from_frontChat", data =>{
        let length_user = false;
        if(students.length > 0) length_user = true;
        if(length_user){
            if(auth(data, socket.id)){
                users.push({email:data.email, id:socket.id, status:"active"});
                students.push({...data, id:socket.id, date: moment().format("HH:mm DD-MM-YYYY") });
                io.sockets.emit("fill_messageChat", students)
            }else{
                socket.emit("errorChat", `El usuario ${data.email} ya está en uso`);
            }
        }else{
            users.push({email:data.email, id:socket.id, status:"active"});
            students.push({...data, id:socket.id, date: moment().format("HH:mm DD-MM-YYYY") });
            io.sockets.emit("fill_messageChat", students)
        }      
    })

    // socket.on("disconnectChat", data =>{
    //     // data.id
    // });
});


let auth = (data, socket_id) =>{
    let est = students.find(student => student.id == socket_id);
    console.log(est);
    if(!est) return true
    if(est.length > 0 ) return true

    let email = students.find(student => student.email == data.email);
    if(!email) return true
    if(email.length > 0 ) return false
    
    return true;
}


app.get('/', (req, res, next) =>  {
    res.render('formulario');
});

app.get('/productos', async (req, res, next) =>  {
    let productos = await contenedor.getAll();
    productos = JSON.parse(productos);
    res.render('mostrarProductos', {productos});
});

app.post("/productos", async(req,res,next)=>{
    let producto = req.body;
    await contenedor.save(producto);
    res.redirect('/')});

//mensajes para errores del servidor
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

const server = http.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});