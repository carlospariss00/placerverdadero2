document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('video');
    const videoPlayer = document.getElementById('videoPlayer');
    const container = document.querySelector('.container');
    
    if (videoUrl && videoPlayer) {
        videoPlayer.src = videoUrl;
    } else if (container) {
        container.innerHTML = `
            <div class="not-found">
                <h2>Video no encontrado</h2>
                <a href="index.html">Volver a la galería</a>
            </div>`;
    }

    // --- PROTECCIÓN EXTRA CONTRA DESCARGAS ---

    // 1. Desactivar click derecho en toda la página (opcional, pero recomendado)
    document.addEventListener('contextmenu', e => e.preventDefault());

    // 2. Bloquear atajos comunes (Ctrl+S, Ctrl+U)
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'i' || e.key === 'j')) || 
            (e.keyCode === 123)) { // F12 (DevTools)
            e.preventDefault();
            return false;
        }
    });

    // 3. Ocultar el botón de descarga en Chrome
    videoPlayer.setAttribute('controlsList', 'nodownload');
    
    // 4. Prevenir que se pueda arrastrar el video
    videoPlayer.addEventListener('dragstart', e => e.preventDefault());
});
