// ========= LIGHTBOX + SLIDER ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const cerrarBtn = document.querySelector(".cerrar");
const fotos = document.querySelectorAll(".galeria-grid img");
const flechaIzq = document.querySelector(".flecha.izq");
const flechaDer = document.querySelector(".flecha.der");

let fotoActual = 0;

// Abrir lightbox
fotos.forEach((foto, index) => {
  foto.addEventListener("click", () => {
    fotoActual = index;
    mostrarFoto();
    lightbox.style.display = "flex";
  });
});

// Mostrar foto actual
function mostrarFoto() {
  lightboxImg.src = fotos[fotoActual].src;
}

// Flecha derecha (siguiente)
flechaDer.addEventListener("click", () => {
  fotoActual = (fotoActual + 1) % fotos.length;
  mostrarFoto();
});

// Flecha izquierda (anterior)
flechaIzq.addEventListener("click", () => {
  fotoActual = (fotoActual - 1 + fotos.length) % fotos.length;
  mostrarFoto();
});

// Cerrar con X
cerrarBtn.addEventListener("click", () => cerrar());

// Cerrar haciendo clic afuera
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) cerrar();
});

// Cerrar con ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrar();
  if (e.key === "ArrowRight") flechaDer.click();
  if (e.key === "ArrowLeft") flechaIzq.click();
});

// Función cerrar
function cerrar() {
  lightbox.style.display = "none";
  lightboxImg.src = "";
}
