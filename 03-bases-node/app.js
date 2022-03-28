const crearTabla = require("./helpers/multiplicar");
const argv = require("./config/yargs");

//Se llama a la funcion crearTabla y luego para manejar los dos resultados posibles del pedido,
//se utiliza then y catch. Estos elementos esperan una promesa, por lo que en el modulo de
//multiplicar.js, yo tengo que generar una promesa como resultado de la funcion crearTabla.
// const [, , base = "base=5"] = process.argv;
// const [, nuevaBase] = base.split("=");
crearTabla(argv.b, argv.l, argv.d, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
