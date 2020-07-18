// const argv = require("yargs").argv;

const argv = require("./config/yargs.js").argv;
const colors = require("colors");
const {
  crear,
  getListado,
  actualizar,
  borrar,
} = require("./por-hacer/por-hacer");

const comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "actualizar":
    let actualizado = actualizar(argv.descripcion, argv.completado);

    console.log(actualizado);
    break;
  case "listar":
    let listado = getListado();

    console.log("===========Por Hacer============".green);

    for (let tarea of listado) {
      console.log(`${tarea.completado === true ? "[X]".green : "[ ]".red}`,tarea.descripcion);
      // console.log(
      //   `Estado: ${tarea.completado === true ? "listo".green : "falta".red}`
      // );
      //console.log("Estado: ", tarea.completado);
    }
    console.log("================================".green);
    break;

  case "borrar":
    let borrado = borrar(argv.descripcion);
    console.log(`La tarea ${argv.descripcion} fue eliminada`.green);
    break;
  default:
    console.log("Comando no reconocido".red);
    break;
}
