const fs = require("fs");
const colors = require("colors");

//Dos opciones de devolver una promesa:
//Utilizar el constructor new Promise((resolve, reject) => {})
//Crear una funcion asincrona y manejar las dos posibles soluciones con un try y catch. Esta es la opcion elegida.
async function crearTabla(base, listar = false, minimo, maximo) {
  try {
    let salida = "";

    for (i = minimo; i <= maximo; i++) {
      let multiply = base * i;
      salida += `${base} X ${i} = ${multiply}\n`;
    }
    if (listar) {
      console.log(colors.green("-----------------"));
      console.log(colors.green(`Tabla del ${base}`));
      console.log(colors.green("-----------------"));
      console.log(salida);
    }

    //Uso de modulo File System para crear un archivo .txt con tabla del número base.
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    console.log(err);
  }
}

module.exports = crearTabla;
