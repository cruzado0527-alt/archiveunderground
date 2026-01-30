const songs = [
  {
    title: "PURULENT - Patología Grotesca",
    file: "music/PURULENT -Patología Grotesca.mp3",
    lore: "Registro patológico prohibido."
  },
  {
    title: "Leishmaniasis - Whore Smashing Hammer",
    file: "music/Leishmaniasis -Whore Smashing Hammer full album.mp3",
    lore: "Grabación incautada."
  },
  {
    title: "FORENSE - Full Disco",
    file: "music/FORENSE-Full Disco.mp3",
    lore: "Evidencia sonora."
  }
];

let current = 0;
const player = document.getElementById("player");
const title = document.getElementById("songTitle");
const lore = document.getElementById("songLore");

function loadSong(){
  player.src = songs[current].file;
  title.textContent = songs[current].title;
  lore.textContent = songs[current].lore;
}

player.addEventListener("ended", () => {
  current = (current + 1) % songs.length;
  loadSong();
  player.play();
});

function toggleFullscreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

loadSong();
