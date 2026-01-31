document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    {nombre:"Pestilencia – Las Nuevas Aventuras", descripcion:"Punk metal colombiano histórico.", precio:90000, imagen:"covers/pestilencia.jpg"},
    {nombre:"Los Sordos – Rock and Roll Obrero", descripcion:"Punk obrero colombiano.", precio:50000, imagen:"covers/lossordos.jpg"},
    {nombre:"Sarcófago – The Laws of Slaughter", descripcion:"Black / Death Metal Brasil.", precio:120000, imagen:"covers/sarcofago.jpg"},
    {nombre:"Demise – De la Manipulación", descripcion:"Death metal venezolano.", precio:50000, imagen:"covers/demise.jpg"}
  ];

  const contenedor = document.getElementById("productos");
  const numero = "573232124495";

  productos.forEach(d => {
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML = `
      <img src="${d.imagen}" alt="${d.nombre}">
      <h2>${d.nombre}</h2>
      <p>${d.descripcion}</p>
      <span>$${d.precio} COP</span>
      <a class="pay" href="https://wa.me/${numero}?text=Quiero%20${encodeURIComponent(d.nombre)}">WhatsApp</a>
    `;
    contenedor.appendChild(card);
  });
});
