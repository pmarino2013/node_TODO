// const argv = require("yargs").argv;

const argv = require("./config/yargs.js").argv;
const colors = require("colors");
const { crear, getListado } = require("./por-hacer/por-hacer");

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
    let listado = getListado();

    console.log("===========Por Hacer============".green);

    for (let tarea of listado) {
      console.log(tarea.descripcion);
      console.log(`Estado: ${tarea.completado ? "listo".green : "falta".red}`);
      // console.log("Estado: ", tarea.completado );
    }
    console.log("================================".green);
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
