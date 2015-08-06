var funcionSaludar = function(nombre) {
  console.log("Hola "+nombre);

};
var funcionDespedirse = function(nombre) {
  console.log("Adios "+nombre);

};

function mensaje(nombre, handler)
{ handler(nombre);}
mensaje ("ITGAM",funcionSaludar);
mensaje ("ITGAM",funcionDespedirse);