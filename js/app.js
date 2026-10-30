// Listado de eventos de la portada
const lista = document.getElementById("lista-eventos");

if (lista) {
  eventos.forEach((evento) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
      <h2>${evento.titulo}</h2>
      <p>${evento.fecha} · ${evento.hora}</p>
    `;
    lista.appendChild(tarjeta);
  });
}
