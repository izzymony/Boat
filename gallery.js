const priceFilter = document.getElementById('price-filter');
const availabilityFilter = document.getElementById('availability-filter');
const boatCards = document.querySelectorAll('.boat-card');
const modal = document.getElementById("modal");
            const modalImage = document.getElementById("modal-image");
            const modalTitle = document.getElementById("modal-title");
            const modalDescription = document.getElementById("modal-description");
            const modalPrice = document.getElementById("modal-price");
            const modalAvailability = document.getElementById("modal-availability");
            const closeModal = document.getElementById("close-modal");


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



boatCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector('img').src;
        const description = card.dataset.description;
        const price = card.querySelector('.text-blue-500').textContent;
        const availability = card.querySelector(".text-green-500, .text-red-500").textContent;

        modalImage.src = image;
        modalTitle.textContent = card.querySelector('h3').textContent;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
        modalAvailability.textContent = availability;

        modal.classList.remove('hidden')
    })

})

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
})