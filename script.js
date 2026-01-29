const productos = [
  {
    nombre: "Pestilencia – Las Nuevas Aventuras de / La Muerte un Compromiso de Todos",
    descripcion: "CD doble. Punk metal colombiano histórico. Documento esencial del underground latino.",
    precio: 90000,
    imagen: "pestilencia.jpg"
  },
  {
    nombre: "Los Sordos – Rock and Roll Obrero (10 Años)",
    descripcion: "Punk obrero colombiano en edición aniversario. Material de culto.",
    precio: 50000,
    imagen: "lossordos.jpg"
  },
  {
    nombre: "Sarcófago – Live 1987–1991",
    descripcion: "Black/death metal brasileño crudo. Grabaciones en vivo salvajes.",
    precio: 120000,
    imagen: "sarcofago.jpg"
  },
  {
    nombre: "Demised – Death Metal (Venezuela)",
    descripcion: "Death metal venezolano underground. Edición limitada.",
    precio: 50000,
    imagen: "demised.jpg"
  }
];

const numeroPago = "573232124495"; // TU número Nequi / Daviplata

const contenedor = document.getElementById("productos");

productos.forEach(disco => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${disco.imagen}">
    <h2>${disco.nombre}</h2>
    <p>${disco.descripcion}</p>
    <span>$${disco.precio} COP</span>

    <a class="pay" href="https://wa.me/${numeroPago}?text=Quiero%20comprar%20${encodeURIComponent(disco.nombre)}%20por%20$${disco.precio}">WhatsApp</a>

    <a class="pay" href="nequi://send?phone=${numeroPago}&amount=${disco.precio}">Nequi</a>

    <a class="pay" href="daviplata://send?phone=${numeroPago}&amount=${disco.precio}">Daviplata</a>
  `;

  contenedor.appendChild(card);
});
