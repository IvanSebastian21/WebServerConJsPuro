# Web Server Con Js Puro

## Hola! Bienvenido a una nueva practica


### En esta oportunidad busco crear una servidor donde se pueda consultar un array de objetos con la info de los integrantes de la famosa banda inglesa The Beatles empleando unicamente JavaScript.
### Acompañame y veamos juntos como abordar este desafio! :muscle:
Primero que nada. ¿Que son las APIs? La documentacion oficial nos dice que las Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés) son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple.
> El módulo HTTP proporciona una forma de hacer que Node.js transfiera datos a través de HTTP (Protocolo de transferencia de hipertexto).
La sintaxis para incluir el módulo HTTP en su aplicación:

```JavaScript
var http = require('http');
var fs = require('fs');
```
>El módulo del fs (file system) o sistema de archivos de Node.js nos permite trabajar con el sistema de archivos en nuestra computadora.
Para incluir el módulo del sistema de archivos, usamos el require()método:  

Más información: [HTTP](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

### Entendiendo el metodo que nos ofrece Node.js "http.createServer()";

```JavaScript
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(3000);
```
JavaScript al ser un lenguaje de scripts de alto nivel incorporado en los navegadores nos permite implementar interactividad en páginas web / apps. 

Más información: [Node js](https://www.w3schools.com/nodejs/met_http_createserver.asp)

### Resumiendo: 
El método http.createServer () convierte nuestra computadora en un servidor HTTP.

El método http.createServer () crea un objeto de servidor HTTP .

El objeto del servidor HTTP puede escuchar los puertos de nuestra computadora y ejecutar una función, un requestListener , cada vez que se realiza una solicitud.

<h3><strong> Lenguajes: <strong></h3>
    <h2>
     Javascript <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"/>  |
     Node Js <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635268343/readme/pngwing.com_9_nptorj.png"/> |
     Express <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635268180/readme/pngwing.com_5_mtcqjs.png"/> |

