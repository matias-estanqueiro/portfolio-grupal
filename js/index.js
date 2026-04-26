document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('btn-play-hero');
    const equalizerBars = document.querySelectorAll('.hero__equalizer-bar');
    const audioFondo = document.getElementById('audio-fondo'); // Buscamos el audio invisible

    if (!playButton || !audioFondo) return;

    playButton.addEventListener('click', () => {
        const isNowPlaying = playButton.classList.toggle('is-playing');

        if (isNowPlaying) {
            // Cambiamos el botón
            playButton.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar Frecuencia';
            
            // Activamos las barritas
            equalizerBars.forEach(bar => bar.classList.add('animating'));
            
            // ¡DALE PLAY!
            audioFondo.play().catch(error => {
                console.log("El navegador bloqueó el autoplay o el archivo no existe:", error);
            });
            
        } else {
            // Cambiamos el botón al estado inicial
            playButton.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar Viaje Sónico';
            
            // Frenamos las barritas
            equalizerBars.forEach(bar => bar.classList.remove('animating'));
            
            // ¡PAUSA!
            audioFondo.pause();
        }
    });
});