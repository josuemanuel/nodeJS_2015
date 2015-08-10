// se carga libreria de thhp
var http = require('http');
// handler de la comunicacion htt<p

var ip=process.env.IP || '127.0.0.1';
var port=process.env.PORT || 3000;

var serverHandler=function(xReques,xResponse) {
    console.log("Peticion entrando-->" )
    xResponse.writeHead(200,{ 
		'Content.Type': 'text/html',
		"Server":'Node v0.12.7'
	  });
xResponse.write("Mi primer server de texto plano con node js (Josue)");
xResponse.write("-...-   ");
xResponse.write("<h1>index 3</h1>");

xResponse.end();
};

//creando el server
var myServer = http.createServer(serverHandler);
// configurando server
// puerto escuca, la ip de salida
myServer.listen(port,ip);
console.log("Servidor index3 http escuchando en localHost");

