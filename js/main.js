function actualizarContador() {
  const fechaNavidad = new Date("December 25, 2025 00:00:00").getTime();
  const ahora = new Date().getTime();
  const diff = fechaNavidad - ahora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

  setTimeout(actualizarContador, 1000);
}

actualizarContador();

// MENÚ HAMBURGUESA SIMPLE
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("activo");
});

// opcional: cerrar el menú cuando hago clic en un link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("activo");
});