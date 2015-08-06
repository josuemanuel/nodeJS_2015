
var fs = require('fs');

var manejador = function(err,data){
 if (!err)
   console.log(data);
  else
   { console.log("error al leer archivo");
     return; }  
};   

fs.readFile("\documento.txt","utf8",manejador);
console.log("\nHaciendo otra operacion");

