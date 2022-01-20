const http = require("http");
const moment = require("moment");
const PORT = 3006;
const server = http.createServer((req, res)=> {
    let response = "Mensaje por defecto";
    let hora_actual = 20;//moment().format("HH")

    if(hora_actual > 6 && hora_actual < 12){ response = "Muy buenos dias!";}
    else if( hora_actual >= 12 && hora_actual < 19) { response = "Buenas tardes";}
    else{response = "Buenas noches"}
    res.end(`SALUDOS --> ${response}`);
})

server.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`)
})

