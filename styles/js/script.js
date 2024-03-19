// Wacht tot de DOM geladen is
document.addEventListener("DOMContentLoaded", function() {
    // Selecteer de video en het menu element
    var video = document.querySelector('.logo');
    var menu = document.querySelector('.menu');

    // Zoek het modaal venster voor de 18+ melding
    var modal = document.getElementById('ageConfirmationModal');

    // Controleer of het modaal venster is gevonden voordat je probeert eigenschappen te wijzigen
    if (modal) {
        // Toon het modaal venster voor de 18+ melding
        modal.style.display = 'block';
    }

    // Voeg een eventlistener toe om het menu in te laten faden nadat de video is gestopt
    if (video && menu) {
        video.addEventListener('ended', function() {
            // Pauzeer de video en spring naar het laatste frame
            video.pause();
            video.currentTime = video.duration;

            // Voeg een klasse toe om het menu in te laten faden
            menu.classList.add('fade-in');
            console.log("Video is gestopt, menu moet nu in beeld komen.");

            // Verberg het modaal venster na een vertraging van 3 seconden
            setTimeout(function() {
                if (modal) {
                    modal.style.display = 'none';
                }
            }, 5000); // Vertraging van 3 seconden (3000 milliseconden)
        });
    }

    // Voeg een eventlistener toe aan de bevestigingsknop van de 18+ melding
    var confirmButton = document.getElementById('confirmButton');
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            // Verberg het modaal venster wanneer de bevestigingsknop wordt ingedrukt
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    // JavaScript om het mobiele menu te laten verschijnen en verdwijnen
    function toggleMobileMenu() {
        console.log("Mobile menu toggled"); // Debuginformatie toegevoegd
        var menuContent = document.querySelector('.mobile-menu-content');
        if (menuContent) {
            menuContent.style.display === 'block' ? menuContent.style.display = 'none' : menuContent.style.display = 'block';
        }
    }
    
});
