const fs = require("fs");
const colors = require("colors");

let listadoPorHacer = []; //creo variable de arreglo para almacenar las tareas

//funcion que guarda la info del arreglo de tareas a un json
const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw err;
    // console.log("The file has been saved!");
  });
};

//para cargar DB debo pasar lo que tiene el JSON al arreglo
const cargarDB = () => {
  //manejo el caso donde el json esté vacio
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

//funcion para crear tarea y agregarla al arreglo
const crear = (descripcion) => {
  cargarDB(); //paso al arreglo lo que ya está en el json

  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);

  guardarDB();
  return porHacer;
};

//Funcion para listar las tareas
const getListado = () => {
  cargarDB(); //cargo el contenido del json en el arreglo
  return listadoPorHacer; //devuelvo el arreglo
};

const actualizar = (descripcion, completado) => {
  cargarDB();

  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    // return false;
    return console.log("La tarea no existe en la lista".red);
  }
};

const borrar = (descripcion) => {
  cargarDB(); //traigo la base de datos;

  //creo un array nuevo y lo igualo al filter del array original descartando el item
  // igual a la descripcion enviada.
  const result = listadoPorHacer.filter(
    (tarea) => tarea.descripcion !== descripcion
  );
  //igualo el arreglo original al contenido del nuevo arreglo
  listadoPorHacer = result;
  guardarDB(); //guardo el arreglo sin el item eliminado.
};
module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
