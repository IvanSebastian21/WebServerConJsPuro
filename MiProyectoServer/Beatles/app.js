var http = require('http');
var fs = require('fs');

var beatles = [{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic: "http://c.files.bbci.co.uk/21E4/production/_115867680_lennon_75_gettyimages-107715151.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic: "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic: "http://az616578.vo.msecnd.net/files/2016/03/09/635931448636931925-692833716_george-harrison-living-in-the-material-world-george-harrison-photo-credit-credit-robert-whitaker-c-apple-corps-ltd-courtesy-of-hbo.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic: "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http
  .createServer((req, res) => {
    if (req.url === "/") {
      const index = fs.readFileSync(__dirname + '/index.html', "utf-8")

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(index);
    } else if (req.url === "/api" || req.url === "/app/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(beatles));
    } else {
      if (req.url.substring(0, 5) === "/api/") {
        let getUrlName = req.url.split("/")[2].split("%20").join(" ").toLowerCase();
        let getBeatle = beatles.find((beatle) => beatle.name.toLowerCase() === getUrlName);
        if (getBeatle) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(getBeatle));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Uppss...Error 404 NOT FOUND");
        }
      } else {
        let getUrlName = req.url.split("/")[1].split("%20").join(" ").toLowerCase();
        let getBeatle = beatles.find(beatle => beatle.name.toLowerCase() === getUrlName);
        if (getBeatle) {
          let templateHTML = fs.readFileSync(__dirname + '/beatle.html', "utf-8")
          templateHTML = templateHTML.replace('{title}', getBeatle.name)
            .replace('{nombre}', getBeatle.name)
            .replace('{birthdate}', getBeatle.birthdate)
            .replace('{img}', getBeatle.profilePic)
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(templateHTML);
        }
      }
    }
  })
  .listen(3001, console.log("Server On"));

