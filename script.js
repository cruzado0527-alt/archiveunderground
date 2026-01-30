const productos = [
  {
    nombre: "Pestilencia – Las Nuevas Aventuras de / La Muerte un Compromiso de Todos",
    descripcion: "CD doble. Punk metal colombiano histórico.",
    precio: 90000,
    imagen: "pestilencia.jpg",
    stock: 1
  },
  {
    nombre: "Los Sordos – Rock and Roll Obrero",
    descripcion: "Punk obrero colombiano. Edición 10 años.",
    precio: 50000,
    imagen: "lossordos.jpg",
    stock: 1
  },
  {
    nombre: "Sarcófago – Live 1987–1991",
    descripcion: "Black/death metal brasileño en vivo.",
    precio: 120000,
    imagen: "sarcofago.jpg",
    stock: 1
  },
  {
    nombre: "Demised – Death Metal",
    descripcion: "Death metal venezolano underground.",
    precio: 50000,
    imagen: "demised.jpg",
    stock: 1
  }
];

const numeroPago = "573232124495"; // tu número

const contenedor = document.getElementById("productos");

productos.forEach(disco => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${disco.imagen}">
    <h2>${disco.nombre}</h2>
    <p>${disco.descripcion}</p>
    <span>$${disco.precio} COP</span>
    <strong>Quedan: ${disco.stock}</strong>

    <a class="pay" href="https://wa.me/${numeroPago}?text=Quiero%20comprar%20${encodeURIComponent(disco.nombre)}">WhatsApp</a>
    <a class="pay" href="nequi://send?phone=${numeroPago}&amount=${disco.precio}">Nequi</a>
    <a class="pay" href="daviplata://send?phone=${numeroPago}&amount=${disco.precio}">Daviplata</a>
  `;

  contenedor.appendChild(card);
});
