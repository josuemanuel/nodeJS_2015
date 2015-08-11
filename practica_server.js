// ejecutar en comand
// set IP = 3000
// set PORT = 192.168.0.106 // ip respectiva  
var http = require('http');
var ip=process.env.IP || '127.0.0.1';
var port=process.env.PORT || 3500;

var serverHandler=function(xReques,xResponse) {
    console.log("Peticion entrando-->" )
    xResponse.writeHead(200,{ 
		'Content.Type': 'text/html',
		"Server":'Node v0.12.7'
	  });

xResponse.write("<h2>Respuest: Lista de cosas que mas gustan</h2>");

xResponse.write("<ol><li>Futbol</li>");
xResponse.write("<li>Videojuegos</li>");
xResponse.write("<li>Musica</li>");
xResponse.write("<li>Comida</li>");
xResponse.write("<li>Cine</li>");
xResponse.write("<li>Mascotas</li>");
xResponse.write("<li>Perfume</li>");
xResponse.write("<li>Automoviles</li></ol>");

xResponse.end();
};

//creando el server
var myServer = http.createServer(serverHandler);

myServer.listen(port,ip);
console.log("Servidor http escuchando en localHost");