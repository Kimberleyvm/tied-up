// Wacht tot de DOM geladen is
document.addEventListener("DOMContentLoaded", function() {
    // Selecteer de video en het menu element
    var video = document.querySelector('.logo');
    var menu = document.querySelector('.menu');
    
    // Toon het modaal venster voor de 18+ melding
    var modal = document.getElementById('ageConfirmationModal');
    modal.style.display = 'block';

    // Voeg een eventlistener toe om het menu in te laten faden nadat de video is gestopt
    video.addEventListener('ended', function() {
        // Pauzeer de video en spring naar het laatste frame
        video.pause();
        video.currentTime = video.duration;
        
        // Voeg een klasse toe om het menu in te laten faden
        menu.classList.add('fade-in');
        console.log("Video is gestopt, menu moet nu in beeld komen.");

        // Verberg het modaal venster na een vertraging van 3 seconden
        setTimeout(function() {
            modal.style.display = 'none';
        }, 5000); // Vertraging van 3 seconden (3000 milliseconden)
    });

    // Voeg een eventlistener toe aan de bevestigingsknop van de 18+ melding
    var confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', function() {
        // Verberg het modaal venster wanneer de bevestigingsknop wordt ingedrukt
        modal.style.display = 'none';
    });
});
