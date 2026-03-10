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


const data = [
  {
    title: "Oferta Entusiasta Urbano",
    description: "Aventura visitando diferentes ciudades y descubriendo nuevos destinos.",
    url_img: "./assets/viajes-5.jpg"
  },
  {
    title: "Oferta Vida Isleña",
    description: "Escapada a una isla paradisíaca con bungalows sobre el mar y paisajes increíbles.",
    url_img: "./assets/viajes-2.jpg"
  },
  {
    title: "Oferta Playa Diamante",
    description: "Relajante viaje a una playa tropical con arena blanca y aguas cristalinas.",
    url_img: "./assets/viajes-1.jpg"
  }
];

const desplegable = document.getElementById("desplegable");

for (let index = 0; index < cities.length; index++) {
    let ciudad = cities[index];
    let option = document.createElement("option");
    option.innerHTML = ciudad;
    desplegable.appendChild(option);
}


const contenedorArticulos = document.getElementsByClassName("contenedor-articulos")[0];

for (let index = 0; index < data.length; index++) {
    console.log(contenedorArticulos);
    contenedorArticulos.innerHTML += '<article><img src="' + data[index].url_img + '" alt="'+  data[index].title + '"><p class="titulo">' +
    data[index].title + '</p><p>' + data[index].description + '</p></article>'
}
