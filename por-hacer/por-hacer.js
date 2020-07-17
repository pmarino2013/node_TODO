const fs = require("fs");

let listadoPorHacer = []; //creo variable de arreglo para almacenar las tareas

//funcion que guarda la info del arreglo de tareas a un json
const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
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

module.exports = {
  crear,
};
