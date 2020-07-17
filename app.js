// const argv = require("yargs").argv;

const argv = require("./config/yargs.js").argv;
const { crear } = require("./por-hacer/por-hacer");

const comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "actualizar":
    console.log("Actualizar la tarea");
    break;
  case "listar":
    console.log("Listar tareas");
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
