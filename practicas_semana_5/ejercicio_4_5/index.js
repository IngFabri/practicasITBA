import http from "http"
import chalk from "chalk"

http.createServer((req,res)=>{

    console.log("Ejecucion");
    
    const ruta = new URL(req.url,`http://${req.headers.host}`)

        switch (ruta.pathname) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("<h1>Bienvenido a muebleria jota</h1>");
            break;
            
        case "/productos":
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("<h2>Nuestro catalogo de productos </h2>")
            break;

        case "/contacto":
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("<p>Contáctanos al 555-1234</p>")
            break;
            
        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('Ruta no encontrada');
            break;
    }

    }).listen(3000,()=>{
    console.log(chalk.blue("SERVIDOR CORRIENDO EN EL PUERTO 3000"))
    console.log("Ejecucion del listen");
    
})