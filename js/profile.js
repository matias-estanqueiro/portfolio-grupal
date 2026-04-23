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
            { name: "Oracle/SQL", percentage: 100 }
        ],
        movies: [
            { title: "12 Monkeys", description: "Rompecabezas temporal brillante" },
            { title: "Fight Club", description: "Crítica ácida al consumismo" },
            { title: "Fear and Loathing in Las Vegas", description: "Viaje psicodélico rompereglas" }
        ],
        albums: [
            { title: "Misterioso Chocolate", band: "Misterioso Chocolate" },
        ]
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
        ]
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
        ]
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
}

// Ejecutamos la función cuando el DOM cargue
document.addEventListener('DOMContentLoaded', loadProfileData);