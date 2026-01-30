const songs = [
  {
    title: "PURULENT - Patología Grotesca",
    file: "music/PURULENT -Patología Grotesca.mp3",
    cover: "covers/purulent.jpg",
    lore: "El encuentro entre lo grotesco y lo patologico se encuentra acá, perversion del  cuerpo humano."
  },
  {
    title: "Leishmaniasis - Whore Smashing Hammer",
    file: "music/Leishmaniasis -Whore Smashing Hammer full album.mp3",
    cover: "covers/leishmaniasis.jpg",
    lore: "Gore bogotano, brutal death puro."
  },
  {
    title: "FORENSE - Full Disco",
    file: "music/FORENSE-Full Disco.mp3",
    cover: "covers/forense.jpg",
    lore: "Criminologia y expedientes vomitivos para pocos gustos."
  }
];

let current = 0;

const player = document.getElementById("player");
const title = document.getElementById("songTitle");
const lore = document.getElementById("songLore");
const playlist = document.getElementById("playlist");

function loadSong(i) {
  current = i;
  player.src = songs[i].file;
  title.textContent = songs[i].title;
  lore.textContent = songs[i].lore;
  player.play();
}

songs.forEach((song, i) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${song.cover}" style="width:100%; border:1px solid red;">
    <h2>${song.title}</h2>
    <p>${song.lore}</p>
    <button class="pay">REPRODUCIR</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    loadSong(i);
  });

  playlist.appendChild(card);
});

loadSong(0);
