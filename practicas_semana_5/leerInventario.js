const fs = require("fs");

fs.readFile('./practicas_semana_5/inventario.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
