const archivo = [
 {banda:"Pestilencia", peligro:"ALTO", estado:"CONFISCADO"},
 {banda:"Demise", peligro:"EXTREMO", estado:"PROHIBIDO"},
 {banda:"Sarcófago", peligro:"MÁXIMO", estado:"ARCHIVO NEGRO"}
];

const cont = document.getElementById("archivo-lista");

archivo.forEach(caso => {
 const div = document.createElement("div");
 div.className = "case-file";
 div.innerHTML = `
  <h3>CASO #${Math.floor(Math.random()*9999)}</h3>
  <p>BANDA: ${caso.banda}</p>
  <p>PELIGRO: ${caso.peligro}</p>
  <p>ESTADO: ${caso.estado}</p>
 `;
 cont.appendChild(div);
});
