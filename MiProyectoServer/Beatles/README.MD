# Request sobre los Beatles

Vamos a hacer una página usando los templates HTML.

## Condiciones Básicas

### API

1. Se utiliza este arreglo con los integrantes de los Beatles:

```javascript
var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"http://beatlephotoblog.com/photos/2013/05/132.jpg32.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"http://az616578.vo.msecnd.net/files/2016/03/09/635931448636931925-692833716_george-harrison-living-in-the-material-world-george-harrison-photo-credit-credit-robert-whitaker-c-apple-corps-ltd-courtesy-of-hbo.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]
```

2. Se solicita a la ruta "/api" que muestra el arreglo completo

3. Ahora en la ruta "/api/John%20Lennon" se puede ver solo el objeto de John

4. Respuesta hacia los otros beatles. Sin repetir la misma ruta

5. Si el usuario no entra un Beatle valido tiene que darle un error diciendo que la página no se encontro

### Html y templates

1. `index.html` (uso de bootstrap). Header básico, y un jumbotron con un mensaje de bienvenida.
En el server, devuelve un HTML cuando los usuarios vayan a la ruta `/`.

2. Nuevo template en el cual ingresaremos un profile page de cada beatle, el titulo de la pagina y un h1 tiene que dice el nombre, un parrafo con la fecha de nacimiento y una imagen con la profilePic.

> Se usa el string replace.

3. Ruta en la cual si ponemos el nombre del Beatle nos muestre su profil page ej. "/Paul%20McCartney".  No se pisa la ruta de la API.


