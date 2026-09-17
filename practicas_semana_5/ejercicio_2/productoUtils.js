const fs = require("fs")

function traerStock(callback){
        fs.readFile("./practicas_semana_5/ejercicio_1/inventario.txt",(err,data)=> {
            if(err) {
                return callback(err,null)
            }           
            const lines = data.toString().split("\n")
            const stock = lines.map(line => line.split(" - "))
        
            callback(null,Object.fromEntries(stock))
        })
}

function estaDisponible(productoBuscado,callback){
    traerStock((err,stock) => {
        if(err){
            callback(err,null)
        }
        const cantidad = Number.parseInt(stock[productoBuscado.nombre].split(" ")[0])
        callback(null,cantidad)
    })
}

module.exports = {
    traerStock,
    estaDisponible
}