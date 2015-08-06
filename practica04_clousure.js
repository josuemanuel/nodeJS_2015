
// patrón de cerradura
//function saludar()
//{ var mensaje = "Hola Mizo";
//  console.log(mensaje);
//}
//console.log(mensaje);

function retornaSaludo()
 { var mensaje = "Hola Mizo";
   return function() {
     console.log(mensaje);
	 }
  }
  var saludar = retornaSaludo();
  saludar();
  