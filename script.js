const reloj = document.querySelector('.reloj');

function actualizarHora() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarHora, 1000);
