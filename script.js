function copiarNumero() {
  navigator.clipboard.writeText("3232124495");
  alert("Número copiado. Abre Nequi o Daviplata y pega.");
}

const audio = document.getElementById("ambiente");

document.addEventListener("visibilitychange", () => {
  if (!audio) return;
  if (document.hidden) audio.pause();
  else audio.play().catch(()=>{});
});

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
    descripcion: "Punk obrero colombiano. Edición aniversario.",
    precio: 50000,
    imagen: "lossordos.jpg",
    stock: 1
  },
  {
    nombre: "Sarcófago – The Laws of Slaughter Live 1987–1991",
    descripcion: "Black/death metal brasileño en vivo.",
    precio: 120000,
    imagen: "sarcofago.jpg",
    stock: 1
  },
  {
    nombre: "Demise – De la Manipulación a la Ignorancia",
    descripcion: "Death metal venezolano underground.",
    precio: 50000,
    imagen: "demise.jpg",
    stock: 1
  }
];

const numeroPago = "573232124495";
const contenedor = document.getElementById("productos");

productos.forEach(disco => {
  const card = document.createElement("div");
  card.className = "card";
  const disponible = disco.stock > 0;

  card.innerHTML = `
    <img src="${disco.imagen}">
    <h2>${disco.nombre}</h2>
    <p>${disco.descripcion}</p>
    <span>$${disco.precio.toLocaleString()} COP</span>
    <strong>${disponible ? "Quedan: " + disco.stock : "SOLD OUT"}</strong>

    ${disponible ? `
      <a class="pay" href="https://wa.me/${numeroPago}?text=Quiero%20comprar%20${encodeURIComponent(disco.nombre)}">WhatsApp</a>
      <a class="pay nequi" href="nequi://send?phone=${numeroPago}&amount=${disco.precio}">Nequi</a>
      <a class="pay daviplata" href="daviplata://send?phone=${numeroPago}&amount=${disco.precio}">Daviplata</a>
      <button class="pay" onclick="copiarNumero()">Copiar número</button>
    ` : `<a class="pay" href="soldout.html">Ver estado</a>`}
  `;
  contenedor.appendChild(card);
});

if (!/Android|iPhone/i.test(navigator.userAgent)) {
  document.querySelectorAll(".nequi, .daviplata").forEach(b => b.style.display = "none");
}
