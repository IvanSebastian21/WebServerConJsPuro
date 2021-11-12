var fs = require("fs")
var http = require("http")

// Escribí acá tu servidor
http
    .createServer((req, res) => {
        /*  
        //  Manera NO escalable. ¿Si son 200 imagenes?  
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end('Estoy Ready!!!!!')
            } else if (req.url === '/arcoiris') {
                const imagesArcoiris = fs.readFileSync(__dirname + '/images/arcoiris_doge.jpg');
                res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                res.end(imagesArcoiris)
            }
         */


        //  Escalable: El if principal se mantiene --> url = / etc...

        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Estoy Ready!!!!!");
        } else {
            //Extraemos la imagen desde la url.
            fs.readFile(__dirname + `/images${req.url}_doge.jpg`, (err, image) => {
                if (err) {
                    res.writeHead(404, { "Content-Type": "text/plain" });
                    res.end("Uppss,.. Error 404 NOT FOUND");
                } else {
                    res.writeHead(200, { "Content-Type": "image/jpeg" });
                    res.end(image);
                }
            });
        }
    })
    .listen(3001, console.log("Server on in port 3001"));