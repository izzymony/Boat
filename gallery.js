const priceFilter = document.getElementById('price-filter');
const availabilityFilter = document.getElementById('availability-filter');
const boatCards = document.querySelectorAll('.boat-card');

function filterBoats() {
    const priceValue = priceFilter.value;
    const availabilityValue = availabilityFilter.value;

    boatCards.forEach(card => {
        const price = parseInt(card.getAttribute('data-price'));
        const availability = card.getAttribute('data-availability');

        let priceMatch = false;
        if (priceValue === 'all') priceMatch = true;
        else if (priceValue === 'low' && price < 500) priceMatch = true;
        else if (priceValue === 'medium' && price >= 500 && price <= 1000) priceMatch = true;
        else if (priceValue === 'high' && price > 1000) priceMatch = true;

        let availabilityMatch = availabilityValue === 'all' || availabilityValue === availability;

        if (priceMatch && availabilityMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    priceFilter.addEventListener('change', filterBoats);
availabilityFilter.addEventListener('change', filterBoats);
}

