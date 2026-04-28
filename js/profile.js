// js/profile.js

// 1. Nuestra "Base de Datos" simulada en JSON
const crewDatabase = {
    ayelen: {
        name: "AYELEN",
        role: "Vocals",
        iconClass: "fa-solid fa-microphone",
        locationFull: "Base Alpha, Kepler-452b",
        locationShort: "Sector 7G Alpha",
        age: "28",
        status: "ONLINE",
        instrument: "Vocal Synthesis",
        quote: '"El vacio del universo se llena con mi voz"',
        image: "img/profile_vocalist_01.png",
        skills: [
            { name: "JAVA (SpringBoot)", percentage: 100 },
            { name: "Angular", percentage: 60 },
            { name: "Oracle/SQL", percentage: 100 },
            { name: "C#", percentage: 50 },
            { name: "Kotlin", percentage: 50 },
        ],
        movies: [
            { title: "12 Monkeys", description: "Rompecabezas temporal brillante" },
            { title: "Fight Club", description: "Crítica ácida al consumismo" },
            { title: "Fear and Loathing in Las Vegas", description: "Viaje psicodélico rompereglas" }
        ],
        albums: [
            { title: "Prender un fuego", band: "Marilina Bertoldi" },
            { title: "Bach", band: "Bandalos Chinos" },
            { title: "Chances", band: "Illya Kuryaki & The Valderramas" }
        ],
        feature: 'skill-bars-animated'
    },
    lucio: {
        name: "LUCIO",
        role: "Guitar",
        iconClass: "fa-solid fa-guitar",
        locationFull: "Orbital Station Sirius",
        locationShort: "Sirius Station",
        age: "34",
        status: "ONLINE",
        instrument: "Plasma Guitar",
        quote: '"Distorsionando la galaxia con cada nota"',
        image: "img/profile_guitarist_01.png",
        skills: [
            { name: "JAVA (SpringBoot)", percentage: 100 },
            { name: "Python", percentage: 60 },
            { name: "Angular", percentage: 55 },
        ],
        movies: [
            { title: "GoodFellas", description: "Crónica del crimen organizado" },
            { title: "12 Monkeys", description: "Rompecabezas temporal brillante" },
            { title: "Amacord", description: "Recuerdos de la infancia y la juventud" }
        ],
        albums: [
            { title: "Dúplo la Dua", band: "Dúplo la Dua" },
            { title: "Bluzzarella Blues", band: "Bluzzarella Blues" },
        ],
        feature: 'typing-quote'
    },
    matias: {
        name: "MATIAS",
        role: "Drums",
        iconClass: "fa-solid fa-drum",
        locationFull: "Orion Nebula Outpost",
        locationShort: "Orion Outpost",
        age: "37",
        status: "ONLINE",
        instrument: "Quantum Percussion",
        quote: '"Manteniendo el pulso del universo vivo"',
        image: "img/profile_drummer_01.png",
        skills: [
            { name: "PHP (Laravel)", percentage: 75 },
            { name: "JAVA (SpringBoot)", percentage: 60 },
            { name: "VUE.js", percentage: 40 },
        ],
        movies: [
            { title: "Ender's Game", description: "Estrategia y liderazgo en un futuro distópico" },
            { title: "Star Wars", description: "La lucha del bien y el mal en la galaxia" },
            { title: "Lord of The Rings", description: "Fantasía épica y aventuras en la Tierra Media" },
        ],
        albums: [
            { title: "Hybrid Theory", band: "Linkin Park" },
            { title: "Lifelines", band: "I Prevail" },
            { title: "Getting Away With Murder", band: "Papa Roach" },
        ],
        feature: 'countdown',
        nextShow: '2024-12-31T20:00:00'
    }
};

