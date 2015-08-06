
// importando una libreria de node
var fileString = require('fs');
// leer el archivo de forma sincrona
//var ruta="C:\Users\Manuel\Documents\curso_Node_2015\practica01\documento.txt";
var content = fileString .readFileSync('\documento.txt','utf8');
console.log(content);
console.log("Ejecutando una tarea...");

