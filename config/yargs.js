const argv = require("yargs")
  .command("crear", "Crea un elemento en la lista", {
    descripcion: {
      demand: true,
      alias: "d",
    },
  })
  .command("actualizar", "Actualiza un elemento de la lista", {
    descripcion: {
      alias: "d",
      demand: true,
    },
    completado: {
      alias: "c",
      default: true,
    },
  })
  .command("borrar", "Elimina un elemento de la lista", {
    descripcion: {
      alias: "d",
      demand: true,
    },
  })
  .help().argv;

module.exports = {
  argv,
};
