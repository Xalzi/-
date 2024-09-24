// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Préstame tu peine", time: 47 },
  { text: "Y péiname el alma", time: 50 },
  { text: "Desenrédame", time: 55 },
  { text: "Fuera de este mundo", time: 59 },
  { text: "Dime que no estoy", time: 62 },
  { text: "Soñándote", time: 66 },
  { text: "Enséñame", time: 71 },
  { text: "De que estamos hechos", time: 74 },
  { text: "Que quiero brincar planetas" <br> "hasta ver uno vacio", time: 79 },
  { text: "Que quiero irme a vivr, pero que sea contigo", time: 86 },
  { text: "Viento, amárranos", time: 93 },
  { text: "Tiempo, detente muchos años", time: 101 },
  { text: "Viento, amárranos", time: 108 },
  { text: "Tiempo, detente muchos años", time: 116 },
  { text: "Préstame tu peine", time: 140 },
  { text: "Y péiname el alma", time: 143 },
  { text: "Purifícame", time: 147 },
  { text: "No me abandones", time: 151 },
  { text: "Préstame tu sueño", time: 155 },
  { text: "Y duérmeme", time: 159 },
  { text: "Embrújame", time: 163 },
  { text: "Volvámanos eternos", time: 166 },
  { text: "Que quiero brincar planetas" <br> "hasta ver uno vacio", time: 171 },
  { text: "Que quiero irme a vivr, pero que sea contigo", time: 178 },
  { text: "Viento, amárranos", time: 186 },
  { text: "Tiempo, detente muchos años", time: 193 },
  { text: "Viento, amárranos", time: 201 },
  { text: "Tiempo, detente muchos años", time: 209 },
  { text: "Viento, amárranos", time: 216 },
  { text: "Tiempo, detente muchos años", time: 224 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);