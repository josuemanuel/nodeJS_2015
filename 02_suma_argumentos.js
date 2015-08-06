//console.log(process.argv);
//console.log("Argumento 2 :"+process.argv[2]);
var argumentos = process.argv[2];
if (!argumentos)
  { console.log("No hay argumentos validos");
    process.exit();

  } 

//console.log("Operador 1 :"+operando[0]);
//console.log("Operador 2 :"+operando[1]);
var operandos =process.argv[2].split(",");
var suma=0;
for (x=0;x<operandos.length;x++)
    suma=suma+parseInt(operandos[x]);
console.log("Suma :"+suma);
 