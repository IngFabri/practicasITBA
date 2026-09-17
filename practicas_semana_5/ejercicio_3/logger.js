const fs = require("fs")

function log(message){
    const opciones = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    }
    
    const timeStamp = new Date().toLocaleString("es-AR", opciones)
    
    fs.appendFile("./system.log", `${message} (${timeStamp.toString()})\n`, (err) => {
        if(err){
            console.log("AHHHHHHHHHHH!");
        }
        console.log(200)
    })
}

module.exports = {
    log
}