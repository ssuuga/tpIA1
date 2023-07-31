// Datos de las playlists recomendadas
const playlists = [
  {
    titulo: "Playlist 1",
    enlace: "https://youtube.com/playlist?list=PL6NdkXsPL07IOu1AZ2Y2lGNYfjDStyT6O",
    imagenes: [
      "https://i.ytimg.com/vi/4DwxVMU7S0w/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4OgAK4CIoCDAgAEAEYZSBIKEYwDw==&rs=AOn4CLAeYWlu46ueFadUQbpnDGr9lGfheQ",
      "https://i.ytimg.com/vi/pIOZVb97dSk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC5fX35e93qCTTBAawKAOBpqEuyZA",
      "https://i.ytimg.com/vi/4X_uoKF2Wvo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAcFVnljElY36228bnWAtDPjkoTNA",
      "https://i.ytimg.com/vi/HV6OlMPn5sI/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYNCBlKEgwDw==&rs=AOn4CLA3Sbafn-_-7ivHVk7tW26BEU7KNQ",
      "https://i.ytimg.com/vi/0h6a07yVacY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBnlV7FKAzNEShLTRCoVO6UVuGag",
      // Agrega más URLs de imágenes aquí
    ],
  },
  {
    titulo: "Playlist 2",
    enlace: "https://youtube.com/playlist?list=PLaGwrl_lbXqq892-EQHyeArPnVmthcNZk",
    imagenes: [
      "https://i.ytimg.com/vi/UQ0KmrvBPaY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChtoSgTUQEuMuk6ujS1Y82eKsKLw",
      "https://i.ytimg.com/vi/7gTlrMytJtk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBoqnGzOyEPLLKUuARn-BYrPVEAnQ",
      "https://i.ytimg.com/vi/kPE0-mq6CFk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLClV1sZkkEkUtTtz6ALLcWWsZNgUw",
      "https://i.ytimg.com/vi/oi62ipIXpjI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBlCcP0qNMfJybd6jrCWKPhweIvlQ",
      "https://i.ytimg.com/vi/qXc7eoylBvA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBfaYAhKUSObFi8pzLjH5zuxKPpcw",
      // Agrega más URLs de imágenes aquí
    ],
  },
  {
    titulo: "Playlist 3",
    enlace: "https://youtube.com/playlist?list=PLF3eNE6vR-4WsBf8qnJLqBywqX39QczxJ",
    imagenes: [
      "https://i.ytimg.com/vi/0ZY4RddUSZw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9XSiI9Bej-JiKLglWOllWGr_LGg",
      "https://i.ytimg.com/vi/d7LQ-I1c18s/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCzU-gbNlhhzkx0R-2ATNBP4OEorg",
      "https://i.ytimg.com/vi/rbDKln7xeSM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBzf4p48KqcRP4mtL2FQCL360z8oQ",
      "https://i.ytimg.com/vi/uAfv6gNGgsk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA4gVr-Qds7LS-2SGhXWth5dT1kIg",
      "https://i.ytimg.com/vi/5AiVvVJbMX4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDKHj1yRmuqLM84-pfKoEEyvH-w4Q",
      // Agrega más URLs de imágenes aquí
    ],
  },
  // Agrega más playlists aquí
];

function crearMosaicos() {
  const contenedorMosaicos = document.getElementById("mosaico-recomendaciones");

  playlists.forEach((playlist) => {
    const mosaico = document.createElement("a"); // Cambiamos div a enlace
    mosaico.classList.add("mosaico-item");
    mosaico.href = playlist.enlace;
    mosaico.target = "_blank"; // Abre enlace en una nueva pestaña

    const galeria = document.createElement("div");
    galeria.classList.add("galeria-imagenes");

    playlist.imagenes.forEach((imagenUrl) => {
      const imagen = document.createElement("img");
      imagen.src = imagenUrl;
      imagen.alt = playlist.titulo;
      galeria.appendChild(imagen);
    });

    const titulo = document.createElement("h3");
    titulo.textContent = playlist.titulo;

    mosaico.appendChild(galeria);
    mosaico.appendChild(titulo);
    contenedorMosaicos.appendChild(mosaico);
  });
}

// Agregamos el evento load al objeto global (window) para que se ejecute cuando la página esté completamente cargada
window.addEventListener('load', function() {
  // Llamamos a la función para crear los mosaicos una vez que la página esté cargada
  crearMosaicos();
});