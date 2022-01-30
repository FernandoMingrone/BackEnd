

app.get("/api/sumar/:num1/:num2", (req, res, next)=>{
    let {num1, num2} = req.params;

    res.json({response:`El total de la suma entre ${num1} y ${num2} es ${Number(num1) + Number(num2)}}`});
})

//TENEMOS TRES FORMAS DE RECIBIR INFORMACIÓN: 1)REQ.PARAMS 2)REQ.QUERY 3)REQ.BODY

//QUERY
app.get("/api/sumar", (req, res, next)=>{
    let {num1, num2} = req.query;

    res.json({response:`El total de la suma entre ${num1} y ${num2} es ${Number(num1) + Number(num2)}}`});
})


app.get("/api/operacion/:op", (req, res, next)=>{
let {op} = req.params;
let numbers = op.split("+")

    res.json({response:`El total de la suma entre ${numbers[0]} y ${numbers[1]} es ${Number(numbers[0]) + Number(numbers[1])}}`});

})


app.get("/api", (req, res, next)=>{
    res.json({response:"TOdo okkkk desde POST"});
})

app.delete("/api", (req, res, next)=>{
    res.json({response:"TOdo okkkk desde DELETE"});
})

app.put("/api", (req, res, next)=>{
    res.json({response:"TOdo okkkk desde PUT"});
})

// Ejercicio 1

app.get("/api/frase", (req, res, next)=>{
    res.json({response:FRASE});
})

app.get("/api/letras/:num", (req, res, next)=>{

    /// :num seria el params
    /// y se usa el destructuring
    let { num } = req.params;
    let respuesta = null;
    if(Number(num)){
        let frase = FRASE.split("");
        let final_num = Number(num) - 1;
        if(Number(num) > frase.lenght){
            respuesta = "El parametro esta fuera del rango";
        }else{
            respuesta = frase[final_num]
        }
    }else{
        respuesta = "El parámetro no es un número!";
    }
    res.json({response:respuesta});
})
// POST 

// ALGUNAS PETICIONES REQUIEREN EL ENVIO DE ALGUN DATO DESDE EL CLIENTE HACIA EL SERVIDOR

// Por ejempli al crear un registro, en el caso de POST. Para acceder al cuerpo del mensaje,
//incluido en la peticion, lo hacemos a traves del campo "body" del objeto peticion recibido en el callback
// el body es todo lo que nos llega por medio de formularios ya sea por JSON o formulario
// necesitamos los middleware

// PUT 

// LO HACEMOS POR PARAMETRO

// PARA DELETE TAMBIEN PARAMETRO

////////////////////////////////////////////////////////////////////////////
////////////////////////////IMPORTANTE/////////////////////////////////////

//Para que nuestro servidor express pueda interpretar en forma automatica
//mensajes de tipo JSON en formato urlencoded al recibirlos, debemos indicarlo en forma 
//explicita, agregando los middleware

//app.use(express.json())
//app.use(express.urlencoded({extended: true}))

//ACLARACION: {extended: true} precisa que el objetivo req.body contendra valores de cualquier tipo en lugar de solo cadenas ( SIN ESTA LINEA EL SERVIDOR NO SABRA COMO INTERPRETAR LOS OBJETOS RECIBIDOS)


// Ejercicio 2

//3) POST

app.post("/api/palabras", (req, res, next)=>{

    /// :num seria el params
    /// y se usa el destructuring
    let { palabra } = req.body;
    let frase = FRASE.split(" ");
    frase.push(palabra);
    FRASE = frase.join(" ");
    res.json({
        "agregada": palabra,
        "pos" : frase.length
    })

    let respuesta = null;

    res.json({response:respuesta});
})

//2) GET palabras/:pos
app.get("/api/palabras/:num", (req, res, next)=>{

    /// :num seria el params
    /// y se usa el destructuring
    let { num } = req.params;
    let respuesta = null;
    if(Number(num)){
        let frase = FRASE.split(" ");
        let final_num = Number(num) - 1;
        if(Number(num) > frase.lenght){
            respuesta = "El parametro esta fuera del rango";
        }else{
            respuesta = frase[final_num]
        }
    }else{
        respuesta = "El parámetro no es un número!";
    }
    res.json({response:respuesta});
})

//1) GET frase

app.get("/api/frase", (req, res, next)=>{
    res.json({response:FRASE});
})

//4)

app.put("/api/palabras/:pos", (req, res, next)=>{

    /// :num seria el params
    /// y se usa el destructuring
    let { palabra } = req.body;
    let { pos } = req.params;
    let pos_f = Number(pos) - 1;
    let frase = FRASE.split(" ");
    let anterior = frase[pos_f]
    frase.splice(pos_f, 1, palabra);
    FRASE = frase.join(" ");
    res.json({
        "actualizada": palabra,
        anterior,
        "frase": FRASE
    })

    let respuesta = null;
   
    res.json({response:respuesta});
})

//5) DELETE

app.delete("/api/palabras/:pos", (req, res, next)=>{

    /// :num seria el params
    /// y se usa el destructuring
    let { palabra } = req.body;
    let { pos } = req.params;
    let pos_f = Number(pos) - 1;
    let frase = FRASE.split(" ");
    frase.splice(pos_f, 1);
    FRASE = frase.join(" ");
    res.json({
        "frase": FRASE
    })
});




// CUANDO la url tiene /:algo    eso es un params



app.get("/", (req, res, next)=>{
    res.json({response:[]});
})
