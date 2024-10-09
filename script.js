document.addEventListener('DOMContentLoaded', () => {
    const lightsOff = document.querySelector('.lights-off');
    const cards = document.querySelectorAll('.card');
    
    // Show the cards one by one after the "lights up" animation ends
    setTimeout(() => {
        lightsOff.style.display = 'none'; // Remove the dark overlay
        showCardsSequentially(cards);
    }, 8000); // After the walk and lights-on sequence

    function showCardsSequentially(cards) {
        let delay = 0;
        cards.forEach((card, index) => {
            setTimeout(() => {
                if (index > 0) {
                    // Hide the previous card
                    cards[index - 1].style.animation = 'fadeOut 2s forwards';
                }
                card.classList.remove('hidden'); // Show current card
                card.style.animation = 'fadeIn 2s forwards';
            }, delay);
            delay += 6000; // Delay between each card (6 seconds)
        });
    }
});
