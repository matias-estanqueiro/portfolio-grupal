// 1. Array JSON con el registro de la bitácora
const logbookData = [
    {
        date: "EARTH_2026_04.01",
        title: "El despegue (Inicio del proyecto)",
        icon: "fa-solid fa-rocket",
        markerClass: "", // Rosa por defecto
        description: "Nos reunimos por primera vez para definir la temática y el rumbo de nuestro proyecto. Al compartir ideas, nos dimos cuenta de que todos compartíamos una fuerte pasión por dos cosas: la música y la ciencia ficción. Así nació la idea de diseñar el sitio para una banda de rock espacial."
    },
    {
        date: "EARTH_2026_04.05",
        title: "Diseño de la nave (MockUp con Stitch IA)",
        icon: "fa-solid fa-palette",
        markerClass: "timeline__marker--tertiary", // Cyan
        description: "Comenzamos a generar las vistas visuales del sitio a través de la iteración de prompts utilizando Stitch IA. Tuvimos especial cuidado en diseñar interfaces que respetaran estrictamente los tres breakpoints suministrados por los requerimientos: 400px (Mobile), 900px (Tablet) y 1200px (Desktop)."
    },
    {
        date: "EARTH_2026_04.10",
        title: "Traducción de sistemas (Pasaje a código)",
        icon: "fa-solid fa-code",
        markerClass: "timeline__marker--primary-container", // Rosa oscuro
        description: "Stitch IA nos devolvió la estructura inicial en HTML y Tailwind CSS. Nuestro trabajo, en conjunto con Gemini Pro 3.1, fue refactorizar todo el código para construir la web utilizando únicamente HTML semántico y Vanilla CSS, eliminando por completo la dependencia de librerías externas y realizando una revisión inicial exhaustiva del código."
    },
    {
        date: "EARTH_2026_04.14",
        title: "Ajuste de coordenadas (Iteración con IA)",
        icon: "fa-solid fa-robot",
        markerClass: "", 
        description: "El núcleo del trabajo fue la iteración constante para pulir la maquetación y acercarnos al objetivo. Tuvimos que realizar un trabajo iterativo mucho más profundo y detallado en la vista de perfiles (profile.html), ya que la disposición de los elementos cambiaba de manera muy agresiva entre los distintos breakpoints."
    },
    {
        date: "EARTH_2026_04.18",
        title: "Pulido de escudos (Detalles manuales)",
        icon: "fa-solid fa-screwdriver-wrench",
        markerClass: "timeline__marker--tertiary",
        description: "Para alcanzar la máxima calidad visual, tuvimos que 'meter mano' directamente en el código. Revisamos, ajustamos paddings, corregimos flujos de Flexbox y pulimos detalles a mano dentro de los archivos para lograr una fidelidad lo más cercana posible a los mockups originales."
    },
    {
        date: "EARTH_2026_04.22",
        title: "Registro de misión (Realización de la bitácora)",
        icon: "fa-solid fa-book-journal-whills",
        markerClass: "timeline__marker--primary-container",
        description: "Desarrollamos esta misma sección que estás leyendo. Implementamos lógica en JavaScript para que estas tarjetas de la bitácora se inyecten dinámicamente en el DOM a partir de un objeto JSON, permitiéndonos escalar el registro sin tocar el HTML."
    },
    {
        date: "FUTURE_UNKNOWN",
        title: "Esta historia continuará...",
        icon: "fa-solid fa-meteor",
        markerClass: "",
        description: "El universo es vasto y el código infinito. La estructura está lista y la nave está en órbita, pero nuestro viaje de desarrollo frontend recién está comenzando. Seguimos optimizando los motores para nuestro próximo salto hiperespacial."
    }
];

// 2. Función para renderizar la línea de tiempo
function renderLogbook() {
    const trackContainer = document.getElementById('timeline-track');
    
    // Vaciamos el contenedor por seguridad
    trackContainer.innerHTML = '';

    // Iteramos sobre los datos del JSON y generamos el HTML
    logbookData.forEach(entry => {
        // Usamos template literals (backticks) para construir la estructura HTML de cada card
        const cardHTML = `
            <article class="timeline__node">
                <div class="timeline__marker ${entry.markerClass}">
                    <i class="${entry.icon}"></i>
                </div>
                <div class="timeline__card">
                    <time class="timeline__date">${entry.date}</time>
                    <h3 class="font-headline timeline__title">${entry.title}</h3>
                    <p class="timeline__description">${entry.description}</p>
                </div>
            </article>
        `;
        
        // Inyectamos el HTML al contenedor
        trackContainer.innerHTML += cardHTML;
    });
}

// 3. Ejecutar la función cuando el documento (DOM) haya cargado completamente
document.addEventListener('DOMContentLoaded', renderLogbook);