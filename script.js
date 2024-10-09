// Actualizar reloj en tiempo real
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Mostrar la fecha actual
function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options); // Formato de fecha en español
    dateElement.textContent = formattedDate;
}

// Alternar tema claro/oscuro
const themeToggleButton = document.getElementById('toggle-theme');
let isDarkMode = false;

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    isDarkMode = !isDarkMode;

    // Cambiar estilo del botón según el tema
    if (isDarkMode) {
        themeToggleButton.textContent = 'Cambiar a Tema Claro';
        themeToggleButton.classList.remove('light-mode');
    } else {
        themeToggleButton.textContent = 'Cambiar a Tema Oscuro';
        themeToggleButton.classList.add('light-mode');
    }
});

// Iniciar con tema claro por defecto
document.body.classList.add('light');

// Actualizar reloj cada segundo
setInterval(updateClock, 1000);

// Actualizar fecha al cargar la página
updateDate();
