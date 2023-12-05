document.addEventListener('DOMContentLoaded', (event) => {
    const flipButton = document.getElementById('flipButton');
    const video = document.getElementById('video');

    flipButton.addEventListener('click', () => {
        video.classList.toggle('flipped');
    });
});