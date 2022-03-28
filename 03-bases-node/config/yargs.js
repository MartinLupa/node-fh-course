const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de tabla de multiplicar.",
  })
  .option("d", {
    alias: "desde",
    type: "number",
    default: 1,
    describe: "Modifica el indice mínimo de la tabla.",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Modifica el indice máximo de la tabla.",
  })
  .option("l", {
    alias: "lista",
    type: "boolean",
    default: false,
    describe: "Imprime tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número.";
    }
    return true;
  }).argv;

module.exports = argv;
