require("dotenv").config();

let config = {
    port: process.env.PORT,
    class: process.env.CLASE
}


module.exports = { config }