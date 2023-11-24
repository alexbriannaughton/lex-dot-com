document.addEventListener('DOMContentLoaded', (event) => {
    const flipButton = document.getElementById('flipButton');
    const video = document.querySelector('.video');

    flipButton.addEventListener('click', () => {
        video.classList.toggle('flipped');
    });
});