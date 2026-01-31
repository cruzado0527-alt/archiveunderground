// Lista de canciones / bandas
const songs = [
  {title: "ABDUCCIÓN – No Creyente", file: "music/ABDUCCIÓN-No Creyente.mp3", cover: "covers/abduccion.jpg", lore: "Negación, paranoia y ruido."},
  {title: "Aftermath – Demo", file: "music/Aftermath-Demo.mp3", cover: "covers/aftermath.jpg", lore: "Registro crudo de devastación."},
  {title: "ATHANATOR – Engendros de Muerte", file: "music/ATHANATOR-Engendros de Muerte.mp3", cover: "covers/athanator.jpg", lore: "Violencia ritual hecha sonido."},
  {title: "Belkant – Profecía del Averno", file: "music/Belkant -Profecía del averno Full Album.mp3", cover: "covers/belkant.jpg", lore: "Profecías infernales en sonido."},
  {title: "FORENSE – Full Disco", file: "music/FORENSE-Full Disco.mp3", cover: "covers/forense.jpg", lore: "Criminología extrema sonora."},
  {title: "Gates Of Deception – Misery", file: "music/Gates Of Deception-Misery full album.mp3", cover: "covers/gatesofdeception.jpg", lore: "Death metal atmosférico."},
  {title: "Leishmaniasis – Whore Smashing Hammer", file: "music/Leishmaniasis -Whore Smashing Hammer full album.mp3", cover: "covers/leishmaniasis.jpg", lore: "Gore bogotano brutal."},
  {title: "Mortifago – Pandemonium EP", file: "music/Mortifago - Pandemonium EP.mp3", cover: "covers/mortifago1.jpg", lore: "Caos ritual."},
  {title: "Mortifago – Más Allá De La Filosofía", file: "music/Mortifago Más Allá De La Filosofía.mp3", cover: "covers/mortifago2.jpg", lore: "Transgresión filosófica."},
  {title: "Nekrotikos – Orgia Restaurante Chino", file: "music/Nekrotikos Orgia En El Restaurante Chino Full Album.mp3", cover: "covers/nekrotikos.jpg", lore: "Grind punk obsceno."},
  {title: "NOVILUNION – Ritos de Inconciencia", file: "music/NOVILUNION-Ritos de Inconciencia (Full EP).mp3", cover: "covers/NOVILUNION.jpg", lore: "Trance death metal."},
  {title: "Purulent – Garavito’s Pedophilia Tales", file: "music/Purulent -Garavitos Pedophilia Tales.mp3", cover: "covers/purulentgaravito.jpg", lore: "Registro extremo de horror real."},
  {title: "PURULENT – Patología Grotesca", file: "music/PURULENT -Patología Grotesca.mp3", cover: "covers/purulent.jpg", lore: "Grotesco patológico sonoro."},
  {title: "Sarcoma – Subreality", file: "music/Sarcoma - Subreality.mp3", cover: "covers/sarcoma.jpg", lore: "Distorsión mental."},
  {title: "Savages Torment – Wake Up The Horror", file: "music/Savages Torment Wake Up The Horror.mp3", cover: "covers/savage.jpg", lore: "Horror despierto."},
  {title: "Sedición – Sedición EP", file: "music/Sedición - Sedicion (Full EP).mp3", cover: "covers/sedicion.jpg", lore: "Resistencia punk."},
  {title: "SEPULCRO – Bogotá Terror Death", file: "music/SEPULCRO -BOGOT TERROR DEATH.mp3", cover: "covers/sepulcro.jpg", lore: "Muerte capitalina."},
  {title: "SISTEMATIC COPHROPHAGIA – Autómata Inerte", file: "music/SISTEMATIC COPHROPHAGIA-Autómata-Inerte.mp3", cover: "covers/sistematic.jpg", lore: "Descomposición total."},
  {title: "Somberspawn – Invocate", file: "music/Somberspawn-Invocate (Full Album).mp3", cover: "covers/somberspawn.jpg", lore: "Invocaciones sonoras."}
];

// ELEMENTOS
const player = document.getElementById("player");
const cover = document.getElementById("cover");
const title = document.getElementById("songTitle");
const lore = document.getElementById("songLore");
const playlist = document.getElementById("playlist");

let current = 0;

// CARGAR CANCIÓN
function loadSong(i){
  current = i;
  player.src = songs[i].file;
  cover.src = songs[i].cover;
  title.textContent = songs[i].title;
  lore.textContent = songs[i].lore;
  player.play();
}

// CARGAR LISTA
songs.forEach((song, i)=>{
  const card = document.createElement("div");
  card.className = "songCard";
  card.innerHTML = `
    <img src="${song.cover}">
    <h4>${song.title}</h4>
    <p>${song.lore}</p>
    <button class="pay">REPRODUCIR</button>
  `;
  card.querySelector("button").onclick = ()=>loadSong(i);
  playlist.appendChild(card);
});

loadSong(0);
