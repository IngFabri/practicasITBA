const {traerStock,consultarStock} = require("./productoUtils.js")

traerStock((err,data)=>{
    console.log("========== STOCK ==========")
    console.log(data)
    console.log("========== FIN STOCK ==========")
})

const objetoBuscado = {nombre: "Zapatero Organizador"}
consultarStock(objetoBuscado,(err,data)=>{
    if (err) {
        throw err
    }
    console.log("Hay " + data + " unidades de " + objetoBuscado.nombre);
})