// 2. Función para inicializar el perfil
function loadProfileData() {
    // Obtenemos el parámetro de la URL (ej: ?member=ayelen)
    const urlParams = new URLSearchParams(window.location.search);
    const memberKey = urlParams.get('member');

    // Si no hay parámetro o el parámetro no existe en la base de datos, cargamos a Ayelen por defecto
    const memberData = crewDatabase[memberKey] || crewDatabase['ayelen'];

    // 3. Inyectamos los datos en el DOM
    document.getElementById('profile-img').src = memberData.image;
    document.getElementById('profile-img').alt = `Retrato de ${memberData.name}`;
    
    document.getElementById('profile-name').textContent = memberData.name;
    document.getElementById('profile-role').textContent = memberData.role;
    document.getElementById('profile-stage-role').textContent = memberData.role;
    
    document.getElementById('profile-icon').className = memberData.iconClass; // Cambia el ícono dinámicamente
    
    document.getElementById('profile-location-desktop').textContent = memberData.locationFull;
    document.getElementById('profile-location-mobile').textContent = memberData.locationFull;
    document.getElementById('profile-location-tablet').textContent = memberData.locationShort;
    
    document.getElementById('profile-age').textContent = memberData.age;
    document.getElementById('profile-quote').textContent = memberData.quote;
    document.getElementById('profile-instrument').textContent = memberData.instrument;
    
    document.getElementById('profile-status-mobile').textContent = memberData.status.toUpperCase();
    document.getElementById('profile-status-desktop').textContent = memberData.status;

    // --- RENDERIZADO DINÁMICO DE LISTAS ---
    // 3. Renderizar Habilidades
    const skillsList = document.getElementById('profile-skills-list');
    skillsList.innerHTML = ''; // Limpiamos por si acaso
    memberData.skills.forEach(skill => {
        skillsList.innerHTML += `
            <li>
                <div class="progress-bar__header">
                    <span>${skill.name}</span>
                    <span class="progress-bar__percentage">${skill.percentage}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar__fill" style="width: ${skill.percentage}%;"></div>
                </div>
            </li>
        `;
    });

    // 4. Renderizar Películas
    const moviesList = document.getElementById('profile-movies-list');
    moviesList.innerHTML = '';
    memberData.movies.forEach(movie => {
        moviesList.innerHTML += `
            <li class="accordion__list-item">
                <div>
                    <strong>${movie.title}</strong><br>
                    <span class="accordion__text-small">${movie.description}</span>
                </div>
            </li>
        `;
    });

    // 5. Renderizar Discos
    const albumsList = document.getElementById('profile-albums-list');
    albumsList.innerHTML = '';
    memberData.albums.forEach(album => {
        albumsList.innerHTML += `
            <li class="accordion__list-item">
                <div class="accordion__icon-box">
                    <i class="fa-solid fa-music accordion__icon"></i>
                </div>
                <div>
                    <strong>${album.title}</strong><br>
                    <span class="accordion__text-small">${album.band}</span>
                </div>
            </li>
        `;
    });
    // 6. Cargar características específicas del miembro
    loadFeature(memberData);
}

// ─── FEATURES INDIVIDUALES ─────────────────────────────────

function loadFeature(memberData) {
    const featureMap = {
        'skill-bars-animated': featureAnimatedBars,
        'typing-quote':        featureTypingQuote,
        'countdown':           featureCountdown,
    };
    const fn = featureMap[memberData.feature];
    if (fn) fn(memberData);
}

// ── AYELEN: Barras animadas con IntersectionObserver ────────
// Funciona porque las barras YA existen en el DOM (las crea loadProfileData)
function featureAnimatedBars() {
    const fills = document.querySelectorAll('.progress-bar__fill');
    if (!fills.length) return; // Si el HTML de ese breakpoint no tiene barras, no explota

    fills.forEach(fill => {
        fill.dataset.target = fill.style.width;
        fill.style.width = '0%';
        fill.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Buscamos cualquier contenedor de skills que exista en ESE html
    const anchor = document.getElementById('profile-skills-list')
                || document.querySelector('.progress-bar')?.closest('section, div, ul');
    if (!anchor) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fills.forEach(fill => fill.style.width = fill.dataset.target);
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(anchor);
}

// ── LUCIO: Efecto de tipeo en la quote ──────────────────────
// Busca el elemento de quote con múltiples selectores posibles
function featureTypingQuote(memberData) {
    // Cada HTML puede tener un id o clase distinta, probamos todos
    const quoteEl = document.getElementById('profile-quote')
                 || document.querySelector('.profile-hero__quote')
                 || document.querySelector('p[class*="italic"]')
                 || document.querySelector('p[class*="font-light"]');
    if (!quoteEl) return;

    const fullText = memberData.quote;
    quoteEl.textContent = '';

    let i = 0;
    const interval = setInterval(() => {
        quoteEl.textContent = fullText.slice(0, i) + '█';
        i++;
        if (i > fullText.length) {
            quoteEl.textContent = fullText;
            clearInterval(interval);
        }
    }, 45);
}

// ── MATIAS: Countdown al próximo show ───────────────────────
// Crea su propio widget y lo inserta donde pueda
function featureCountdown(memberData) {
    const widget = document.getElementById('countdown-widget');
    if (!widget || !memberData.nextShow) return;

    widget.style.display = 'block'; // Solo lo muestra si corresponde
    const targetDate = new Date(memberData.nextShow);

    function tick() {
        const diff = targetDate - new Date();
        if (diff <= 0) return;
        document.getElementById('cd-days').textContent  = String(Math.floor(diff / 86400000)).padStart(2,'0');
        document.getElementById('cd-hours').textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        document.getElementById('cd-mins').textContent  = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        document.getElementById('cd-secs').textContent  = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
    }
    tick();
    setInterval(tick, 1000);
}

// Ejecutamos la función cuando el DOM cargue
document.addEventListener('DOMContentLoaded', loadProfileData);