const descripcion = {
  demand: true,
  alias: "d",
};

const completado = {
  alias: "c",
  default: true,
};

const argv = require("yargs")
  .command("crear", "Crea un elemento en la lista", {
    descripcion,
  })
  .command("actualizar", "Actualiza un elemento de la lista", {
    descripcion,
    completado,
  })
  .command("borrar", "Elimina un elemento de la lista", {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
