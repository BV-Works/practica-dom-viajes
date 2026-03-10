## 1.  Ejercicio: Práctica DOM viajes

Utilizando las fotos de ejemplo, generar una web como la que se puede ver en el boceto pasado. Utilizar HTML,CSS, JS.

NOTA: Las imágenes de los viajes y opciones del selector deben ser generadas haciendo manipulación del DOM con JS. No hace falta generar absolutamente todo desde JS. Lo que sea estático como header, footer, foto principal, etc... se añade directamente en el HTML, y cosas dinámicas como las tarjetas de destinos preferidos  y ciudades, añadir con JS

Para los desitinos recomendados, podéis crearos un array de objetos que contenga los datos y las URL de las imágenes que os tenéis que descargar. Después, podéis iterar con un bucle y renderizar en el DOM:

const data = [
  {
    title: "Example Title 1",
    description: "Example Description 1",
    url_img: "../assets/example-url-1.jpg"
  },
  {
    title: "Example Title 2",
    description: "Example Description 2",
    url_img: "../assets/example-url-2.jpg"
  },
  {
    title: "Example Title 3",
    description: "Example Description 3",
    url_img: "../assets/example-url-3.jpg"
  }
];

Lo mismo para los destinos. Podéis generar un array con los nombres de las ciudades

const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];
La solución deberá subirse a GitHub.

Enviar:

URL del repo en GitHub con vuestra solución
URL despliegue GitHub pages