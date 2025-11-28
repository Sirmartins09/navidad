// FECHA OBJETIVO → NAVIDAD 2025
const fechaEvento = new Date("December 25, 2025 00:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}, 1000);


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

